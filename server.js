const express = require("express");
const post = require("./routes/post");
const login = require("./routes/login");
const hbs = require("hbs");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const Feedback = require("./model/feedback");
const Question = require("./model/question");

const app = express();

hbs.registerHelper("dateToString", function (date) {
    return date.toDateString();
});

app.use(
    session({
        secret: "arw2021",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 3600000 }, //1hr
        store: MongoStore.create({ mongoUrl: process.env.DB_URI, dbName: "arw2021submissions" }),
    })
);

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
    //redirect if the user is not logged in
    if (!req.session.login) res.redirect("/");

    const feedbackResult = await Feedback.find({}).exec();
    const questionResult = await Question.find({}).exec();

    res.render("main", { question: questionResult, feedback: feedbackResult });
});

app.put("/update", async (req, res) => {
    const { id, isChecked } = req.body;
    await Question.updateOne({ _id: id }, { $set: { status: isChecked } });
    res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server is listening on port: " + port);
});
