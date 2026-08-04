-- PostgreSQL Schema Definition for Shopet Pet Store Backend
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    category VARCHAR(50),
    image_url VARCHAR(255),
    rating DECIMAL(3, 2),
    stock INTEGER DEFAULT 0,
    old_price DECIMAL(10, 2) NULL,
    discount INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    is_best_seller BOOLEAN DEFAULT FALSE,
    is_new BOOLEAN DEFAULT FALSE,
    brand VARCHAR(50),
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    excerpt TEXT,
    content TEXT,
    thumbnail_url VARCHAR(255),
    cover_image_url VARCHAR(255),
    author_name VARCHAR(100),
    category VARCHAR(50),
    badge VARCHAR(50),
    tags JSONB DEFAULT '[]',
    publish_date DATE NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reading_time TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    status VARCHAR(20) DEFAULT 'published'
);

-- Insert sample data matching your db.json structure (Optional Seed Script logic would go here or in a migration file)
