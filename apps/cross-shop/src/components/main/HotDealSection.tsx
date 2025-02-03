"use client";
import { Product } from "@/types/products";
import { getHotDealProducts } from "@/utils/helpers";
import ProductCarouselSection from "@/components/templates/ProductCarouselSection";
import { productSortingOptions } from "@/constant/product";

type Props = {
  products: Product[];
};

export default function HotDealSection({ products }: Props) {
  return (
    <ProductCarouselSection
      title="Hot Deals"
      titleIcon="🔥"
      products={products}
      filterFunction={getHotDealProducts}
      link={`/shop?sort=${productSortingOptions.discount.value}`}
      linkText={`${productSortingOptions.discount.text}으로 더 보기`}
    />
  );
}
