const express = require("express");
const app = express();
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
//db url
const mongoUrl =
  "mongodb+srv://davidsang:david1234@cluster0.icwxdkm.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("connected to db");
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });

const port = 3000;
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/default");
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.static("public"));
const Blog = require("./models/Blog");
app.use(express.urlencoded({ extended: true }));

//create
app.get("/add-blog", async (req, res) => {
  const blog = new Blog({
    title: "blog title 3",
    intro: "blog intro 3",
    body: "blog body 3",
  });
  await blog.save();
  res.send("blog saved");
});

//get single data
app.get("/single-blog", async (req, res) => {
  const blog = await Blog.findById("65b392a9241d7e8dc627b884");
  res.json(blog);
});

//get all data and sort in order
app.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.render("home", {
    blogs,
    title: "Home",
  });
});

//create blog
app.post("/blogs", async (req, res) => {
  const { title, intro, body } = req.body;
  const blog = new Blog({
    title,
    intro,
    body,
  });
  await blog.save();
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about us" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "contact" });
});

app.get("/blogs/create", (req, res) => {
  res.render("blogs/create", { title: "Blog create" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404 not found" });
  r;
});
