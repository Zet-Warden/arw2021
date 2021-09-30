const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
    res.render("login", { title: "login page" });
});

app.get("/error", (req, res) => {
    res.render("login", { title: "login page", error: true });
});

app.post("/authenticate", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        res.redirect("../main");
    } else {
        res.redirect("./error");
    }
});

module.exports = app;
