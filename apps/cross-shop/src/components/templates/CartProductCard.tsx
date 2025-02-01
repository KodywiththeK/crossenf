import { CartItem } from "@/types/cart";
import { Box } from "@common/design";
import Image from "next/image";
import React from "react";
import PriceTag from "../ui/PriceTag";
import UpdateCartItemQuantityButton from "../ui/UpdateCartItemQuantityButton";
import RemoveCartItemButton from "../ui/RemoveCartItemButton";

type CartProductCardProps = {
  cartItem: CartItem;
};
export default function CartProductCard({ cartItem }: CartProductCardProps) {
  const { thumbnail_img_url, name, discount_price, discount_rate, price } = cartItem;
  return (
    <Box className="flex w-full flex-row gap-4 rounded-lg bg-gray-100 p-2 sm:p-4">
      <Image width={100} height={100} src={thumbnail_img_url} alt={name} className="rounded-lg" />
      <Box className="flex w-full flex-col gap-2">
        <h3 className="text-sm font-semibold sm:text-base">{name}</h3>
        <PriceTag price={price} discountPrice={discount_price} discountRate={discount_rate} />
        <Box className="flex w-full items-center justify-between">
          <UpdateCartItemQuantityButton cartItem={cartItem} />
          <RemoveCartItemButton cartItem={cartItem} />
        </Box>
      </Box>
    </Box>
  );
}
