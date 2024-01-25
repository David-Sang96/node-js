const express = require("express");
const app = express();
const port = 3000;
app.set("views", "./views");
app.set("view engine", "ejs");

//controller function

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use((req, res) => {
  res.status(404).render("404");
  r;
});

app.listen(port);
