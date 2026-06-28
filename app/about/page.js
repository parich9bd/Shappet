import { PawPrint, Truck, ShieldCheck, Headset, Package } from "lucide-react";

import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <PawPrint size={70} />

        <h1>درباره شاپت</h1>

        <p>همراه مطمئن شما در نگهداری و مراقبت از حیوانات خانگی</p>
      </section>

      <section className={styles.story}>
        <div>
          <h2>داستان ما</h2>

          <p>
            شاپت با هدف ارائه بهترین محصولات و خدمات برای حیوانات خانگی
            راه‌اندازی شد. ما باور داریم حیوانات عضوی از خانواده هستند و باید
            بهترین کیفیت زندگی را تجربه کنند.
          </p>

          <p>
            از غذای حیوانات گرفته تا لوازم بهداشتی، اسباب‌بازی و تجهیزات
            نگهداری، تلاش می‌کنیم مجموعه‌ای کامل و مطمئن در اختیار شما قرار
            دهیم.
          </p>
        </div>

        <div className={styles.imageBox}>
          <Package size={120} />
        </div>
      </section>

      <section className={styles.features}>
        <h2>چرا شاپت؟</h2>

        <div className={styles.grid}>
          <article className={styles.card}>
            <Truck size={35} />
            <h3>ارسال سریع</h3>
            <p>تحویل سفارشات در سریع‌ترین زمان ممکن در سراسر کشور.</p>
          </article>

          <article className={styles.card}>
            <ShieldCheck size={35} />
            <h3>تضمین اصالت</h3>
            <p>تمامی محصولات دارای ضمانت اصالت و کیفیت هستند.</p>
          </article>

          <article className={styles.card}>
            <Headset size={35} />
            <h3>پشتیبانی حرفه‌ای</h3>
            <p>تیم پشتیبانی آماده پاسخگویی به سوالات شماست.</p>
          </article>

          <article className={styles.card}>
            <PawPrint size={35} />
            <h3>تنوع محصولات</h3>
            <p>صدها محصول متنوع برای سگ‌ها، گربه‌ها و سایر حیوانات.</p>
          </article>
        </div>
      </section>

      <section className={styles.stats}>
        <div>
          <h3>+5000</h3>
          <p>مشتری راضی</p>
        </div>

        <div>
          <h3>+1200</h3>
          <p>محصول فعال</p>
        </div>

        <div>
          <h3>+50</h3>
          <p>برند معتبر</p>
        </div>

        <div>
          <h3>+4</h3>
          <p>سال تجربه</p>
        </div>
      </section>
    </main>
  );
}
