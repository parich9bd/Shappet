import ProductCard from "@/Components/UI/ProductCard/ProductCard";
import styles from "./page.module.css";
import { getProducts } from "@/Services/productService";

export default async function Page() {
  const products = await getProducts();

  const tools = products.filter(
    (product) => product.category === "accessories"
  );

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>لوازم نگهداری حیوانات</h1>

      <div className={styles.grid}>
        {tools.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}