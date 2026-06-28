"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import ProductCard from "@/Components/UI/ProductCard/ProductCard";

import styles from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:4000/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -1100,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 1100,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>جدیدترین محصولات</h2>

        <Link href="/products">مشاهده همه</Link>
      </div>

      <div ref={sliderRef} className={styles.products}>
        {/* {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <Image
              src={product.image}
              width={180}
              height={180}
              alt={product.productName}
            />

            <h3>{product.productName}</h3>

            <p className={styles.price}>
              قیمت :<span>{product.price.toLocaleString()} تومان</span>
            </p>

            <Link href="#" className={styles.cartBtn}>
              <ShoppingCart size={20} />
              افزودن به سبد خرید
            </Link>
          </div>
        ))} */}

        {products.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
  />
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
