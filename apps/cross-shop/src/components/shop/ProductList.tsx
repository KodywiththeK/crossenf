"use client";

import { useProducts } from "@/hooks/useProducts";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useSearchParams } from "next/navigation";
import ProductCard from "../templates/ProductCard";
import { defaultSortingOption, productSortingOptions } from "@/constant/product";
import { useMemo } from "react";

export default function ProductList() {
  const searchParams = useSearchParams();
  const sortKey = searchParams.get("sort") || defaultSortingOption.value;
  const sortOption = productSortingOptions[sortKey] || defaultSortingOption;
  const { data, fetchNextPage, hasNextPage, isLoading, error } = useProducts(sortKey);

  const productList = useMemo(() => {
    if (!data) return [];
    const sortedProducts = [...data.pages.flatMap((page) => page.products)];
    return sortOption.sort(sortedProducts);
  }, [data, sortOption]);

  const observerRef = useInfiniteScroll(fetchNextPage, hasNextPage || false);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <ul className="xs:grid-cols-2 grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-6 md:gap-y-10">
        {productList.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      {hasNextPage && <div ref={observerRef} className="h-10" />}
    </>
  );
}
