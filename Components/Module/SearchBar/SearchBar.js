"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./searchBar.module.css";
import Login from "@/Components/Auth/authForm/Login";
import HeaderMenu from "./Menu";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { getProducts } from "@/Services/productService";
import { useSearch } from "@/context/SearchContext";
import { useFavorites } from "@/context/FavoritesContext";
import { useCart } from "@/context/CartContext";
import { toPersianDigits } from "@/utils/convertDigits";

import {
  Search,
  Menu,
  X,
  House,
  ShoppingBag,
  ShoppingCart,
  Heart,
  BookOpen,
  PhoneCall,
  CircleHelp,
  User,
  LogIn,
  BadgeCheck,
} from "lucide-react";

function SearchBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);

  const { query, setQuery, setLoading, setResults } = useSearch();
  const { cart } = useCart();
  const { favorites } = useFavorites();

  const mobileMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const savedPhone = localStorage.getItem("phone");

    if (savedPhone) {
      setUser({
        phone: savedPhone,
      });
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setLoading(false);
      setResults([]);
      return;
    }

    setLoading(true);

    const delay = setTimeout(async () => {
      try {
        const products = await getProducts();
        const filtered = products.filter((item) =>
          item.productName.toLowerCase().includes(query.toLowerCase()),
        );
        setResults(filtered);
      } catch (err) {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.logoBox}>
          <Image
            src="/Logo/svgexport-7 (3) 1.svg"
            width={50}
            height={50}
            alt="logo"
          />

          <p>شاپت</p>

          <div className={styles.logoTooltip}>
            🐾 شاپت تا امروز حامی نجات بیش از <strong>۱۰٬۰۰۰</strong> حیوان
            بی‌سرپرست بوده است.
          </div>
        </div>

        {/* Search */}

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="جستوجو محصول"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Search size={20} className={styles.searchIcon} />
        </div>

        {/* ================= Desktop ================= */}

        <div className={styles.desktopActions}>
          <div className={styles.infoBox}>
            <Image
              src="/pic/Tick Square.svg"
              width={40}
              height={40}
              alt="tick"
            />

            <div className={styles.textBox}>
              <p>ضمانت اصالت کالا</p>
              <p>۱۰۰٪ تضمین اصالت</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <Image
              src="/pic/iconamoon_delivery-free-thin.svg"
              width={40}
              height={40}
              alt="delivery"
            />

            <div className={styles.textBox}>
              <p>ارسال رایگان</p>
              <p>تمامی خریدها</p>
            </div>
          </div>

          <div className={styles.iconsBox}>
            <Link href="/favorites" className={styles.favoriteLink}>
              <Heart size={22} />

              {favorites.length > 0 && (
                <span className={styles.badge}>{favorites.length}</span>
              )}
            </Link>

            <Link href="/cart" className={styles.cartLink}>
              <ShoppingCart size={22} />

              {cart.length > 0 && (
                <span className={styles.badge}>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            <div className={styles.userMenu} ref={userMenuRef}>
              <User
                size={22}
                className={styles.userIcon}
                onClick={() => setShowMenu(!showMenu)}
              />
              <span className={styles.userTooltip}>حساب کاربری</span>

              {showMenu && (
                <div className={styles.userPopup}>
                  <button
                    className={styles.closeBtn}
                    onClick={() => setShowMenu(false)}
                  >
                    <X size={22} />
                  </button>

                  <div
                    onClick={() => {
                      const token = localStorage.getItem("token");

                      setShowMenu(false);

                      if (!token) {
                        toast.error(
                          "برای ورود به پروفایل ابتدا وارد حساب شوید",
                        );
                        return;
                      }

                      router.push("/profile");
                    }}
                    className={styles.loginBtn}
                  >
                    <User size={18} />
                    پروفایل
                  </div>

                  {user ? (
                    <div className={styles.loginBtn}>
                      <BadgeCheck size={18} color="#22c55e" />
                      {toPersianDigits(user.phone)}
                    </div>
                  ) : (
                    <button
                      type="button"
                      className={styles.loginBtn}
                      onClick={() => {
                        setShowMenu(false);
                        setShowLoginModal(true);
                      }}
                    >
                      <LogIn size={18} />
                      ورود
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= Mobile ================= */}

        <div className={styles.mobileMenu} ref={mobileMenuRef}>
          <Menu
            size={28}
            className={styles.userIcon}
            onClick={() => setShowMenu(!showMenu)}
          />

          {showMenu && (
            <div className={styles.userPopup}>
              <button
                className={styles.closeBtn}
                onClick={() => setShowMenu(false)}
              >
                <X size={22} />
              </button>

              <Link href="/">
                <House size={18} />
                خانه
              </Link>

              <Link href="/shop">
                <ShoppingBag size={18} />
                فروشگاه
              </Link>

              <Link href="/blog">
                <BookOpen size={18} />
                وبلاگ
              </Link>

              <Link href="/contact">
                <PhoneCall size={18} />
                تماس با ما
              </Link>

              <Link href="/about">
                <CircleHelp size={18} />
                درباره ما
              </Link>

              <hr />

              <div
                onClick={() => {
                  const token = localStorage.getItem("token");

                  setShowMenu(false);

                  if (!token) {
                    toast.error("برای ورود به پروفایل ابتدا وارد حساب شوید");
                    return;
                  }

                  window.location.href = "/profile";
                }}
                className={styles.loginBtn}
              >
                <User size={18} />
                پروفایل
              </div>

              {user ? (
                <div className={styles.loginBtn}>
                  <BadgeCheck size={18} color="#22c55e" />
                  {toPersianDigits(user.phone)}
                </div>
              ) : (
                <button
                  type="button"
                  className={styles.loginBtn}
                  onClick={() => {
                    setShowMenu(false);
                    setShowLoginModal(true);
                  }}
                >
                  <LogIn size={18} />
                  ورود
                </button>
              )}
            </div>
          )}
        </div>
      </section>
      <HeaderMenu className={styles.menuDesk} />
      {showLoginModal && (
        <Login
          onClose={() => setShowLoginModal(false)}
          onLogin={(phone) => {
            setUser({ phone });
          }}
        />
      )}
    </>
  );
}

export default SearchBar;
