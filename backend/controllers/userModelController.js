import mongoose from 'mongoose';
import Model from "../models/userModel.js";
import User from '../models/User.js';

// Function to create a new model for a user
export const createModel = async (req, res) => {
  console.log("Incoming data:", req.body); // Log the incoming data

  try {
    console.log("User ID from token:", req.user.id); // Log the user ID from token

    const user = await User.findById(req.user.id);
    if (!user) {
      console.error("User not found with ID:", req.user.id); // Log if user is not found
      return res.status(404).json({ message: 'User not found' });
    }

    const existingModel = await Model.findOne({ userId: user._id });
    if (existingModel) {
      console.warn("User already has a model:", existingModel._id); // Log if model already exists
      return res.status(400).json({ message: 'User already has a model.' });
    }

    const { gender, veinsColor, weight, height, skinColor, generatedModel,suitableColors } = req.body;
    if (!gender || !veinsColor || !weight || !height || !skinColor ) { //add the suitableColor if there any mistake
      console.error("Validation failed. Missing required fields."); // Log validation error
      return res.status(400).json({ message: "All fields are required" });
    }

    const newModel = new Model({
      userId: user._id,
      gender,
      veinsColor,
      weight,
      height,
      skinColor,
      generatedModel,
      suitableColors,
    });

    console.log("New model data:", { // Log the model data to be saved
      userId: user._id,
      gender,
      veinsColor,
      weight,
      height,
      skinColor,
      generatedModel,
      suitableColors,
    });

    try {
      const savedModel = await newModel.save();
      console.log("Model saved successfully:", savedModel._id); // Log saved model ID
      return res.status(201).json({
        message: "Model created successfully",
        userModel: savedModel,
      });
    } catch (saveError) {
      console.error("Error saving the model:", saveError); // Log specific save error
      return res.status(500).json({ message: "Error saving the model: " + saveError.message });
    }
  } catch (error) {
    console.error("Error processing the request:", error); // Log any outer catch errors
    return res.status(500).json({ message: "Error processing the request: " + error.message });
  }
};

export const updateModel = async (req, res) => {
  const { userId } = req.params;
  console.log("Fetching model for user ID:", userId);

  // Find the model by userId
  const model = await Model.findOne({ userId: new mongoose.Types.ObjectId(userId) });

  if (!model) {
    console.warn("No model found for user ID:", userId);
    return res.status(404).json({ message: "No model found for this user" });
  }

  const { generatedModel, suitableColors } = req.body;
  model.generatedModel = generatedModel;
  model.suitableColors = suitableColors

  await model.save();
  return res.status(200).json({ message: "Model updated successfully" });
};


// Function to get the model for a user
export const getModel = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("Fetching model for user ID:", userId); // Log user ID for fetching model

    const model = await Model.findOne({ userId: new mongoose.Types.ObjectId(userId) });

    if (!model) {
      console.warn("No model found for user ID:", userId); // Warn if no model is found
      return res.status(404).json({ message: "No model found for this user" });
    }

    console.log("Model retrieved successfully:", model._id); // Log retrieved model ID
    return res.status(200).json(model);
  } catch (error) {
    console.error("Error retrieving model:", error); // Log error if retrieval fails
    return res.status(500).json({ message: "Error retrieving model: " + error.message });
  }
};
