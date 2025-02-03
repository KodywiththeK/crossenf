"use client";
import { Product } from "@/types/products";
import { getHotDealProducts } from "@/utils/helpers";
import ProductCarouselSection from "@/components/templates/ProductCarouselSection";

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
    />
  );
}
