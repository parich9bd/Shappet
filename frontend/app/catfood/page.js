import ProductCard from "@/Components/UI/ProductCard/ProductCard";
import { getProducts } from "@/Services/productService";

import styles from "./catfood.module.css";

export default async function CatFoodPage() {
  const products = await getProducts();

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