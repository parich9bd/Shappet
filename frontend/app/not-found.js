"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <Image
            src="/Icon/404c.svg"
            width={240}
            height={240}
            alt="not found"
          />
        </div>

        <h1 className={styles.code}>404</h1>

        <h2 className={styles.title}>صفحه پیدا نشد 🐾</h2>

        <p className={styles.desc}>
          مسیر اشتباه است یا این صفحه دیگر وجود ندارد.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            بازگشت به خانه
          </Link>

          <Link href="/pet-tools" className={styles.secondaryBtn}>
            محصولات حیوانات
          </Link>
        </div>
      </div>
    </section>
  );
}