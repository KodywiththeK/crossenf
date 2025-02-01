"use client";

import { useProducts } from "@/hooks/useProducts";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import ProductCard from "../templates/ProductCard";

export default function ProductList() {
  const { data, fetchNextPage, hasNextPage, isLoading, error } = useProducts();
  const productList = data?.pages.flatMap((page) => page.products);
  const observerRef = useInfiniteScroll(fetchNextPage, hasNextPage || false);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-6 md:gap-y-10">
        {productList?.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      {/* 👇 다음 페이지가 있을 경우, 감시할 요소 추가 */}
      {hasNextPage && <div ref={observerRef} className="h-10" />}
    </div>
  );
}
