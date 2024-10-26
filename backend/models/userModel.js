import mongoose from 'mongoose';

const modelSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true,
    },
    veinsColor: {
        type: String,
        enum: ['warm', 'cool','neutral'],
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    skinColor: {
        name: {
          type: String,
          required: true,
        },
        code: {
          type: String,
          required: true,
        },
      },
    generatedModel: {
        type: String, // You might store the SVG string or a reference to the generated model
    },
    suitableColors: {
        type: [String], // Array of colors suggested by the ChatGPT API
    },
},
{ timestamps: true }
);

const Model = mongoose.model('Model', modelSchema);

export default Model;
