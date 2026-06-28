"use client";

import Image from "next/image";
import Link from "next/link";

import { useSearch } from "@/context/SearchContext";
import SearchLoader from "@/Components/UI/SearchLoader/SearchLoader";

import styles from "./SearchResult.module.css";

function SearchResult() {
  const { query, loading, results } = useSearch();

  if (loading) {
    return <SearchLoader />;
  }

  return (
    <section className={styles.container}>
      <h2>
        نتیجه جستجو برای : <span>{query}</span>
      </h2>

      <p>{results.length} محصول پیدا شد</p>

      <div className={styles.grid}>
        {results.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className={styles.card}
          >
            <Image
              src={product.image}
              alt={product.productName}
              width={220}
              height={220}
            />

            <h3>{product.productName}</h3>

            <span>
              {product.price.toLocaleString("fa-IR")} تومان
            </span>
          </Link>
        ))}
      </div>

      {results.length === 0 && (
        <div className={styles.empty}>محصولی پیدا نشد.</div>
      )}
    </section>
  );
}

export default SearchResult;