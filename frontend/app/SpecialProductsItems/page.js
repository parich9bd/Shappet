import ProductCard from "@/Components/UI/ProductCard/ProductCard";
import { getProducts } from "@/Services/productService";
import styles from "./page.module.css";

export default async function Page() {
  const products = await getProducts();

  const specialProducts = products.filter((product) => product.discount > 0);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>محصولات ویژه</h1>

        <p>تمامی محصولاتی که دارای تخفیف ویژه هستند.</p>
      </div>

      <div className={styles.grid}>
        {specialProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showDiscount={true}
          />
        ))}
      </div>
    </section>
  );
}