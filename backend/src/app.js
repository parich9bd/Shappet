const express = require("express");
const cors = require("cors");

const productsRoutes = require("./routes/products.routes");
const articlesRoutes = require("./routes/articles.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Shopet API",
  });
});

app.use("/api/products", productsRoutes);
app.use("/api/articles", articlesRoutes);

app.use(errorHandler);

module.exports = app;