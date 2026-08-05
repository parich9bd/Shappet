"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ShoppingBag,
  Heart,
  Settings,
  LogOut,
  CircleUserRound,
} from "lucide-react";
import toast from "react-hot-toast";

import styles from "./profile.module.css";
import { getMeRequest, logoutRequest } from "@/Services/auth";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await getMeRequest();

        setUser(data.user);
      } catch (error) {
        toast.error("برای نمایش پروفایل ابتدا وارد حساب شوید");

        window.location.href = "/";
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const logout = async () => {
    try {
      await logoutRequest();

      setUser(null);

      window.location.href = "/";
    } catch (error) {
      toast.error(error.message || "خطا در خروج");
    }
  };

  if (loading) {
    return null;
  }

  if (!user) {
    return null;
  }

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <div className={styles.userBox}>
          <div className={styles.avatar}>
            <CircleUserRound
              size={54}
              className={styles.avatarIcon}
            />
          </div>

          <div className={styles.userMeta}>
            <h1>{user.name || "کاربر شاپت"}</h1>
            <p>{user.phone}</p>
          </div>
        </div>

        <button
          className={styles.logoutBtn}
          onClick={logout}
        >
          <LogOut size={18} />
          خروج
        </button>
      </section>

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

      <section className={styles.info}>
        <h2>اطلاعات حساب</h2>

        <div className={styles.row}>
          <Phone size={18} />
          <span>{user.phone}</span>
        </div>

        <div className={styles.row}>
          <Mail size={18} />
          <span>{user.email || "ثبت نشده"}</span>
        </div>

        <div className={styles.row}>
          <MapPin size={18} />
          <span>{user.city || "ثبت نشده"}</span>
        </div>
      </section>
    </main>
  );
}