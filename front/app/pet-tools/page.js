import ProductCard from "@/Components/UI/ProductCard/ProductCard";
import styles from "./page.module.css";

async function getProducts() {
  const res = await fetch("http://localhost:4000/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const products = await getProducts();

  const tools = products.filter((item) => item.category === "accessories");

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
