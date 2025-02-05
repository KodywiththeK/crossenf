"use client";
import { useCartStore } from "@/store/useCart";
import React from "react";
import CartProductCard from "@/components/templates/CartProductCard";
import NoProductsInCart from "./NoProductsInCart";
import { Box, Checkbox, cn, Label } from "@common/design";

type Props = {
  isLoading?: boolean;
};
export default function CartProductList({ isLoading }: Props) {
  if (isLoading)
    return (
      <ul className="flex w-full flex-col gap-2">
        {new Array(3).fill(null).map((_, index) => (
          <CartProductCard key={index} isLoading={isLoading} />
        ))}
      </ul>
    );

  const { cart, updateIsReady } = useCartStore();
  return (
    <Box className="flex w-full flex-col gap-4">
      <Box className="flex items-center gap-2">
        <Checkbox
          id="select-all"
          className="flex-shrink-0"
          checked={cart.every((item) => item.isReady)}
          onCheckedChange={(checked: boolean) =>
            cart.forEach((item) => updateIsReady(item.id, checked))
          }
        />
        <Label htmlFor={"select-all"} className={cn("cursor-pointer text-sm sm:text-base")}>
          전체 선택하기
        </Label>
      </Box>
      <ul className="flex w-full flex-col gap-2">
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id}>
              <CartProductCard cartItem={item} isLoading={window === undefined} />
            </li>
          ))
        ) : (
          <NoProductsInCart />
        )}
      </ul>
    </Box>
  );
}
