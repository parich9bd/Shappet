const pool = require("../config/database");

const PRODUCT_SELECT = `
  SELECT
    id,
    product_name AS "productName",
    description,
    price,
    category,
    image_url AS image,
    rating,
    stock,
    COALESCE(old_price, 0) AS "oldPrice",
    discount,
    is_featured AS "isFeatured",
    is_best_seller AS "isBestSeller",
    is_new AS "isNew",
    brand,
    is_available AS "isAvailable",
    tags
  FROM products
`;

function normalizeProduct(product) {
  return {
    ...product,
    price: Number(product.price),
    rating: Number(product.rating),
    oldPrice: Number(product.oldPrice),
  };
}

async function getAllProducts() {
  const { rows } = await pool.query(`
    ${PRODUCT_SELECT}
    ORDER BY id ASC
  `);

  return rows.map(normalizeProduct);
}

async function getProductById(id) {
  const { rows } = await pool.query(
    `
    ${PRODUCT_SELECT}
    WHERE id = $1
    `,
    [id]
  );

  return rows[0] ? normalizeProduct(rows[0]) : null;
}

module.exports = {
  getAllProducts,
  getProductById,
};