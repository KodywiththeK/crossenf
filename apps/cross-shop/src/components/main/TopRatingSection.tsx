"use client";
import { Product } from "@/types/products";
import { getTopRatingProducts } from "@/utils/helpers";
import ProductCarouselSection from "@/components/templates/ProductCarouselSection";

type Props = {
  products: Product[];
};

export default function TopRatingSection({ products }: Props) {
  return (
    <ProductCarouselSection
      title="Top Ratings"
      titleIcon="⭐️"
      products={products}
      filterFunction={getTopRatingProducts}
    />
  );
}
