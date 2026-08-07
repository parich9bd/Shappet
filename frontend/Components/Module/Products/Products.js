import Link from "next/link";

import { getProducts } from "@/Services/productService";
import ProductCard from "@/Components/UI/ProductCard/ProductCard";

import styles from "./Products.module.css";

async function Products() {
  const products = await getProducts();

  const newProducts = products
    .filter((product) => product.isNew)
    .slice(0, 8);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>جدیدترین محصولات</h2>

        <Link href="/shop">مشاهده همه</Link>
      </div>

      <div className={styles.products}>
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.controls}>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Products;