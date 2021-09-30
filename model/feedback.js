const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedbackSchema = {
    rating: {
        type: Number,
        default: 0,
    },
    bug: {
        type: String,
        default: "No bug findings reported",
    },
    suggestion: {
        type: String,
        default: "No suggestions provided",
    },
    compliment: {
        type: String,
        default: "No compliments provided",
    },
    status: {
        type: Boolean,
        default: false,
    },
    timestamp: {
        type: Date,
        default: new Date(),
    },
};

module.exports = mongoose.model("feedback", new Schema(feedbackSchema));
