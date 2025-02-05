"use client";
import { Product } from "@/types/products";
import { getHotDealProducts } from "@/utils/helpers";
import ProductCarouselSection from "@/components/templates/ProductCarouselSection";
import { productSortingOptions } from "@/constant/product";

type Props = {
  products: Product[];
  isLoading?: boolean;
};

export default function OnSaleSection({ products, isLoading }: Props) {
  const isClient = typeof window !== "undefined";
  return (
    <ProductCarouselSection
      title="ON SALE"
      titleIcon="🔥"
      description="특가 할인 상품들을 확인해보세요!"
      products={products}
      filterFunction={getHotDealProducts}
      link={`/shop?sort=${productSortingOptions.discount.value}`}
      linkText={`${productSortingOptions.discount.text} 더 보기`}
      isLoading={!isClient || isLoading}
    />
  );
}
