CREATE TABLE IF NOT EXISTS products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(12, 2) NOT NULL,
    category VARCHAR(100),
    image_url VARCHAR(500),
    rating DECIMAL(3, 2),
    stock INT DEFAULT 0,
    old_price DECIMAL(12, 2),
    discount INT DEFAULT 0,
    is_featured TINYINT(1) DEFAULT 0,
    is_best_seller TINYINT(1) DEFAULT 0,
    is_new TINYINT(1) DEFAULT 0,
    brand VARCHAR(100),
    is_available TINYINT(1) DEFAULT 1,
    tags JSON DEFAULT ('[]'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS articles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    description TEXT,
    excerpt TEXT,
    content TEXT,
    thumbnail_url VARCHAR(500),
    cover_image_url VARCHAR(500),

    author_name VARCHAR(150),
    author_avatar VARCHAR(500),
    author_role VARCHAR(150),

    category VARCHAR(100),
    badge VARCHAR(100),
    tags JSON DEFAULT ('[]'),

    publish_date DATE NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reading_time VARCHAR(50),

    is_featured TINYINT(1) DEFAULT 0,
    status VARCHAR(30) DEFAULT 'published',

    PRIMARY KEY (id)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;