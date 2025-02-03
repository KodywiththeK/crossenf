"use client";
import { Box, Button, Carousel, Icons } from "@common/design";
import React from "react";
import Heading3 from "../ui/Heading3";
import { Product } from "@/types/products";
import ProductCard from "../templates/ProductCard";
import { useResponsive } from "@/hooks/useResponsive";
import { useRouter } from "next/navigation";

type ProductCarouselSectionProps = {
  title: string;
  titleIcon?: string;
  products: Product[];
  filterFunction: (products: Product[]) => Product[];
};

export default function ProductCarouselSection({
  title,
  titleIcon = "",
  products,
  filterFunction,
}: ProductCarouselSectionProps) {
  const router = useRouter();
  const { isMax640 } = useResponsive();
  const isMobile = isMax640();

  // 특정 필터링 로직을 적용해 필요한 상품 리스트 가져오기
  const filteredProducts = filterFunction(products);
  const productSlides = filteredProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <Box className="flex flex-col gap-4 sm:gap-6">
      <Box className="flex items-center justify-between gap-2">
        <Heading3>
          {title} {titleIcon}
        </Heading3>
        <Button variant="link" className="font-medium" onClick={() => router.push("/shop")}>
          더 보기
          <Icons.RightChevron size={14} />
        </Button>
      </Box>
      <Carousel
        className="w-full"
        slides={productSlides}
        spaceBetween={16}
        slidesPerView={isMobile ? 2 : 3}
      />
    </Box>
  );
}
