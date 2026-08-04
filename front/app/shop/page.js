"use client";

import { useEffect, useMemo, useState } from "react";
import { getProducts } from "@/Services/productService";
import ProductCard from "@/Components/UI/ProductCard/ProductCard";
import styles from "./shop.module.css";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setStatus("loading");

        const data = await getProducts();

        setProducts(data);
        setStatus("success");
      } catch (err) {
        console.log(err);
        setStatus("error");
      }
    };

    fetchProducts();
  }, []);

  const statistics = useMemo(() => {
    return {
      totalProducts: products.length,
      available: products.filter((p) => p.isAvailable).length,
      featured: products.filter((p) => p.isFeatured).length,
      bestSeller: products.filter((p) => p.isBestSeller).length,
      newProducts: products.filter((p) => p.isNew).length,
      discounts: products.filter((p) => p.discount > 0).length,
      totalStock: products.reduce((sum, p) => sum + p.stock, 0),
      categories: [...new Set(products.map((p) => p.category))].length,
      brands: [...new Set(products.map((p) => p.brand))].length,
    };
  }, [products]);

  if (status === "loading") {
    return <div className={styles.state}>در حال بارگذاری...</div>;
  }

  if (status === "error") {
    return <div className={styles.state}>خطا در دریافت محصولات</div>;
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>فروشگاه حیوانات خانگی</h1>

      <div className={styles.infoBox}>
        <div className={styles.infoCard}>
          <span>{statistics.totalProducts}</span>
          <p>محصول</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.available}</span>
          <p>موجود</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.discounts}</span>
          <p>تخفیف‌دار</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.featured}</span>
          <p>ویژه</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.bestSeller}</span>
          <p>پرفروش</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.newProducts}</span>
          <p>جدید</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.categories}</span>
          <p>دسته‌بندی</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.brands}</span>
          <p>برند</p>
        </div>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
