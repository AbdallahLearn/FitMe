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

// Reset Password By Email //
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
//=== Reset Password By Email ===//

// Update Password By Id //
export const updatePassword = async (req, res) => {
  const { id }          = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findById(id);
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
    console.error('Error during password update:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
//=== Update Password By Id ===//

// Update Name //
export const updateName = async (req, res) => {
  const { id }      = req.params;
  const { newName } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    const nameSchema = z.string()
      .min(4, { message: "Name should be more than 3 characters." })
      .regex(/^[A-Za-z\u0600-\u06FF ]+$/, {
        message: "Name should only contain Arabic or English letters."
      });

    const nameValidation = nameSchema.safeParse(newName);
    if (!nameValidation.success) {
      const firstError = nameValidation.error.errors[0];
      return res.status(400).json({ message: firstError.message });
    }

    user.name = newName;
    await user.save();

    res.status(200).json({ message: 'Name Updated Successfully' });
  } catch (error) {
    console.error('Error During Name Update:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
//=== Update Name ===//

// Update Email //
export const updateEmail = async (req, res) => {
  const { id }        = req.params;
  const { newEmail }  = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    const emailSchema = z.string()
      .email({ message: "Please Enter a Valid Email Address." });

    const emailValidation = emailSchema.safeParse(newEmail);
    if (!emailValidation.success) {
      const firstError = emailValidation.error.errors[0];
      return res.status(400).json({ message: firstError.message });
    }

    user.email = newEmail;
    await user.save();

    res.status(200).json({ message: 'Email Updated Successfully' });
  } catch (error) {
    console.error('Error during email update:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
//=== Update Email ===//

// Delete User //
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // حذف المستخدم بواسطة id
    const user = await User.findByIdAndDelete(id);

    // التحقق من وجود المستخدم
    if (!user) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    res.status(200).json({ message: 'User Deleted Successfully' });
  } catch (error) {
    console.error('Error During User Deletion:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
//=== Delete User ===//

// Get User Details //
export const getUser = async (req, res) => {
  const { id } = req.params; // Get the user ID from the URL parameters

  try {
      // Find the user by ID, and populate any necessary fields
      const user = await User.findById(id).select('-password'); // Exclude the password field

      // If user not found, return a 404 error
      if (!user) {
          return res.status(404).json({ message: 'User Not Found' });
      }

      // Return the user data if found
      res.status(200).json({ 
          id: user._id,
          name: user.name,
          email: user.email,
          usertype: user.usertype,
          // Add any other fields you want to return here
      });
  } catch (error) {
      console.error('Error Fetching User:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
};
//=== Get User Details ===//