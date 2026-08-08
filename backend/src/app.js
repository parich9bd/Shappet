const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const productsRoutes = require("./routes/products.routes");
const articlesRoutes = require("./routes/articles.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://shappet.ir"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Shopet API",
  });
});

app.use("/api/products", productsRoutes);
app.use("/api/articles", articlesRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);

module.exports = app;
