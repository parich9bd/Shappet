import Image from "next/image";
import { CalendarDays, Clock3, ArrowLeft, BookOpen } from "lucide-react";

import styles from "./blog.module.css";

const posts = [
  {
    id: 1,
    title: "بهترین غذای خشک برای گربه‌ها",
    description:
      "راهنمای کامل انتخاب غذای خشک مناسب برای سلامت و رشد گربه شما.",
    image: "/Images/blog/blog1.jpg",
    date: "۱۴۰۵/۰۵/۰۱",
    readTime: "۵ دقیقه",
  },

  {
    id: 2,
    title: "چگونه سگ خود را آموزش دهیم؟",
    description: "نکات کاربردی برای تربیت سگ‌ها و ایجاد ارتباط بهتر با آن‌ها.",
    image: "/Images/blog/blog2.jpg",
    date: "۱۴۰۵/۰۵/۱۰",
    readTime: "۷ دقیقه",
  },

  {
    id: 3,
    title: "واکسیناسیون حیوانات خانگی",
    description: "اهمیت واکسیناسیون و برنامه پیشنهادی برای حیوانات خانگی.",
    image: "/Images/blog/blog3.jpg",
    date: "۱۴۰۵/۰۵/۱۵",
    readTime: "۴ دقیقه",
  },
];

export default function BlogPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <BookOpen size={70} />

        <h1>وبلاگ شاپت</h1>

        <p>آموزش، نگهداری، تغذیه و سلامت حیوانات خانگی</p>
      </section>

      <section className={styles.featured}>
        <div className={styles.featuredContent}>
          <span>مقاله ویژه</span>

          <h2>راهنمای کامل نگهداری از گربه‌های خانگی</h2>

          <p>هر آنچه برای مراقبت، تغذیه، بهداشت و سلامت گربه خود نیاز دارید.</p>

          <button>
            مطالعه مقاله
            <ArrowLeft size={18} />
          </button>
        </div>

        <div className={styles.featuredImage}>
          <Image src="/Images/blog/featured.jpg" fill alt="featured" />
        </div>
      </section>

      <section className={styles.posts}>
        <h2>جدیدترین مقالات</h2>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={post.image} fill alt={post.title} />
              </div>

              <div className={styles.content}>
                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <div className={styles.meta}>
                  <span>
                    <CalendarDays size={16} />
                    {post.date}
                  </span>

                  <span>
                    <Clock3 size={16} />
                    {post.readTime}
                  </span>
                </div>

                <button>مطالعه بیشتر</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
