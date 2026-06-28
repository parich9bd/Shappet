import { Phone, Mail, MapPin, Clock3,   BadgeInfo, Send } from "lucide-react";

import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>تماس با شاپت</h1>

        <p>پاسخگوی سوالات، پیشنهادات و درخواست‌های شما هستیم.</p>
      </section>

      <section className={styles.content}>
        <div className={styles.info}>
          <h2>اطلاعات تماس</h2>

          <div className={styles.infoCard}>
            <Phone size={20} />
            <div>
              <h4>شماره تماس</h4>
              <p>۰۹۱۷۱۲۳۴۵۶۷</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <Mail size={20} />
            <div>
              <h4>ایمیل</h4>
              <p>support@shopet.ir</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <MapPin size={20} />
            <div>
              <h4>آدرس</h4>
              <p>شیراز، بلوار مطهری، فروشگاه شاپت</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <Clock3 size={20} />
            <div>
              <h4>ساعات کاری</h4>
              <p>شنبه تا پنجشنبه - ۹ الی ۲۱</p>
            </div>
          </div>
        </div>

        <div className={styles.formBox}>
          <h2>ارسال پیام</h2>

          <form>
            <input type="text" placeholder="نام و نام خانوادگی" />

            <input type="email" placeholder="ایمیل" />

            <input type="text" placeholder="موضوع" />

            <textarea rows="6" placeholder="پیام شما..." />

            <button type="submit">
              <Send size={18} />
              ارسال پیام
            </button>
          </form>
        </div>
      </section>

      <section className={styles.social}>
        <h3>ما را دنبال کنید</h3>

        <div className={styles.socialIcons}>
          <  BadgeInfo size={26} />
        </div>
      </section>

      <section className={styles.map}>
        <h2>موقعیت فروشگاه</h2>

        <div className={styles.mapBox}>نقشه گوگل در این بخش قرار می‌گیرد</div>
      </section>
    </main>
  );
}
