const productsService = require("../services/products.service");

async function getProducts(req, res, next) {
  console.log("➡️ GET /api/products");

  try {
    console.log("🔄 Calling productsService.getAllProducts()");

    const products = await productsService.getAllProducts();

    console.log("✅ Products received:", products.length);

    return res.status(200).json(products);
  } catch (error) {
    console.error("❌ getProducts error:", error);

    return next(error);
  }
}

async function getProduct(req, res, next) {
  console.log("➡️ GET /api/products/:id", req.params.id);

  try {
    const product = await productsService.getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error("❌ getProduct error:", error);

    return next(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
};