const express = require("express");
const db = require("mongoose");
const Feedback = require("../model/feedback");
const Question = require("../model/question");
require("dotenv").config();

const app = express.Router();
db.connect(process.env.DB_URI);

app.post("/questions", (req, res) => {
    const result = new Question(req.body).save();

    result
        .then(() => {
            res.status(200).json({ status: "Okay", msg: "Data saved" });
        })
        .catch(() => {
            res.status(500).json({ status: "Error", msg: "Data not saved" });
        });
});

app.post("/feedbacks", (req, res) => {
    const result = new Feedback(req.body).save();
    result
        .then(() => {
            res.status(200).json({ status: "Okay", msg: "Data saved" });
        })
        .catch(() => {
            res.status(500).json({ status: "Error", msg: "Data not saved" });
        });
});

module.exports = app;
