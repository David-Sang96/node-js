const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const blogRoutes = require("./routes/blogRoutes");
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
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/default");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about us" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "contact" });
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404 not found" });
  r;
});
