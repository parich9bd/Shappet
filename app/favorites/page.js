"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Star,
  Package,
  Tag,
  BadgePercent,
} from "lucide-react";

import { useFavorites } from "@/context/FavoritesContext";

import styles from "./FavoriteCard.module.css";

export default function Page() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <section className={styles.empty}>
        <Heart size={70} />
        <h2>هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید.</h2>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h1>علاقه‌مندی‌های من ❤️</h1>

      <div className={styles.grid}>
        {favorites.map((product) => (
          <div key={product.id} className={styles.card}>
            <button
              className={styles.removeBtn}
              onClick={() => removeFavorite(product.id)}
            >
              <Heart fill="#ff4d6d" color="#ff4d6d" size={22} />
            </button>

            <div className={styles.imageBox}>
              <Image
                src={product.image}
                width={220}
                height={220}
                alt={product.productName}
              />
            </div>

            <div className={styles.info}>
              <div className={styles.topBadges}>
                {product.isFeatured && (
                  <span className={styles.featured}>ویژه</span>
                )}

                {product.isBestSeller && (
                  <span className={styles.best}>پرفروش</span>
                )}

                {product.isNew && (
                  <span className={styles.new}>جدید</span>
                )}
              </div>

              <h2>{product.productName}</h2>

              <p className={styles.description}>
                {product.description}
              </p>

              <div className={styles.meta}>
                <span>
                  <Tag size={16} />
                  {product.brand}
                </span>

                <span>
                  <Star fill="#FDB022" color="#FDB022" size={16} />
                  {product.rating}
                </span>

                <span>
                  <Package size={16} />
                  {product.stock} موجود
                </span>
              </div>

              <div className={styles.tags}>
                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.priceBox}>
                <del>
                  {product.oldPrice.toLocaleString("fa-IR")} تومان
                </del>

                <span className={styles.discount}>
                  <BadgePercent size={16} />
                  {product.discount}٪
                </span>

                <h3>
                  {product.price.toLocaleString("fa-IR")} تومان
                </h3>
              </div>

              <div className={styles.actions}>
                <Link
                  href={`/products/${product.id}`}
                  className={styles.detailsBtn}
                >
                  مشاهده محصول
                </Link>

                <button className={styles.cartBtn}>
                  <ShoppingCart size={18} />
                  افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}