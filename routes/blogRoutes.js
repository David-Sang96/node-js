const express = require("express");
const router = express.Router();
const BlogController = require("../controller/blogController");

router.get("", BlogController.get);

router.post("", BlogController.create);

router.get("/create", BlogController.createForm);

router.get("/:id", BlogController.details);

router.post("/:id/delete", BlogController.delete);

module.exports = router;
