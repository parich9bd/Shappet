"use client";

import { useState } from "react";
import styles from "./faq.module.css";
import {
  Search,
  ChevronDown,
  CircleHelp,
  PhoneCall,
  Mail,
} from "lucide-react";

const faqs = [
  {
    question: "چگونه سفارش خود را ثبت کنم؟",
    answer:
      "پس از انتخاب محصول، آن را به سبد خرید اضافه کرده و مراحل پرداخت را تکمیل کنید.",
  },
  {
    question: "مدت زمان ارسال سفارش چقدر است؟",
    answer:
      "ارسال سفارش‌ها معمولاً بین ۱ تا ۳ روز کاری انجام می‌شود.",
  },
  {
    question: "آیا امکان مرجوع کردن کالا وجود دارد؟",
    answer:
      "بله، در صورت وجود ایراد یا مغایرت کالا مطابق قوانین فروشگاه امکان مرجوعی وجود دارد.",
  },
  {
    question: "چگونه سفارش خود را پیگیری کنم؟",
    answer:
      "از طریق پنل کاربری یا تماس با پشتیبانی می‌توانید وضعیت سفارش را مشاهده کنید.",
  },
  {
    question: "چه روش‌هایی برای پرداخت وجود دارد؟",
    answer:
      "پرداخت آنلاین از طریق درگاه‌های بانکی امن انجام می‌شود.",
  },
  {
    question: "آیا محصولات دارای ضمانت اصالت هستند؟",
    answer:
      "بله، تمامی محصولات ارائه‌شده در Shopet دارای ضمانت اصالت کالا هستند.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <section className={styles.faq}>
      <div className={styles.hero}>
        <span>Shopet</span>

        <h1>سوالات متداول</h1>

        <p>
          پاسخ رایج‌ترین سوالات کاربران را اینجا پیدا کنید.
        </p>

        <div className={styles.searchBox}>
          <Search size={20} />
          <input
            type="text"
            placeholder="جستجو در سوالات..."
          />
        </div>
      </div>

      <div className={styles.categories}>
        <button>ثبت سفارش</button>
        <button>ارسال</button>
        <button>پرداخت</button>
        <button>مرجوعی</button>
        <button>حساب کاربری</button>
      </div>

      <div className={styles.list}>
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              open === index ? styles.active : ""
            }`}
          >
            <button
              className={styles.question}
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >
              <div>
                <CircleHelp size={20} />
                <span>{item.question}</span>
              </div>

              <ChevronDown />
            </button>

            <div
              className={`${styles.answer} ${
                open === index ? styles.show : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.support}>
        <h2>پاسخ سوال خود را پیدا نکردید؟</h2>

        <p>
          کارشناسان Shopet آماده پاسخگویی به سوالات شما هستند.
        </p>

        <div className={styles.buttons}>
          <a href="tel:02112345678">
            <PhoneCall size={18} />
            تماس با پشتیبانی
          </a>

          <a href="mailto:info@shopet.ir">
            <Mail size={18} />
            ارسال ایمیل
          </a>
        </div>
      </div>
    </section>
  );
}