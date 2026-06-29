"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PetTools.module.css";
import ProductCard from "@/Components/UI/ProductCard/ProductCard";
function PetTools() {
  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:4000/products");

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        const accessories = data
          .filter((item) => item.category === "accessories")
          .slice(0, 6);

        setProducts(accessories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className={styles.petTools}>
      {/* تصویر سمت چپ */}
      <div className={styles.petToolsImage}>
        <div className={styles.imageBg}></div>

        <Image
          src="/pic/pettools.svg"
          width={358}
          height={776}
          alt="Pet Tools"
        />

        <div className={styles.imageOverlay}>
          <h2>لوازم نگهداری حیوانات</h2>

          <Link href="/products" className={styles.showAllBtn}>
            مشاهده همه
          </Link>
        </div>
      </div>

      {/* محصولات */}
      <div className={styles.petToolsContent}>
        <div className={styles.petToolsProducts}>
          {(isMobile ? products.slice(0, 4) : products).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PetTools;
