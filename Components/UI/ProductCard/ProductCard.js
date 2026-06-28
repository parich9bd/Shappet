"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import styles from "./ProductCard.module.css";

function ProductCard({
  product,

  variant = "shop",
}) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();
  return (
    <div className={styles.card}>
      <button
        className={styles.favoriteBtn}
        onClick={() => {
          if (isFavorite(product.id)) {
            removeFavorite(product.id);
          } else {
            addFavorite(product);
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
        قیمت :<span>{product.price.toLocaleString("fa-IR")} تومان</span>
      </p>

      <button
        className={styles.cartBtn}
        onClick={() => {
          console.log(product);
          addToCart(product);
        }}
      >
        <ShoppingCart size={20} />
        افزودن به سبد خرید
      </button>
      <Link href={`/products/${product.id}`} className={styles.detailsBtn}>
        مشاهده جزئیات
      </Link>
    </div>
  );
}

export default ProductCard;
