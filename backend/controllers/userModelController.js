import Model from "../models/userModel.js";
import User from "../models/User.js";

export const createModel = async (req, res) => {
  try {
    const { userId, gender, veinsColor, width, height, skinColor } = req.body;

    if (!userId || !gender || !veinsColor || !width || !height || !skinColor) {
      throw new Error("All fields are required");
    }

    const newModel = new Model({
      userId,
      gender,
      veinsColor,
      width,
      height,
      skinColor,
    });

    const savedModel = await newModel.save();
    res.status(201).json({
      message: "Model created successfully",
      userModel: savedModel,
    });
    return savedModel;
  } catch (error) {
    throw new Error("Error saving the model: " + error.message);
  }
};

// Function to get all models for a user
export const getModel = async (req, res) => {
  try {
    const { userId } = req.params;

    const model = await Model.find({ userId }); // Fetch all model for the user

    if (!model.length) {
      return res.status(404).json({ message: "No model found for this user" });
    }

    res.status(200).json(model);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving model: " + error.message });
  }
};

// Import the Model from your models file
export const deleteModel = async (req, res) => {
  try {
    const { id } = req.params; // Get model ID from request parameters

    // Find the model and check if it exists
    const model = await Model.findById(id);

    if (!model) {
      return res.status(404).json({ message: "Model not found" });
    }

    // Optional: Check if the model belongs to the logged-in user
    if (model.userId.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this model" });
    }

    // Delete the model
    await Model.findByIdAndDelete(id);

    res.status(200).json({ message: "Model deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting the model: " + error.message });
  }
};
