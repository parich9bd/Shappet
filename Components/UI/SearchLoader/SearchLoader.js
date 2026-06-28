"use client";

import styles from "./SearchLoader.module.css";

export default function SearchLoader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}>
        <div className={styles.path}>
          <span>🐾</span>
          <span>🐾</span>
          <span>🐾</span>
          <span>🐾</span>
          <span>🐾</span>
        </div>

        <div className={styles.ball}></div>

        <p>در حال پیدا کردن بهترین محصولات...</p>
      </div>
    </div>
  );
}