const express = require("express");
const app = express();
const port = 3000;
app.set("views", "./views");
app.set("view engine", "ejs");

//controller function

app.get("/", (req, res) => {
  const blogs = [
    { title: "blog title 1", intro: "this is blog 1 intro" },
    { title: "blog title 2", intro: "this is blog 2 intro" },
    { title: "blog title 3", intro: "this is blog 3 intro" },
  ];

  res.render("home", {
    blogs,
  });
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
