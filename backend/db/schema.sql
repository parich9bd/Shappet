CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(12, 2) NOT NULL,
    category VARCHAR(100),
    image_url VARCHAR(500),
    rating DECIMAL(3, 2),
    stock INTEGER DEFAULT 0,
    old_price DECIMAL(12, 2),
    discount INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    is_best_seller BOOLEAN DEFAULT FALSE,
    is_new BOOLEAN DEFAULT FALSE,
    brand VARCHAR(100),
    is_available BOOLEAN DEFAULT TRUE,
    tags JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
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
    tags JSONB DEFAULT '[]'::jsonb,

    publish_date DATE NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reading_time VARCHAR(50),

    is_featured BOOLEAN DEFAULT FALSE,
    status VARCHAR(30) DEFAULT 'published'
);