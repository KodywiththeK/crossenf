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
  description?: string;
  products: Product[];
  filterFunction: (products: Product[]) => Product[];
  link: string;
  linkText?: string;
  isLoading?: boolean;
};

export default function ProductCarouselSection({
  title,
  titleIcon = "",
  description,
  products,
  filterFunction,
  link,
  linkText = "더 보기",
  isLoading,
}: ProductCarouselSectionProps) {
  const router = useRouter();
  const { isMax640 } = useResponsive();
  const isMobile = isMax640();

  // 특정 필터링 로직을 적용해 필요한 상품 리스트 가져오기
  const filteredProducts = filterFunction(products);
  const productSlides = filteredProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const skeletonSlides = new Array(isMobile ? 2 : 3)
    .fill(null)
    .map((_, index) => <ProductCard key={index} isLoading />);

  return (
    <Box className="flex flex-col gap-4 sm:gap-6">
      <Box className="xs:flex-row xs:items-center xs:gap-2 flex flex-col items-start justify-between gap-1">
        <Heading3 className="flex flex-col items-start gap-1 sm:flex-row sm:items-end sm:gap-2">
          <p>
            {title} {titleIcon}
          </p>
          <p className="text-xs font-medium text-gray-500 sm:text-sm">{description}</p>
        </Heading3>
        <Button
          variant="link"
          size={"icon"}
          className="self-end text-xs font-medium sm:text-sm"
          onClick={() => router.push(link)}
        >
          {linkText}
          <Icons.RightChevron size={12} />
        </Button>
      </Box>
      {isLoading ? (
        <Box className="flex w-full items-center gap-4">{skeletonSlides}</Box>
      ) : (
        <Carousel
          className="w-full"
          slides={productSlides}
          spaceBetween={16}
          slidesPerView={isMobile ? 2 : 3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        />
      )}
    </Box>
  );
}
