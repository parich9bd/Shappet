import styles from "./catfood.module.css";
import ProductCard from "@/Components/UI/ProductCard/ProductCard";


export default async function CatFoodPage() {
  const res = await fetch("/api/products", {
    cache: "no-store",
  });

  const products = await res.json();

  const catFoods = products.filter(
    (product) => product.category === "cat-food"
  );

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1>غذای گربه</h1>

        <p>
          بهترین غذاهای خشک و مرطوب گربه با کیفیت بالا و ارزش غذایی مناسب.
        </p>
      </div>

      <div className={styles.grid}>
        {catFoods.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}