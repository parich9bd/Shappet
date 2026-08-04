const express = require("express");

const {
  getArticles,
  getArticle,
} = require("../controllers/articles.controller");

const router = express.Router();

router.get("/", getArticles);
router.get("/:id", getArticle);

module.exports = router;