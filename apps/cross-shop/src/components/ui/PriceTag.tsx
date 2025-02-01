import { Box } from "@common/design";
import React from "react";

type PriceTagProps = {
  price: number;
  discountPrice: number;
  discountRate: number;
};

export default function PriceTag({ price, discountPrice, discountRate }: PriceTagProps) {
  const isOnSale = discountRate > 0;

  return (
    <Box className="flex items-center gap-0.5 text-sm md:gap-1">
      {isOnSale && (
        <Box className="flex items-center gap-1">
          <span className="bg-destructive rounded-md px-2 py-1 text-xs text-white">
            {discountRate}%
          </span>
          <span className="text-muted line-through">₩{price.toLocaleString()}</span>
          <span className="text-destructive font-semibold">₩{discountPrice.toLocaleString()}</span>
        </Box>
      )}
      {!isOnSale && <span className="font-medium">₩{price.toLocaleString()}</span>}
    </Box>
  );
}
