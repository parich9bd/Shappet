const articlesService = require("../services/articles.service");

async function getArticles(req, res, next) {
  try {
    const articles = await articlesService.getAllArticles();

    res.json(articles);
  } catch (error) {
    next(error);
  }
}

async function getArticle(req, res, next) {
  try {
    const article = await articlesService.getArticleById(req.params.id);

    if (!article) {
      return res.status(404).json({
        error: "Article not found",
      });
    }

    res.json(article);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getArticles,
  getArticle,
};