const express = require('express');
const { Pool } = require('pg'); // Requires npm install pg dotenv cors
require('dotenv').config();

const app = express();
app.use(express.json());

// Database Connection Configuration (Using Environment Variables for Security)
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'shopet_db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || ''
});

// Helper to query DB safely (Example for Products)
const getProducts = async () => {
  const client = await pool.connect();
  try {
    // Fetch all products, order by ID or date as needed
    const result = await client.query('SELECT * FROM "products" ORDER BY id');
    return result.rows;
  } finally {
    client.release();
  }
};

// API Endpoint: GET /api/products (Matches your frontend fetch calls)
app.get('/api/products', async (req, res) => {
  try {
    const products = await getProducts();
    // You can add filtering logic here if needed based on query params
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

// API Endpoint: GET /api/articles (Matches your frontend fetch calls for blog)
app.get('/api/articles', async (req, res) => {
  try {
    const client = await pool.connect();
    try {
      // Fetch articles with specific fields if needed to match JSON structure exactly
      const result = await client.query('SELECT * FROM "articles" ORDER BY publish_date DESC');
      return res.json(result.rows);
    } finally {
      client.release();
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Start Server on Port defined in .env or default to 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Shopet Backend API running at http://localhost:${PORT}`);
});
