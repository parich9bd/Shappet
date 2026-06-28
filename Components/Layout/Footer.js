import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
//ته
import { Phone } from "lucide-react";

function Footer() {
  return (
    <>
      <>
        <footer className={styles.footer}>
          <article className={styles.column}>
            <h4>لینک های مهم</h4>

            <Link href="/profile">حساب کاربری من</Link>
            <Link href="/cart">سبد خرید</Link>
            <Link href="/conditions">قوانین و مقررات</Link>
            <Link href="/privacy">حریم خصوصی</Link>
          </article>

          <article className={styles.column}>
            <h4>دسترسی سریع</h4>

            <Link href="/about">درباره ما</Link>
            <Link href="/contact">تماس با ما</Link>
            <Link href="/faq">سوالات متداول</Link>
            <Link href="/productsInfo">پیگیری سفارشات</Link>
          </article>

          <article className={styles.column}>
            <div className={styles.logoBox}>
              <Image
                src="/Logo/svgexport-7 (3) 1.svg"
                width={60}
                height={60}
                alt="logo"
              />

              <h3>فروشگاه شاپت</h3>
            </div>

            <p className={styles.description}>
              ارائه بهترین محصولات حیوانات خانگی با تضمین اصالت، ارسال سریع و
              پشتیبانی حرفه‌ای.
            </p>

            <div className={styles.phone}>
              <Phone size={18} />
              <span style={{ color: "black" }}>۰۹۱۷۱۲۳۴۵۶۷</span>
            </div>
          </article>
        </footer>

        <div className={styles.copyRight}>
          <p>
            تمامی حقوق این وبسایت برای <span>شاپت</span> محفوظ می باشد.
          </p>
        </div>
      </>
    </>
  );
}

export default Footer;
