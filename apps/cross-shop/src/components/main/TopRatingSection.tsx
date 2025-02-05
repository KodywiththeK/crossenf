"use client";
import { Product } from "@/types/products";
import { getTopRatingProducts } from "@/utils/helpers";
import ProductCarouselSection from "@/components/templates/ProductCarouselSection";
import { productSortingOptions } from "@/constant/product";

type Props = {
  products: Product[];
  isLoading?: boolean;
};

export default function TopRatingSection({ products, isLoading }: Props) {
  return (
    <ProductCarouselSection
      title="TOP RATINGS"
      titleIcon="⭐️"
      description="평점이 높은 상품을 모아봤어요!"
      products={products}
      filterFunction={getTopRatingProducts}
      link={`/shop?sort=${productSortingOptions.rating.value}`}
      linkText={`${productSortingOptions.rating.text} 더 보기`}
      isLoading={isLoading}
    />
  );
}
