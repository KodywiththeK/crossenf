import { Box } from "@common/design";
import React from "react";

type PriceTagProps = {
  price: number;
  discountPrice: number;
  discountRate: number;
  quantity?: number;
};

export default function PriceTag({
  price,
  discountPrice,
  discountRate,
  quantity = 1,
}: PriceTagProps) {
  const isOnSale = discountRate > 0;

  return (
    <Box className="flex items-center gap-0.5 text-sm md:gap-1">
      {isOnSale && (
        <Box className="flex items-center gap-1">
          <span className="bg-destructive rounded-md px-2 py-1 text-xs text-white">
            {discountRate}%
          </span>
          <Box className="xs:flex-row xs:gap-1 flex flex-col gap-0">
            <span className="text-muted line-through">₩{(price * quantity).toLocaleString()}</span>
            <span className="text-destructive font-semibold">
              ₩{(discountPrice * quantity).toLocaleString()}
            </span>
          </Box>
        </Box>
      )}
      {!isOnSale && <span className="font-medium">₩{(price * quantity).toLocaleString()}</span>}
    </Box>
  );
}
