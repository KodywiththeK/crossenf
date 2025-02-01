import { Box } from "@common/design";
import Image from "next/image";
import React from "react";
import PriceTag from "../ui/PriceTag";
import StarRating from "../ui/StarRating";
import { Product } from "@/types/products";
import CartButton from "../ui/CartButton";
import { productStatus } from "@/constant/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { SOLD_OUT } = productStatus;
  const isSoldOut = product.status === SOLD_OUT.value;

  return (
    <Box className="border rounded-lg overflow-hidden h-full hover:shadow-md transition-all">
      <Box className="relative w-full">
        <Image
          src={product.thumbnail_img_url}
          alt={product.name}
          width={400}
          height={400}
          className="aspect-square object-cover"
        />
        {isSoldOut && (
          <Box className="absolute inset-0 bg-black/60 items-center justify-center text-white flex font-semibold text-xl">
            {SOLD_OUT.text}
          </Box>
        )}
      </Box>
      <Box className="flex flex-col md:gap-2 gap-1 p-2 border-t border-t-border">
        <CartButton product={product} />
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
