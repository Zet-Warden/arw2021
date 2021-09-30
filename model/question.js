const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = {
    name: {
        type: String,
        default: "Anonymous",
    },
    email: {
        type: String,
        default: "No email provided",
    },
    question: {
        type: String,
        default: "No question provided",
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

module.exports = mongoose.model("question", new Schema(questionSchema));
