import ProductCard from "@/Components/UI/ProductCard/ProductCard";
import styles from "./dogsProducts.module.css";

export default async function DogsProducts() {
  const res = await fetch("http://localhost:4000/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("خطا در دریافت محصولات");
  }

  const products = await res.json();

  const dogProducts = products.filter((product) => {
    const isDogCategory = product.category === "dog-food";

    const isDogTag = product.tags?.some((tag) =>
      tag.toLowerCase().includes("dog"),
    );

    const isDogName = product.productName.includes("سگ");

    return isDogCategory || isDogTag || isDogName;
  });

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1>محصولات سگ</h1>

        <p>
          مجموعه‌ای از بهترین غذا، مکمل، اسباب‌بازی، قلاده، کیف حمل و لوازم
          نگهداری سگ با ضمانت اصالت کالا.
        </p>
      </div>

      {dogProducts.length > 0 ? (
        <div className={styles.grid}>
          {dogProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="shop" />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <h2>محصولی یافت نشد.</h2>
          <p>در حال حاضر محصولی برای سگ ثبت نشده است.</p>
        </div>
      )}
    </section>
  );
}
