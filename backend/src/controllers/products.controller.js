const productsService = require("../services/products.service");

async function getProducts(req, res, next) {
  try {
    const products = await productsService.getAllProducts();

    res.json(products);
  } catch (error) {
    next(error);
  }
}

async function getProduct(req, res, next) {
  try {
    const product = await productsService.getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
};