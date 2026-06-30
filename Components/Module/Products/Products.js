"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import ProductCard from "@/Components/UI/ProductCard/ProductCard";

import styles from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:4000/products");
      const data = await res.json();

      // فقط جدیدترین محصولات
      const newProducts = data.filter((product) => product.isNew).slice(0, 8);

      setProducts(newProducts);
    };

    fetchProducts();
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -1100,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 1100,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>جدیدترین محصولات</h2>

        <Link href="/shop">مشاهده همه</Link>
      </div>

      <div ref={sliderRef} className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.controls}>
        <span onClick={scrollLeft}></span>
        <span onClick={scrollRight}></span>
      </div>
    </section>
  );
}

export default Products;
