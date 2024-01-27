const express = require("express");
const router = express.Router();
const BlogController = require("../controller/blogController");

router.get("", BlogController.get);

router.post("", BlogController.create);

router.get("/create", BlogController.createForm);

router.post("/:id/delete", BlogController.delete);

router.get("/:id", BlogController.details);

module.exports = router;
