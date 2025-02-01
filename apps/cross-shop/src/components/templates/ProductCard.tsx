import { Box } from "@common/design";
import Image from "next/image";
import React from "react";
import PriceTag from "../ui/PriceTag";
import StarRating from "../ui/StarRating";
import { Product } from "@/types/products";
import AddToCartButton from "../ui/AddToCartButton";
import { productStatus } from "@/constant/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { SOLD_OUT } = productStatus;
  const isSoldOut = product.status === SOLD_OUT.value;

  return (
    <Box className="h-full overflow-hidden rounded-lg border transition-all hover:shadow-md">
      <Box className="relative w-full">
        <Image
          src={product.thumbnail_img_url}
          alt={product.name}
          width={400}
          height={400}
          className="aspect-square object-cover"
        />
        {isSoldOut && (
          <Box className="absolute inset-0 flex items-center justify-center bg-black/60 text-xl font-semibold text-white">
            {SOLD_OUT.text}
          </Box>
        )}
      </Box>
      <Box className="border-t-border flex flex-col gap-1 border-t p-2 md:gap-2">
        <AddToCartButton product={product} />
        <h3 className="text-sm md:text-base" title={product.name}>
          {product.name}
        </h3>
        <PriceTag
          price={product.price}
          discountPrice={product.discount_price}
          discountRate={product.discount_rate}
        />
        <StarRating rating={product.star_rate_avg} />
      </Box>
    </Box>
  );
}
