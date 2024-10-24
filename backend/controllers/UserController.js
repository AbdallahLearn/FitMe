import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { z } from 'zod';


const schema = z.object({
  name: z
    .string()
    .min(4, { message: "Name should be more than 3 characters." })
    .regex(/^[A-Za-z\u0600-\u06FF ]+$/, { message: "Name should only contain Arabic or English letters." }),

  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/, {
      message: "Password must include uppercase, lowercase, a number, and a special character."
    }),
});

export const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;

  const validationResult = schema.safeParse({ name, email, password });

  if (!validationResult.success) {
    const firstError = validationResult.error.errors[0];
    return res.status(400).json({ message: firstError.message });
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



export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); 
        req.user = user; 
        next();
    });
};



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
        res.json({token,user});
    } catch (error) {
        console.error('Error During Login:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};











export const getUser = async (req, res) => {
    const { id } = req.params; // Get the user ID from the URL parameters

    try {
        // Find the user by ID
        const user = await User.findById(id).populate("ideas");

        // If user not found, return a 404 error
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // If user found, return user data (excluding password)
        // res.status(200).json({
        //     id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     usertype: user.usertype,
        //     // Add any other fields you want to return
        // });
        res.status(200).json({user});
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        // Retrieve all users from the database
        const users = await User.find();

        // If no users are found, return an empty array
        if (!users.length) {
            return res.status(200).json([]);
        }

        // Return users' data (excluding sensitive information like passwords)
        // const userData = users.map(user => ({
        //     id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     usertype: user.usertype,
        //     // Add any other fields you want to return
        // }));

        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export const deleteUser = async (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a URL parameter

    try {
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete the user
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};