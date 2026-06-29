import styles from "./about.module.css";
import {
  PawPrint,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Star,
  Users,
  Award,
} from "lucide-react";
import Image from "next/image";
export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.hero}>
        <span>درباره Shopet</span>

        <h1>خانه‌ای مطمئن برای حیوانات خانگی</h1>

        <p>
          ما در Shopet تلاش می‌کنیم بهترین محصولات و خدمات موردنیاز حیوانات
          خانگی را با کیفیت بالا، قیمت مناسب و ارسال سریع در اختیار شما قرار
          دهیم.
        </p>
      </div>

      <div className={styles.story}>
        <div className={styles.left}>
          <h2>داستان ما</h2>

          <p>
            Shopet با هدف ایجاد یک فروشگاه تخصصی برای دوستداران حیوانات خانگی
            شکل گرفت. ما معتقدیم حیوانات خانگی عضوی از خانواده هستند و شایسته
            بهترین مراقبت، تغذیه و لوازم هستند.
          </p>

          <p>
            به همین دلیل مجموعه‌ای از بهترین برندهای غذایی، بهداشتی، اسباب‌بازی
            و لوازم نگهداری را گرد هم آورده‌ایم تا خریدی مطمئن و لذت‌بخش را برای
            شما فراهم کنیم.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.imageBox}>
              <Image
                src="/Logo/svgexport-7 (3) 1.svg"
                alt="Shopet"
                width={350}
                height={350}
                className={styles.image}
              />
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div>
          <h3>+۲۰۰۰</h3>
          <span>مشتری راضی</span>
        </div>

        <div>
          <h3>+۵۰۰</h3>
          <span>محصول متنوع</span>
        </div>

        <div>
          <h3>+۴۰</h3>
          <span>برند معتبر</span>
        </div>

        <div>
          <h3>۲۴/۷</h3>
          <span>پشتیبانی</span>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.card}>
          <ShieldCheck />
          <h3>کیفیت تضمین‌شده</h3>
          <p>تمام محصولات از برندهای معتبر تهیه می‌شوند.</p>
        </div>

        <div className={styles.card}>
          <Truck />
          <h3>ارسال سریع</h3>
          <p>تحویل سفارش در کوتاه‌ترین زمان ممکن.</p>
        </div>

        <div className={styles.card}>
          <HeartHandshake />
          <h3>پشتیبانی واقعی</h3>
          <p>همیشه پاسخگوی سوالات و نیازهای شما هستیم.</p>
        </div>

        <div className={styles.card}>
          <PawPrint />
          <h3>تخصص در حیوانات خانگی</h3>
          <p>تمرکز کامل بر سلامت و رفاه حیوانات دوست‌داشتنی.</p>
        </div>
      </div>

      <div className={styles.values}>
        <h2>ارزش‌های ما</h2>

        <div className={styles.valueGrid}>
          <div>
            <Award size={36} />
            <h4>کیفیت</h4>
          </div>

          <div>
            <Users size={36} />
            <h4>اعتماد مشتری</h4>
          </div>

          <div>
            <Star size={36} />
            <h4>تجربه خرید لذت‌بخش</h4>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>به خانواده Shopet بپیوندید</h2>

        <p>
          هدف ما فراهم کردن بهترین تجربه خرید برای شما و حیوانات خانگی
          دوست‌داشتنی شماست.
        </p>

        <a href="/shop">مشاهده محصولات</a>
      </div>
    </section>
  );
}
