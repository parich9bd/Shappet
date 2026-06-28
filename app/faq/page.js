"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import styles from "./faq.module.css";

const faqData = [
  {
    id: 1,
    question: "چقدر طول می‌کشد سفارش به دستم برسد؟",
    answer:
      "سفارش‌های شهرهای بزرگ معمولاً بین ۱ تا ۳ روز کاری و سایر شهرها بین ۳ تا ۵ روز کاری تحویل داده می‌شوند.",
  },
  {
    id: 2,
    question: "آیا امکان مرجوع کردن کالا وجود دارد؟",
    answer:
      "بله، تا ۷ روز پس از دریافت کالا و در صورت رعایت شرایط مرجوعی می‌توانید درخواست بازگشت ثبت کنید.",
  },
  {
    id: 3,
    question: "هزینه ارسال چگونه محاسبه می‌شود؟",
    answer:
      "هزینه ارسال بر اساس شهر مقصد و وزن سفارش محاسبه می‌شود. برخی سفارش‌ها شامل ارسال رایگان هستند.",
  },
  {
    id: 4,
    question: "چگونه سفارشم را پیگیری کنم؟",
    answer:
      "از طریق پنل کاربری و بخش سفارشات می‌توانید وضعیت سفارش خود را مشاهده کنید.",
  },
  {
    id: 5,
    question: "آیا محصولات ضمانت اصالت دارند؟",
    answer:
      "بله، تمامی کالاهای شاپت با تضمین اصالت و کیفیت عرضه می‌شوند.",
  },
];

export default function FAQPage() {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>سوالات متداول</h1>

        <p>
          پاسخ رایج‌ترین سوالات کاربران شاپت را در این بخش پیدا کنید.
        </p>
      </section>

      <section className={styles.faqSection}>
        {faqData.map((item) => (
          <div
            key={item.id}
            className={styles.faqItem}
          >
            <button
              className={styles.question}
              onClick={() => toggleFaq(item.id)}
            >
              <span>{item.question}</span>

              {activeId === item.id ? (
                <Minus size={20} />
              ) : (
                <Plus size={20} />
              )}
            </button>

            {activeId === item.id && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}