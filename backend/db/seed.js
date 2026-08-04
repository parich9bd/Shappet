const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || "shopet_db",
  user: process.env.DB_USER || "alfa",
  password: process.env.DB_PASSWORD || "",
});

const dataPath = path.join(__dirname, "db.json");

const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

async function seed() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    console.log("Clearing existing data...");

    await client.query("TRUNCATE TABLE products, articles RESTART IDENTITY CASCADE");

    console.log("Seeding products...");

    for (const product of data.products) {
      await client.query(
        `
        INSERT INTO products (
          id,
          product_name,
          description,
          price,
          category,
          image_url,
          rating,
          stock,
          old_price,
          discount,
          is_featured,
          is_best_seller,
          is_new,
          brand,
          is_available,
          tags
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8,
          $9, $10, $11, $12, $13, $14, $15, $16
        )
        `,
        [
          product.id,
          product.productName,
          product.description,
          product.price,
          product.category,
          product.image,
          product.rating,
          product.stock,
          product.oldPrice || null,
          product.discount || 0,
          product.isFeatured || false,
          product.isBestSeller || false,
          product.isNew || false,
          product.brand,
          product.isAvailable ?? true,
          JSON.stringify(product.tags || []),
        ]
      );
    }

    console.log(`${data.products.length} products inserted.`);

    console.log("Seeding articles...");

    for (const article of data.articles) {
      await client.query(
        `
        INSERT INTO articles (
          id,
          title,
          slug,
          description,
          excerpt,
          content,
          thumbnail_url,
          cover_image_url,
          author_name,
          author_avatar,
          author_role,
          category,
          badge,
          tags,
          publish_date,
          updated_at,
          reading_time,
          is_featured,
          status
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8,
          $9, $10, $11, $12, $13, $14, $15,
          $16, $17, $18, $19
        )
        `,
        [
          article.id,
          article.title,
          article.slug,
          article.description,
          article.excerpt,
          article.content,
          article.thumbnail,
          article.coverImage,
          article.author?.name || null,
          article.author?.avatar || null,
          article.author?.role || null,
          article.category,
          article.badge,
          JSON.stringify(article.tags || []),
          article.publishDate,
          article.updatedAt || new Date(),
          article.readingTime || null,
          article.isFeatured || false,
          article.status || "published",
        ]
      );
    }

    console.log(`${data.articles.length} articles inserted.`);

    await client.query("COMMIT");

    console.log("Seed completed successfully.");
  } catch (error) {
    await client.query("ROLLBACK");

    console.error("Seed failed:");
    console.error(error);

    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

seed();