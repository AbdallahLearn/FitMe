import mongoose from 'mongoose';
import Model from "../models/userModel.js";
import User from '../models/User.js';
// Function to create a new model for a user
export const createModel = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the model already exists for this user
    const existingModel = await Model.findOne({ userId: user._id });
    if (existingModel) {
      return res.status(400).json({ message: 'User already has a model.' });
    }

    const { gender, veinsColor, weight, height, skinColor } = req.body;
    if (!gender || !veinsColor || !weight || !height || !skinColor) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newModel = new Model({
      userId: user._id,
      gender,
      veinsColor,
      weight,
      height,
      skinColor,
    });

    const savedModel = await newModel.save();
    return res.status(201).json({
      message: "Model created successfully",
      userModel: savedModel,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error saving the model: " + error.message });
  }
};

export const getModel = async (req, res) => {
  try {
    const { userId } = req.params;

    const model = await Model.findOne({ userId: new mongoose.Types.ObjectId(userId) });

    if (!model) {
      return res.status(404).json({ message: "No model found for this user" });
    }

    return res.status(200).json(model);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving model: " + error.message });
  }
};





