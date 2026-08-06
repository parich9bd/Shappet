import { getProducts } from "@/Services/productService";
import ProductCard from "@/Components/UI/ProductCard/ProductCard";
import styles from "./shop.module.css";

export default async function ShopPage() {
  let products = [];

  try {
    products = await getProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return (
      <div className={styles.state}>
        خطا در دریافت محصولات
      </div>
    );
  }

  const statistics = {
    totalProducts: products.length,
    available: products.filter((p) => p.isAvailable).length,
    featured: products.filter((p) => p.isFeatured).length,
    bestSeller: products.filter((p) => p.isBestSeller).length,
    newProducts: products.filter((p) => p.isNew).length,
    discounts: products.filter((p) => p.discount > 0).length,
    categories: new Set(products.map((p) => p.category)).size,
    brands: new Set(products.map((p) => p.brand)).size,
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>فروشگاه حیوانات خانگی</h1>

      <div className={styles.infoBox}>
        <div className={styles.infoCard}>
          <span>{statistics.totalProducts}</span>
          <p>محصول</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.available}</span>
          <p>موجود</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.discounts}</span>
          <p>تخفیف‌دار</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.featured}</span>
          <p>ویژه</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.bestSeller}</span>
          <p>پرفروش</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.newProducts}</span>
          <p>جدید</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.categories}</span>
          <p>دسته‌بندی</p>
        </div>

        <div className={styles.infoCard}>
          <span>{statistics.brands}</span>
          <p>برند</p>
        </div>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}