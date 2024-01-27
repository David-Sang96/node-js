const Blog = require("../models/Blog");

const BlogController = {
  get: async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render("home", {
      blogs,
      title: "Home",
    });
  },

  create: async (req, res) => {
    const { title, intro, body } = req.body;
    const blog = new Blog({
      title,
      intro,
      body,
    });
    await blog.save();
    res.redirect("/");
  },

  createForm: (req, res) => {
    res.render("blogs/create", { title: "Blog create" });
  },

  delete: async (req, res, next) => {
    try {
      const id = req.params.id;
      await Blog.findByIdAndDelete(id);
      res.redirect("/");
    } catch (e) {
      console.log(e);
      next();
    }
  },

  details: async (req, res, next) => {
    try {
      const id = req.params.id;
      const blog = await Blog.findById(id);
      res.render("blogs/details", {
        blog,
        title: "Blog Details",
      });
    } catch (e) {
      console.log(e);
      next();
    }
  },
};

module.exports = BlogController;
