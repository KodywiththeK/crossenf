"use client";

import { useInfiniteProducts } from "@/hooks/useProducts";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useSearchParams } from "next/navigation";
import ProductCard from "../templates/ProductCard";
import { defaultSortingOption, productSortingOptions } from "@/constant/product";
import { useMemo } from "react";

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
  const sortKey = searchParams.get("sort") || defaultSortingOption.value;
  const sortOption = productSortingOptions[sortKey] || defaultSortingOption;
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading: isFetching,
    isFetchingNextPage,
  } = useInfiniteProducts(sortKey);

  const productList = useMemo(() => {
    if (!data) return [];
    const sortedProducts = [...data.pages.flatMap((page) => page.products)];
    return sortOption.sort(sortedProducts);
  }, [data, sortOption]);

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
