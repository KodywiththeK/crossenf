"use client";

import { useInfiniteProducts } from "@/hooks/useProducts";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useSearchParams } from "next/navigation";
import ProductCard from "../templates/ProductCard";
import { useEffect, useState } from "react";
import { getSortedProducts } from "@/utils/helpers";
import { pageParams } from "@/constant/params";

type Props = {
  isLoading?: boolean;
};

export default function ProductList({ isLoading }: Props) {
  if (isLoading)
    return (
      <ProductListContainer>
        <ProductListLoading cardNum={5} />
      </ProductListContainer>
    );

  const searchParams = useSearchParams();
  const [sortKey, setSortKey] = useState(pageParams.sort.defaultValue);

  useEffect(() => {
    const paramSortKey = searchParams.get(pageParams.sort.key) || pageParams.sort.defaultValue;
    setSortKey(paramSortKey);
  }, [searchParams]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading: isFetching,
    isFetchingNextPage,
  } = useInfiniteProducts(sortKey);

  const productList = data
    ? getSortedProducts(
        data.pages.flatMap((page) => page.products),
        sortKey,
      )
    : [];

  const observerRef = useInfiniteScroll(fetchNextPage, hasNextPage || false);

  return (
    <>
      <ProductListContainer>
        {isFetching ? (
          <ProductListLoading cardNum={5} />
        ) : (
          productList.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))
        )}
        {isFetchingNextPage && <ProductListLoading cardNum={5} />}
      </ProductListContainer>
      {hasNextPage && <div ref={observerRef} className="h-10" />}
    </>
  );
}

const ProductListContainer = ({ children }: { children: React.ReactNode }) => (
  <ul className="xs:grid-cols-2 grid w-full grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-6 md:gap-y-10">
    {children}
  </ul>
);
const ProductListLoading = ({ cardNum }: { cardNum: number }) =>
  new Array(cardNum).fill(null).map((_, index) => (
    <li key={index}>
      <ProductCard isLoading />
    </li>
  ));
