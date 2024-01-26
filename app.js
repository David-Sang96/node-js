const express = require("express");
const app = express();
const port = 3000;
app.set("views", "./views");
app.set("view engine", "ejs");
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.static("public"));

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

app.get("/contact", (req, res) => {
  res.render("contact", { title: "contact" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404 not found" });
  r;
});

app.listen(port);
