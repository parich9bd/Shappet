import styles from "./conditions.module.css";
import {
  ShieldCheck,
  ShoppingBag,
  CreditCard,
  Truck,
  RotateCcw,
  Lock,
  AlertTriangle,
  CircleHelp,
} from "lucide-react";

export default function RulesPage() {
  return (
    <section className={styles.rules}>
      <div className={styles.hero}>
        <span>Shopet</span>

        <h1>قوانین و مقررات</h1>

        <p>
          استفاده از خدمات فروشگاه Shopet به منزله پذیرش قوانین و شرایط زیر است.
          لطفاً پیش از ثبت سفارش، این موارد را مطالعه کنید.
        </p>

        <small>آخرین بروزرسانی: شهریور ۱۴۰۵</small>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <ShoppingBag />
          <h3>ثبت سفارش</h3>
          <p>
            ثبت سفارش پس از پرداخت موفق نهایی شده و امکان پیگیری از طریق پنل
            کاربری وجود دارد.
          </p>
        </div>

        <div className={styles.card}>
          <CreditCard />
          <h3>پرداخت</h3>
          <p>
            تمامی پرداخت‌ها از طریق درگاه‌های امن بانکی انجام می‌شود و اطلاعات
            مالی کاربران ذخیره نخواهد شد.
          </p>
        </div>

        <div className={styles.card}>
          <Truck />
          <h3>ارسال سفارش</h3>
          <p>
            سفارش‌ها در سریع‌ترین زمان ممکن پردازش و ارسال می‌شوند. زمان تحویل
            بسته به شهر مقصد متفاوت است.
          </p>
        </div>

        <div className={styles.card}>
          <RotateCcw />
          <h3>بازگشت کالا</h3>
          <p>
            در صورت وجود ایراد فنی یا ارسال اشتباه، امکان بازگشت کالا طبق شرایط
            فروشگاه فراهم است.
          </p>
        </div>

        <div className={styles.card}>
          <Lock />
          <h3>حریم خصوصی</h3>
          <p>
            اطلاعات شخصی کاربران نزد Shopet محفوظ بوده و در اختیار شخص یا سازمان
            دیگری قرار نخواهد گرفت.
          </p>
        </div>

        <div className={styles.card}>
          <ShieldCheck />
          <h3>ضمانت کیفیت</h3>
          <p>
            تمامی محصولات از برندهای معتبر تهیه شده و سلامت و اصالت کالا تضمین
            می‌شود.
          </p>
        </div>
      </div>

      <div className={styles.notice}>
        <AlertTriangle />

        <div>
          <h3>نکته مهم</h3>

          <p>
            Shopet در هر زمان می‌تواند قوانین و شرایط استفاده از سایت را
            بروزرسانی کند. ادامه استفاده از سایت به منزله پذیرش نسخه جدید قوانین
            خواهد بود.
          </p>
        </div>
      </div>

      <div className={styles.faq}>
        <h2>سوالات متداول</h2>

        <div className={styles.question}>
          <CircleHelp />
          <div>
            <h4>آیا امکان لغو سفارش وجود دارد؟</h4>
            <p>
              تا قبل از ارسال سفارش، می‌توانید از طریق پشتیبانی درخواست لغو ثبت
              کنید.
            </p>
          </div>
        </div>

        <div className={styles.question}>
          <CircleHelp />
          <div>
            <h4>آیا اطلاعات من محفوظ می‌ماند؟</h4>
            <p>
              بله، تمامی اطلاعات کاربران مطابق قوانین حریم خصوصی نگهداری می‌شود.
            </p>
          </div>
        </div>

        <div className={styles.question}>
          <CircleHelp />
          <div>
            <h4>در صورت دریافت کالای معیوب چه کنم؟</h4>
            <p>
              کافی است با پشتیبانی تماس بگیرید تا فرآیند تعویض یا مرجوعی انجام
              شود.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
