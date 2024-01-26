const express = require("express");
const app = express();
const port = 3000;
app.set("views", "./views");
app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log("first middleware function is running");
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    { title: "blog title 1", intro: "this is blog 1 intro" },
    { title: "blog title 2", intro: "this is blog 2 intro" },
    { title: "blog title 3", intro: "this is blog 3 intro" },
  ];

  res.render("home", {
    blogs,
    title: "Home",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about us" });
});

app.use((req, res, next) => {
  console.log("second middleware function is running");
  next();
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "contact" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404 not found" });
  r;
});

app.listen(port);
