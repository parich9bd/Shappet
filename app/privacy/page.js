import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  UserCheck,
} from "lucide-react";

import styles from "./privacy.module.css";

export default function PrivacyPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>حریم خصوصی</h1>

        <p>
          حفظ امنیت و اطلاعات شخصی کاربران یکی از مهم‌ترین
          تعهدات فروشگاه شاپت است.
        </p>
      </section>

      <section className={styles.cards}>
        <div className={styles.card}>
          <ShieldCheck size={32} />
          <h3>امنیت اطلاعات</h3>
          <p>
            تمامی اطلاعات کاربران با استفاده از روش‌های استاندارد
            امنیتی محافظت می‌شوند.
          </p>
        </div>

        <div className={styles.card}>
          <Lock size={32} />
          <h3>حفظ محرمانگی</h3>
          <p>
            اطلاعات شخصی کاربران در اختیار اشخاص یا سازمان‌های
            غیرمجاز قرار نخواهد گرفت.
          </p>
        </div>

        <div className={styles.card}>
          <Eye size={32} />
          <h3>شفافیت</h3>
          <p>
            کاربران حق دارند بدانند چه اطلاعاتی جمع‌آوری و چگونه
            استفاده می‌شود.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.item}>
          <Database size={22} />

          <div>
            <h3>اطلاعات جمع‌آوری شده</h3>

            <p>
              هنگام ثبت‌نام یا خرید، اطلاعاتی مانند نام، شماره
              تماس، آدرس و سوابق سفارشات شما ثبت می‌شود تا خدمات
              بهتری ارائه شود.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <UserCheck size={22} />

          <div>
            <h3>نحوه استفاده از اطلاعات</h3>

            <p>
              اطلاعات کاربران تنها برای پردازش سفارشات، پشتیبانی،
              ارسال اطلاعیه‌ها و بهبود خدمات فروشگاه استفاده
              می‌شود.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <Lock size={22} />

          <div>
            <h3>محافظت از اطلاعات</h3>

            <p>
              شاپت از فناوری‌های امنیتی مناسب برای جلوگیری از
              دسترسی غیرمجاز، افشای اطلاعات و سوءاستفاده از داده‌ها
              استفاده می‌کند.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <ShieldCheck size={22} />

          <div>
            <h3>حقوق کاربران</h3>

            <p>
              کاربران می‌توانند درخواست ویرایش یا حذف اطلاعات
              حساب کاربری خود را از طریق پشتیبانی ثبت کنند.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}