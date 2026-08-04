const pool = require("../config/database");

async function getAllArticles() {
  const { rows } = await pool.query(`
    SELECT
      id,
      title,
      slug,
      description,
      excerpt,
      content,
      thumbnail_url AS thumbnail,
      cover_image_url AS "coverImage",

      jsonb_build_object(
        'name', author_name,
        'avatar', author_avatar,
        'role', author_role
      ) AS author,

      category,
      badge,
      tags,
      publish_date AS "publishDate",
      updated_at AS "updatedAt",
      reading_time AS "readingTime",
      is_featured AS "isFeatured",
      status

    FROM articles
    ORDER BY publish_date DESC
  `);

  return rows;
}

async function getArticleById(id) {
  const { rows } = await pool.query(
    `
    SELECT
      id,
      title,
      slug,
      description,
      excerpt,
      content,
      thumbnail_url AS thumbnail,
      cover_image_url AS "coverImage",

      jsonb_build_object(
        'name', author_name,
        'avatar', author_avatar,
        'role', author_role
      ) AS author,

      category,
      badge,
      tags,
      publish_date AS "publishDate",
      updated_at AS "updatedAt",
      reading_time AS "readingTime",
      is_featured AS "isFeatured",
      status

    FROM articles
    WHERE id = $1
    `,
    [id]
  );

  return rows[0] || null;
}

module.exports = {
  getAllArticles,
  getArticleById,
};