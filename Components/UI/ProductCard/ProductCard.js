"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import styles from "./ProductCard.module.css";
import toast from "react-hot-toast";

function ProductCard({ product, showDiscount = false, onAddToCart }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      addToCart(product);
      toast.success(`${product.productName} به سبد خرید اضافه شد`);
    }
  };

  return (
    <div className={styles.card}>
      <button
        className={styles.favoriteBtn}
        onClick={() => {
          if (isFavorite(product.id)) {
            removeFavorite(product.id);
            toast("از علاقه‌مندی‌ها حذف شد", { icon: "💔" });
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

      {showDiscount && product.discount > 0 && (
        <span className={styles.discountBadge}>
          %{product.discount} تخفیف
        </span>
      )}

      <Image
        src={product.image}
        width={180}
        height={180}
        alt={product.productName}
      />

      <h3>{product.productName}</h3>

      <p className={styles.price}>
        قیمت : <span>{product.price.toLocaleString("fa-IR")} تومان</span>
      </p>

      <div className={styles.actions}>
        <button className={styles.cartBtn} onClick={handleAddToCart}>
          <ShoppingCart size={20} />
          افزودن به سبد خرید
        </button>

        <Link href={`/products/${product.id}`} className={styles.detailsBtn}>
          مشاهده جزئیات
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;