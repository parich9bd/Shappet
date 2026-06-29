import styles from "./contact.module.css";
import { Phone, Mail, MapPin, Clock3, SendHorizonal } from "lucide-react";

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      <div className={styles.hero}>
        <h1>تماس با ما</h1>

        <p>
          اگر سوالی درباره محصولات، سفارش یا نگهداری حیوانات خانگی دارید،
          کارشناسان Shopet همیشه آماده پاسخگویی هستند.
        </p>
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.card}>
          <Phone />
          <h3>تلفن</h3>
          <span>021-12345678</span>
        </div>

        <div className={styles.card}>
          <Mail />
          <h3>ایمیل</h3>
          <span>info@shopet.ir</span>
        </div>

        <div className={styles.card}>
          <MapPin />
          <h3>آدرس</h3>
          <span>تهران، خیابان ولیعصر</span>
        </div>

        <div className={styles.card}>
          <Clock3 />
          <h3>ساعات کاری</h3>
          <span>۹ صبح تا ۹ شب</span>
        </div>
      </div>

      <div className={styles.formBox}>
        <div className={styles.left}>
          <h2>ارسال پیام</h2>

          <input type="text" placeholder="نام و نام خانوادگی" />

          <input type="email" placeholder="ایمیل" />

          <input type="text" placeholder="موضوع" />

          <textarea rows="6" placeholder="پیام خود را بنویسید..." />

          <button>
            ارسال پیام
            <SendHorizonal size={18} />
          </button>
        </div>

        <div className={styles.right}>
          <h2>همیشه کنار شما هستیم</h2>

          <p>
            تیم پشتیبانی Shopet در سریع‌ترین زمان ممکن پیام شما را بررسی کرده و
            پاسخ خواهد داد.
          </p>

          <div className={styles.box}>
            <Phone size={20} />
            <span>021-12345678</span>
          </div>

          <div className={styles.box}>
            <Mail size={20} />
            <span>info@shopet.ir</span>
          </div>

          <div className={styles.box}>
            <MapPin size={20} />
            <span>تهران، ولیعصر، پلاک ۲۴</span>
          </div>
        </div>
      </div>
      <div className={styles.locationSection}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps?q=Valiasr%20Street,%20Tehran&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className={styles.locationCard}>
          <h2>شعبه مرکزی Shopet</h2>

          <p>
            همیشه خوشحال می‌شویم شما و حیوان دوست‌داشتنی‌تان را از نزدیک ببینیم.
          </p>

          <div className={styles.locationItem}>
            🚗
            <div>
              <strong>پارکینگ</strong>
              <span>جای پارک اختصاصی برای مراجعه‌کنندگان</span>
            </div>
          </div>

          <div className={styles.locationItem}>
            🐶
            <div>
              <strong>ورود حیوانات</strong>
              <span>ورود حیوانات خانگی با قلاده یا باکس مجاز است.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
