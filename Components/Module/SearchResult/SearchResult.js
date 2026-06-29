"use client";

import Image from "next/image";
import Link from "next/link";

import { useSearch } from "@/context/SearchContext";
import SearchLoader from "@/Components/UI/SearchLoader/SearchLoader";
import ProductCard from "@/Components/UI/ProductCard/ProductCard";
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {results.length === 0 && (
        <div className={styles.empty}>محصولی پیدا نشد.</div>
      )}
    </section>
  );
}

export default SearchResult;
