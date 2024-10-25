import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { z } from 'zod';

// Sign Up //
const schema = z.object({
  name: z.string() // إضافة z قبل .string()
    .min(4, { message: "Name should be more than 3 characters." })
    .regex(/^[A-Za-z\u0600-\u06FF ]+$/, { message: "Name should only contain Arabic or English letters." }),

  email: z.string()
    .email({ message: "Please enter a valid email address." }),

  password: z.string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/, {
      message: "Password must include uppercase, lowercase, a number, and a special character."
    }),
});

export const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;

  const validationResult = schema.safeParse({ name, email, password });

  if (!validationResult.success) {
    // عرض جميع الأخطاء بدلاً من أول خطأ فقط
    const errors = validationResult.error.errors.map(err => err.message);
    return res.status(400).json({ message: errors });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error); 
    res.status(500).json({ message: 'Server error', error: error.message }); 
  }
};
//=== Sign Up ===//

// Authenticate Token //
export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); 
        req.user = user; 
        next();
    });
};
//=== Authenticate Token ===//

// Sign In //
export const signInUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid Credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user });
    } catch (error) {
        console.error('Error During Login:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};
//=== Sign In ===//

// Reset Password //
export const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    const passwordSchema = z.string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message: "Password must include uppercase, lowercase, a number, and a special character."
      });

    const passwordValidation = passwordSchema.safeParse(newPassword);
    if (!passwordValidation.success) {
      const firstError = passwordValidation.error.errors[0];
      return res.status(400).json({ message: firstError.message });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error during password reset:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
//=== Reset Password ===//
