"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Heart, ShoppingCart, Star, Check, X, Minus, Plus } from "lucide-react";

import toast from "react-hot-toast";

import styles from "./ProductDetails.module.css";

import ProductCard from "@/Components/UI/ProductCard/ProductCard";

import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");

        const data = await res.json();

        setProducts(data);

        const current = data.find((item) => Number(item.id) === Number(id));

        if (!current) {
          notFound();
        }

        setProduct(current);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return products
      .filter(
        (item) => item.category === product.category && item.id !== product.id,
      )
      .slice(0, 4);
  }, [products, product]);

  const handleAddCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    toast.success("محصول به سبد خرید اضافه شد");
  };

  if (loading) {
    return <h2>در حال بارگذاری...</h2>;
  }

  if (!product) {
    return <h2>محصول پیدا نشد.</h2>;
  }

  if (!product) {
    notFound();
  }

  return (
    <section className={styles.container}>
      {/* breadcrumb */}

      <div className={styles.breadcrumb}>
        <Link href="/">خانه</Link>

        <span>/</span>

        <Link href="/products">محصولات</Link>

        <span>/</span>

        <span>{product.productName}</span>
      </div>

      {/* Hero */}

      <div className={styles.hero}>
        {/* تصویر */}

        <div className={styles.imageBox}>
          {product.discount > 0 && (
            <span className={styles.discount}>%{product.discount}</span>
          )}

          <Image
            src={product.image}
            width={420}
            height={420}
            alt={product.productName}
          />
        </div>

        {/* اطلاعات */}

        <div className={styles.info}>
          <h1>{product.productName}</h1>

          <div className={styles.rating}>
            <Star size={18} fill="#ffb800" color="#ffb800" />

            <span>{product.rating}</span>
          </div>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.meta}>
            <p>
              برند :<strong>{product.brand}</strong>
            </p>

            <p>
              دسته بندی :<strong>{product.category}</strong>
            </p>

            <p>
              موجودی :<strong>{product.stock}</strong>
            </p>

            <p>
              وضعیت :
              {product.isAvailable ? (
                <span className={styles.available}>
                  <Check size={16} />
                  موجود
                </span>
              ) : (
                <span className={styles.unavailable}>
                  <X size={16} />
                  ناموجود
                </span>
              )}
            </p>
          </div>

          {/* قیمت */}

          <div className={styles.priceBox}>
            {product.oldPrice > 0 && (
              <del>{product.oldPrice.toLocaleString("fa-IR")}</del>
            )}

            <h2>
              {product.price.toLocaleString("fa-IR")}
              <span> تومان</span>
            </h2>
          </div>

          {/* تعداد */}

          <div className={styles.counter}>
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              <Minus size={18} />
            </button>

            <span>{quantity}</span>

            <button onClick={() => setQuantity((prev) => prev + 1)}>
              <Plus size={18} />
            </button>
          </div>

          {/* دکمه ها */}

          <div className={styles.buttons}>
            <button className={styles.cartBtn} onClick={handleAddCart}>
              <ShoppingCart size={20} />
              افزودن به سبد خرید
            </button>

            <button
              className={styles.favoriteBtn}
              onClick={() => {
                if (isFavorite(product.id)) {
                  removeFavorite(product.id);

                  toast("از علاقه مندی حذف شد", {
                    icon: "💔",
                  });
                } else {
                  addFavorite(product);

                  toast.success("به علاقه مندی اضافه شد");
                }
              }}
            >
              <Heart
                fill={isFavorite(product.id) ? "#ff4d6d" : "none"}
                color={isFavorite(product.id) ? "#ff4d6d" : "#555"}
              />
            </button>
          </div>

          {/* تگ ها */}

          <div className={styles.tags}>
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* محصولات مرتبط */}

      <section className={styles.related}>
        <h2>محصولات مرتبط</h2>

        <div className={styles.relatedGrid}>
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </section>
  );
}
