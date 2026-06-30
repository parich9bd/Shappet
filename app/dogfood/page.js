import styles from "./dogfood.module.css";
import ProductCard from "@/Components/UI/ProductCard/ProductCard";

export default async function DogFoodPage() {
  const res = await fetch("http://localhost:4000/products", {
    cache: "no-store",
  });

  const products = await res.json();

  const dogFoods = products.filter(
    (product) => product.category === "dog-food",
  );

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1>غذای سگ</h1>

        <p>مجموعه‌ای از بهترین غذاهای خشک و مرطوب سگ از برندهای معتبر.</p>
      </div>

      <div className={styles.grid}>
        {dogFoods.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
