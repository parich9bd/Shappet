"use client";

import styles from "./Header.module.css";
import SearchBar from "../Module/SearchBar/SearchBar";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.discount}>
        <p>
          <span>۵۰٪</span>
          تخفیف برای تمامی محصولات
        </p>
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
