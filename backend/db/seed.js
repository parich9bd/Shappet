const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");

require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const dataPath = path.join(__dirname, "db.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

async function seed() {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    console.log("Clearing existing data...");

    await connection.query("SET FOREIGN_KEY_CHECKS = 0");

    await connection.query("TRUNCATE TABLE products");
    await connection.query("TRUNCATE TABLE articles");

    await connection.query("SET FOREIGN_KEY_CHECKS = 1");

    console.log("Seeding products...");

    for (const product of data.products) {
      await connection.query(
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
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
          product.oldPrice ?? null,
          product.discount ?? 0,
          product.isFeatured ?? false,
          product.isBestSeller ?? false,
          product.isNew ?? false,
          product.brand,
          product.isAvailable ?? true,
          JSON.stringify(product.tags ?? []),
        ]
      );
    }

    console.log(`${data.products.length} products inserted.`);

    console.log("Seeding articles...");

    for (const article of data.articles) {
      await connection.query(
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
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
          article.author?.name ?? null,
          article.author?.avatar ?? null,
          article.author?.role ?? null,
          article.category,
          article.badge,
          JSON.stringify(article.tags ?? []),
          article.publishDate,
          article.updatedAt ?? new Date(),
          article.readingTime ?? null,
          article.isFeatured ?? false,
          article.status ?? "published",
        ]
      );
    }

    console.log(`${data.articles.length} articles inserted.`);

    await connection.commit();

    console.log("Seed completed successfully.");
  } catch (error) {
    await connection.rollback();

    console.error("Seed failed:");
    console.error(error);

    process.exitCode = 1;
  } finally {
    connection.release();
    await pool.end();
  }
}

seed();