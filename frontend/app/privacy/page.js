import styles from "./privacy.module.css";
import {
  ShieldCheck,
  Lock,
  Database,
  Eye,
  UserCheck,
  Mail,
  BadgeCheck,
  FileLock2,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <section className={styles.privacy}>
      <div className={styles.hero}>
        <span>Shopet</span>

        <h1>حریم خصوصی</h1>

        <p>
          حفظ امنیت و محرمانگی اطلاعات کاربران یکی از مهم‌ترین تعهدات Shopet
          است. ما اطلاعات شما را تنها برای ارائه خدمات بهتر و تجربه خرید مطمئن
          استفاده می‌کنیم.
        </p>

        <small>آخرین بروزرسانی: شهریور ۱۴۰۵</small>
      </div>

      <div className={styles.commitment}>
        <ShieldCheck />

        <div>
          <h2>تعهد ما به کاربران</h2>

          <p>
            تمامی اطلاعات شخصی کاربران با رعایت اصول امنیتی نگهداری شده و بدون
            رضایت شما در اختیار اشخاص یا سازمان‌های دیگر قرار نخواهد گرفت؛ مگر
            در مواردی که قانون الزام کرده باشد.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Database />
          <h3>اطلاعات جمع‌آوری شده</h3>

          <p>
            اطلاعاتی مانند نام، شماره تماس، ایمیل و آدرس تنها هنگام ثبت سفارش یا
            ایجاد حساب کاربری دریافت می‌شود.
          </p>
        </div>

        <div className={styles.card}>
          <Eye />
          <h3>نحوه استفاده</h3>

          <p>
            اطلاعات شما فقط برای پردازش سفارش‌ها، ارسال کالا، اطلاع‌رسانی و
            بهبود کیفیت خدمات استفاده خواهد شد.
          </p>
        </div>

        <div className={styles.card}>
          <Lock />
          <h3>امنیت اطلاعات</h3>

          <p>
            از روش‌های استاندارد امنیتی برای محافظت از اطلاعات کاربران و جلوگیری
            از دسترسی غیرمجاز استفاده می‌شود.
          </p>
        </div>

        <div className={styles.card}>
          <Mail />
          <h3>ارتباط با کاربران</h3>

          <p>
            ممکن است پیامک یا ایمیل‌های مرتبط با سفارش، وضعیت خرید یا
            اطلاعیه‌های مهم برای شما ارسال شود.
          </p>
        </div>

        <div className={styles.card}>
          <UserCheck />
          <h3>حقوق کاربران</h3>

          <p>
            کاربران می‌توانند اطلاعات حساب خود را ویرایش کرده یا درخواست حذف
            حساب کاربری خود را ثبت کنند.
          </p>
        </div>

        <div className={styles.card}>
          <BadgeCheck />
          <h3>کوکی‌ها</h3>

          <p>
            برای بهبود تجربه کاربری ممکن است از Cookie استفاده شود. این اطلاعات
            صرفاً جهت افزایش کیفیت خدمات هستند.
          </p>
        </div>
      </div>

      <div className={styles.notice}>
        <FileLock2 />

        <div>
          <h3>حفاظت از اطلاعات شما</h3>

          <p>
            Shopet همواره تلاش می‌کند با استفاده از جدیدترین استانداردهای
            امنیتی، محیطی امن برای خرید آنلاین و حفظ اطلاعات کاربران فراهم کند.
          </p>
        </div>
      </div>
    </section>
  );
}
