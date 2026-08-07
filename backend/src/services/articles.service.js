const pool = require("../config/database");

const ARTICLE_SELECT = `
  SELECT
    id,
    title,
    slug,
    description,
    excerpt,
    content,
    thumbnail_url AS thumbnail,
    cover_image_url AS coverImage,
    author_name,
    author_avatar,
    author_role,
    category,
    badge,
    tags,
    publish_date AS publishDate,
    updated_at AS updatedAt,
    reading_time AS readingTime,
    is_featured AS isFeatured,
    status
  FROM articles
`;

function normalizeArticle(article) {
  const {
    author_name,
    author_avatar,
    author_role,
    ...rest
  } = article;

  return {
    ...rest,

    author: {
      name: author_name,
      avatar: author_avatar,
      role: author_role,
    },

    isFeatured: Boolean(article.isFeatured),
  };
}

async function getAllArticles() {
  const [rows] = await pool.query(`
    ${ARTICLE_SELECT}
    ORDER BY publish_date DESC
  `);

  return rows.map(normalizeArticle);
}

async function getArticleById(id) {
  const [rows] = await pool.query(
    `
    ${ARTICLE_SELECT}
    WHERE id = ?
    `,
    [id]
  );

  return rows[0] ? normalizeArticle(rows[0]) : null;
}

module.exports = {
  getAllArticles,
  getArticleById,
};