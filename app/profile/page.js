"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  User,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  Heart,
  LogOut,
  Pencil,
} from "lucide-react";

import styles from "./profile.module.css";

export default function ProfilePage() {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const savedPhone = localStorage.getItem("phone");
    setPhone(savedPhone || "ثبت نشده");
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.profileCard}>
        <div className={styles.avatarBox}>
          <Image
            src="/Images/avatar.png"
            width={120}
            height={120}
            alt="avatar"
            className={styles.avatar}
          />

          <button className={styles.uploadBtn}>
            تغییر تصویر
          </button>
        </div>

        <div className={styles.userInfo}>
          <h1>پریچهر</h1>

          <div className={styles.infoItem}>
            <Phone size={18} />
            <span>{phone}</span>
          </div>

          <div className={styles.infoItem}>
            <Mail size={18} />
            <span>user@gmail.com</span>
          </div>

          <div className={styles.infoItem}>
            <MapPin size={18} />
            <span>شیراز، ایران</span>
          </div>

          <button className={styles.editBtn}>
            <Pencil size={16} />
            ویرایش پروفایل
          </button>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <ShoppingBag size={26} />
          <h3>12</h3>
          <p>سفارش</p>
        </div>

        <div className={styles.statCard}>
          <Heart size={26} />
          <h3>8</h3>
          <p>علاقه‌مندی</p>
        </div>

        <div className={styles.statCard}>
          <User size={26} />
          <h3>3 سال</h3>
          <p>عضویت</p>
        </div>
      </section>

      <section className={styles.orders}>
        <h2>سفارشات اخیر</h2>

        <div className={styles.order}>
          <span>غذای خشک سگ رویال کنین</span>
          <span>تحویل شده</span>
        </div>

        <div className={styles.order}>
          <span>غذای گربه جوسرا</span>
          <span>در حال ارسال</span>
        </div>

        <div className={styles.order}>
          <span>اسباب بازی حیوانات</span>
          <span>تحویل شده</span>
        </div>
      </section>

      <button
        className={styles.logout}
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("phone");
          window.location.reload();
        }}
      >
        <LogOut size={18} />
        خروج از حساب
      </button>
    </main>
  );
}