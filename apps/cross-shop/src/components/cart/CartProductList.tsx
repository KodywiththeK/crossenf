"use client";
import { useCartStore } from "@/store/useCart";
import React from "react";
import CartProductCard, { CartProductCardSkeleton } from "@/components/templates/CartProductCard";
import NoProductsInCart from "./NoProductsInCart";
import { Box, Checkbox, cn, Label } from "@common/design";
import { useIsClient } from "@/hooks/useIsClient";

type Props = {
  isLoading?: boolean;
};

export default function CartProductList({ isLoading }: Props) {
  const isClient = useIsClient();
  const { cart, updateIsReady } = useCartStore();

  if (isLoading || !isClient) {
    return (
      <ul className="flex w-full flex-col gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <CartProductCardSkeleton key={index} />
        ))}
      </ul>
    );
  }

  const isCartEmpty = cart.length === 0;
  if (isCartEmpty) return <NoProductsInCart />;

  return (
    <Box className="flex w-full flex-col gap-4">
      <Box className="flex items-center gap-2">
        <Checkbox
          id="select-all"
          className="flex-shrink-0"
          checked={cart.length > 0 && cart.every((item) => item.isReady)}
          onCheckedChange={(checked: boolean) =>
            cart.forEach((item) => updateIsReady(item.id, checked))
          }
        />
        <Label htmlFor="select-all" className={cn("cursor-pointer text-sm sm:text-base")}>
          전체 선택하기
        </Label>
      </Box>

      <ul className="flex w-full flex-col gap-4">
        {cart.map((item) => (
          <li key={item.id}>
            <CartProductCard cartItem={item} />
          </li>
        ))}
      </ul>
    </Box>
  );
}
