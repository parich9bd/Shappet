"use client";

import { useSearch } from "@/context/SearchContext";
import SearchResult from "@/Components/Module/SearchResult/SearchResult";

function HomeContent({ children }) {
  const { query } = useSearch();

  if (query) {
    return <SearchResult />;
  }

  return children;
}

export default HomeContent;