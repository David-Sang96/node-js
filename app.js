const express = require("express");
const app = express();
const mongoose = require("mongoose");
//db url
const mongoUrl =
  "mongodb+srv://davidsang:david1234@cluster0.icwxdkm.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("connected to db");
    app.listen(port, () => {
      console.log("server is running now");
    });
  })
  .catch((err) => {
    console.log(err);
  });

const port = 3000;
app.set("views", "./views");
app.set("view engine", "ejs");
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.static("public"));
const Blog = require("./models/Blog");

app.get("/add-blog", async (req, res) => {
  const blog = new Blog({
    title: "blog title 3",
    intro: "blog intro 3",
    body: "blog body 3",
  });
  await blog.save();
  res.send("blog saved");
});

app.get("/single-blog", async (req, res) => {
  const blog = await Blog.findById("65b392a9241d7e8dc627b884");
  res.json(blog);
});

app.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });

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
