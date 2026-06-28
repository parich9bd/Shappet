import {
  ShieldCheck,
  Truck,
  CreditCard,
  RotateCcw,
  FileText,
} from "lucide-react";

import styles from "./conditions.module.css";

export default function ConditionsPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>قوانین و مقررات</h1>

        <p>
          استفاده از خدمات فروشگاه شاپت به منزله پذیرش قوانین و شرایط زیر است.
        </p>
      </section>

      <section className={styles.rules}>
        <div className={styles.card}>
          <ShieldCheck size={32} />

          <h3>اصالت کالا</h3>

          <p>
            تمامی محصولات ارائه شده در شاپت دارای تضمین اصالت بوده و از
            تأمین‌کنندگان معتبر تهیه می‌شوند.
          </p>
        </div>

        <div className={styles.card}>
          <Truck size={32} />

          <h3>ارسال سفارش</h3>

          <p>
            سفارش‌ها پس از ثبت نهایی و تأیید پرداخت در کوتاه‌ترین زمان ممکن
            پردازش و ارسال خواهند شد.
          </p>
        </div>

        <div className={styles.card}>
          <CreditCard size={32} />

          <h3>پرداخت</h3>

          <p>
            تمامی پرداخت‌ها از طریق درگاه‌های امن بانکی انجام می‌شود و اطلاعات
            مالی کاربران نزد شاپت ذخیره نمی‌شود.
          </p>
        </div>

        <div className={styles.card}>
          <RotateCcw size={32} />

          <h3>مرجوعی کالا</h3>

          <p>
            امکان بازگشت کالا طبق شرایط اعلام‌شده و در بازه زمانی مشخص وجود
            دارد.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.ruleBox}>
          <FileText size={22} />

          <div>
            <h3>ثبت سفارش</h3>

            <p>
              کاربران موظف هستند اطلاعات تماس و آدرس خود را به صورت صحیح وارد
              کنند. مسئولیت هرگونه اشتباه در ثبت اطلاعات بر عهده کاربر خواهد
              بود.
            </p>
          </div>
        </div>

        <div className={styles.ruleBox}>
          <FileText size={22} />

          <div>
            <h3>مسئولیت کاربران</h3>

            <p>
              استفاده غیرقانونی از خدمات سایت، ایجاد اختلال در سیستم و
              سوءاستفاده از اطلاعات ممنوع بوده و پیگرد قانونی خواهد داشت.
            </p>
          </div>
        </div>

        <div className={styles.ruleBox}>
          <FileText size={22} />

          <div>
            <h3>تغییر قوانین</h3>

            <p>
              شاپت این حق را دارد که در هر زمان قوانین و شرایط استفاده را
              بروزرسانی کند. نسخه جدید از زمان انتشار معتبر خواهد بود.
            </p>
          </div>
        </div>

        <div className={styles.ruleBox}>
          <FileText size={22} />

          <div>
            <h3>حفظ حقوق مشتریان</h3>

            <p>
              هدف شاپت ارائه تجربه‌ای مطمئن، شفاف و حرفه‌ای برای صاحبان حیوانات
              خانگی است و تمامی تلاش خود را برای حفظ رضایت مشتریان به کار
              می‌گیرد.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
