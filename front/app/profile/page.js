"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  User,
  Phone,
  Mail,
  MapPin,
  ShoppingBag,
  Heart,
  Settings,
  LogOut,
  CircleUserRound,
} from "lucide-react";

import styles from "./profile.module.css";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const phone = localStorage.getItem("phone");
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/";
      return;
    }

    setUser({
      name: "پریچهر عابدزاده",
      phone: phone || "ثبت نشده",
      email: "Parichehrabedzadeh@gmail.com",
      city: "اصفهان",
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("phone");
    window.location.href = "/";
  };

  if (!user) return null;

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <section className={styles.header}>
        <div className={styles.userBox}>
          <div className={styles.avatar}>
            <CircleUserRound size={54} className={styles.avatarIcon} />
          </div>

          <div className={styles.userMeta}>
            <h1>{user.name}</h1>
            <p>{user.phone}</p>
          </div>
        </div>

        <button className={styles.logoutBtn} onClick={logout}>
          <LogOut size={18} />
          خروج
        </button>
      </section>

      {/* QUICK ACTIONS */}
      <section className={styles.actions}>
        <Link href="/orders" className={styles.card}>
          <ShoppingBag size={22} />
          <span>سفارش‌ها</span>
        </Link>

        <Link href="/favorites" className={styles.card}>
          <Heart size={22} />
          <span>علاقه‌مندی</span>
        </Link>

        <Link href="/settings" className={styles.card}>
          <Settings size={22} />
          <span>تنظیمات</span>
        </Link>
      </section>

      {/* INFO */}
      <section className={styles.info}>
        <h2>اطلاعات حساب</h2>

        <div className={styles.row}>
          <Phone size={18} />
          <span>{user.phone}</span>
        </div>

        <div className={styles.row}>
          <Mail size={18} />
          <span>{user.email}</span>
        </div>

        <div className={styles.row}>
          <MapPin size={18} />
          <span>{user.city}</span>
        </div>
      </section>
    </main>
  );
}
