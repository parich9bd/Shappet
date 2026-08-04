import styles from "./fishfood.module.css";
import ProductCard from "@/Components/UI/ProductCard/ProductCard";
import { getProducts } from "@/Services/productService";

export default async function FishFoodPage() {
  const products = await getProducts();

  const fishFoods = products.filter(
    (product) => product.category === "fish-food"
  );

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1>غذای ماهی</h1>

        <p>
          انواع غذای ماهیان زینتی از برندهای معتبر با کیفیت بالا.
        </p>
      </div>

      <div className={styles.grid}>
        {fishFoods.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}