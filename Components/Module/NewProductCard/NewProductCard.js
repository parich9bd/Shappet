"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import toast from "react-hot-toast";

import styles from "./NewProductCard.module.css";

function NewProductCard({ product }) {
  const { addToCart } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <div className={styles.card}>
      <span className={styles.badge}>جدید</span>

      <button
        className={styles.favoriteBtn}
        onClick={() => {
          if (isFavorite(product.id)) {
            removeFavorite(product.id);
            toast("از علاقه‌مندی‌ها حذف شد", {
              icon: "💔",
            });
          } else {
            addFavorite(product);
            toast.success("به علاقه‌مندی‌ها اضافه شد");
          }
        }}
      >
        <Heart
          size={20}
          fill={isFavorite(product.id) ? "#ff4d6d" : "none"}
          color={isFavorite(product.id) ? "#ff4d6d" : "#666"}
        />
      </button>

      <Image
        src={product.image}
        width={180}
        height={180}
        alt={product.productName}
      />

      <h3>{product.productName}</h3>

      <p className={styles.price}>
        قیمت :
        <span>{product.price.toLocaleString("fa-IR")} تومان</span>
      </p>

      <div className={styles.actions}>
        <button
          className={styles.cartBtn}
          onClick={() => addToCart(product)}
        >
          <ShoppingCart size={20} />
          افزودن به سبد خرید
        </button>

        <Link
          href={`/products/${product.id}`}
          className={styles.detailsBtn}
        >
          مشاهده جزئیات
        </Link>
      </div>
    </div>
  );
}

export default NewProductCard;