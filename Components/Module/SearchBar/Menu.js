"use client";

import { useState } from "react";
import Link from "next/link";

import styles from "./headerMeanu.module.css";

import {
  Menu,
  House,
  ShoppingBag,
  BookOpen,
  PhoneCall,
  CircleHelp,
  Phone,
} from "lucide-react";

function HeaderMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* ================= Search ================= */}

      {/* ================= Navigation ================= */}

      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* Desktop Menu */}

          <div className={styles.menu}>
            <Link href="/">
              <House size={18} />
              خانه
            </Link>

            <Link href="/shop">
              <ShoppingBag size={18} />
              فروشگاه
            </Link>

            <Link href="/blog">
              <BookOpen size={18} />
              وبلاگ
            </Link>

            <Link href="/contact">
              <PhoneCall size={18} />
              تماس با ما
            </Link>

            <Link href="/about">
              <CircleHelp size={18} />
              درباره ما
            </Link>
          </div>

          {/* Phone */}

          <div className={styles.phone}>
            <Phone size={18} />
            <span>۰۹۱۷۱۲۳۴۵۶۷</span>
          </div>

          {/* Mobile Hamburger */}

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
    </header>
  );
}

export default HeaderMenu;
