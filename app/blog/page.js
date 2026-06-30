"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, CalendarDays, ArrowUpRight } from "lucide-react";
import styles from "./blog.module.css";

export default function BlogPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/api/articles");
      const data = await res.json();

      setArticles(data);
    }

    fetchArticles();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>وبلاگ فروشگاه</h1>

        <p>
          جدیدترین مقالات آموزشی درباره نگهداری حیوانات خانگی، تغذیه،
          سلامت و نکات کاربردی
        </p>
      </div>

      <div className={styles.grid}>
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className={styles.card}
          >
            <Image
              src={article.thumbnail}
              width={400}
              height={240}
              alt={article.title}
            />

            <div className={styles.content}>
              <div className={styles.meta}>
                <span>
                  <User size={15} />
                  {article.author.name}
                </span>

                <span>
                  <CalendarDays size={15} />
                  {new Date(article.publishDate).toLocaleDateString("fa-IR")}
                </span>
              </div>

              <h3>{article.title}</h3>

              <p>{article.excerpt}</p>

              <div className={styles.more}>
                مطالعه مقاله
                <ArrowUpRight size={18} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}