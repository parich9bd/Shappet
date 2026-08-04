import styles from "./tracking.module.css";
import {
  PackageSearch,
  Search,
  PackageCheck,
  ClipboardCheck,
  Truck,
  House,
  PhoneCall,
} from "lucide-react";

export default function TrackingPage() {
  return (
    <section className={styles.tracking}>
      <div className={styles.hero}>
        <span>Shopet</span>

        <h1>پیگیری سفارش</h1>

        <p>
          با وارد کردن کد سفارش و شماره موبایل، وضعیت سفارش خود را مشاهده کنید.
        </p>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.formBox}>
          <h2>
            <PackageSearch size={24} />
            استعلام سفارش
          </h2>

          <input
            type="text"
            placeholder="کد سفارش"
          />

          <input
            type="tel"
            placeholder="شماره موبایل"
          />

          <button>
            <Search size={18} />
            پیگیری سفارش
          </button>

          <small>
            مثال: SHP-458921
          </small>
        </div>

        <div className={styles.help}>
          <h3>راهنما</h3>

          <p>
            کد سفارش بعد از ثبت خرید برای شما پیامک و ایمیل می‌شود.
          </p>

          <ul>
            <li>کد سفارش را دقیق وارد کنید.</li>
            <li>شماره موبایل باید همان شماره ثبت سفارش باشد.</li>
            <li>در صورت بروز مشکل با پشتیبانی تماس بگیرید.</li>
          </ul>
        </div>
      </div>

      <div className={styles.timeline}>
        <h2>نمونه وضعیت سفارش</h2>

        <div className={styles.step}>
          <PackageCheck />
          <div>
            <h4>ثبت سفارش</h4>
            <p>سفارش شما با موفقیت ثبت شده است.</p>
          </div>
        </div>

        <div className={styles.step}>
          <ClipboardCheck />
          <div>
            <h4>آماده‌سازی</h4>
            <p>محصولات در حال بسته‌بندی هستند.</p>
          </div>
        </div>

        <div className={styles.step}>
          <Truck />
          <div>
            <h4>ارسال</h4>
            <p>سفارش به شرکت حمل‌ونقل تحویل داده شده است.</p>
          </div>
        </div>

        <div className={styles.step}>
          <House />
          <div>
            <h4>تحویل</h4>
            <p>سفارش به دست شما خواهد رسید.</p>
          </div>
        </div>
      </div>

      <div className={styles.support}>
        <PhoneCall size={40} />

        <h2>نیاز به کمک دارید؟</h2>

        <p>
          اگر موفق به پیگیری سفارش نشدید، کارشناسان Shopet آماده پاسخگویی هستند.
        </p>

        <a href="tel:02112345678">
          تماس با پشتیبانی
        </a>
      </div>
    </section>
  );
}