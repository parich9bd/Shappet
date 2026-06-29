import Image from "next/image";
import styles from "./page.module.css";
import { User, CalendarDays, Clock3, Tag } from "lucide-react";

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const res = await fetch("http://localhost:4000/articles", {
    cache: "no-store",
  });

  const articles = await res.json();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <h1 className={styles.notFound}>مقاله پیدا نشد</h1>;
  }

  return (
    <article className={styles.article}>
      <div className={styles.hero}>
        <Image
          src={article.coverImage}
          alt={article.title}
          width={1200}
          height={550}
          className={styles.cover}
        />

        <div className={styles.overlay}>
          <span className={styles.badge}>{article.badge}</span>

          <h1>{article.title}</h1>

          <p>{article.description}</p>

          <div className={styles.meta}>
            <span>
              <User size={18} />
              {article.author.name}
            </span>

            <span>
              <CalendarDays size={18} />
              {new Date(article.publishDate).toLocaleDateString("fa-IR")}
            </span>

            <span>
              <Clock3 size={18} />
              {article.readingTime}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.category}>
          <span>{article.category}</span>
        </div>

        <p className={styles.excerpt}>{article.excerpt}</p>

        <div className={styles.content}>{article.content}</div>

        <div className={styles.tags}>
          <Tag size={18} />

          {article.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.authorBox}>
          <Image
            src="/Logo/محتوا.jpg"
            alt={article.author.name}
            width={70}
            height={70}
            className={styles.avatar}
          />

          <div>
            <h3>{article.author.name}</h3>
            <p>{article.author.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
