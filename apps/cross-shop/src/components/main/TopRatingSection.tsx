"use client";
import { Product } from "@/types/products";
import { getTopRatingProducts } from "@/utils/helpers";
import ProductCarouselSection from "@/components/templates/ProductCarouselSection";
import { productSortingOptions } from "@/constant/product";

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
      link={`/shop?sort=${productSortingOptions.rating.value}`}
      linkText={`${productSortingOptions.rating.text}으로 더 보기`}
    />
  );
}
