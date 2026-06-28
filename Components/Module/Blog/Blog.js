"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.css";
import { User, CalendarDays, ArrowUpRight } from "lucide-react";
function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch("http://localhost:4000/articles");
      const data = await res.json();

      setArticles(data.slice(0, 3));
    };

    fetchArticles();
  }, []);

  return (
    <section className={styles.blog}>
      <div className={styles.heading}>
        <h2>جدیدترین مقالات</h2>

        <Link href="/articles">مشاهده همه</Link>
      </div>

      <div className={styles.blogContainer}>
        {articles.map((article) => (
          <Link
            href={`/articles/${article.slug}`}
            key={article.id}
            className={styles.card}
          >
            <div className={styles.imageBox}>
              <Image
                src={article.thumbnail}
                alt={article.title}
                width={420}
                height={250}
              />

              <div className={styles.badges}>
                <span>{article.badge}</span>
                <span>{article.category}</span>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.info}>
                <div className={styles.infoItem}>
                  <User size={16} strokeWidth={2} />
                  <span>{article.author.name}</span>
                </div>

                <div className={styles.infoItem}>
                  <CalendarDays size={16} strokeWidth={2} />
                  <span>
                    {new Date(article.publishDate).toLocaleDateString("fa-IR")}
                  </span>
                </div>
              </div>

              <h3>{article.title}</h3>

              <p>{article.excerpt}</p>

              <div className={styles.readMore}>
                <span>مطالعه مقاله</span>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog;
