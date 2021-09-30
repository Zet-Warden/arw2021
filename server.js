const express = require("express");
const post = require("./routes/post");
const login = require("./routes/login");
const hbs = require("hbs");
const Feedback = require("./model/feedback");
const Question = require("./model/question");

const app = express();

hbs.registerHelper("dateToString", function (date) {
    console.log(date);
    return date.toDateString();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/post", post);
app.use("/login", login);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.redirect("./login");
});

app.get("/main", async (req, res) => {
    const feedbackResult = await Feedback.find({}).exec();
    const questionResult = await Question.find({}).exec();

    res.render("main", { question: questionResult, feedback: feedbackResult });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server is listening on port: " + port);
});
