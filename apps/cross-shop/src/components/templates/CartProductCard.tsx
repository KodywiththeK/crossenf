import { CartItem } from "@/types/cart";
import { Box, Checkbox, cn, Label } from "@common/design";
import Image from "next/image";
import React from "react";
import PriceTag from "../ui/PriceTag";
import UpdateCartItemQuantityButton from "../ui/UpdateCartItemQuantityButton";
import RemoveCartItemButton from "../ui/RemoveCartItemButton";
import { useCartStore } from "@/store/useCart";

type CartProductCardProps = {
  cartItem: CartItem;
};
export default function CartProductCard({ cartItem }: CartProductCardProps) {
  const { thumbnail_img_url, name, discount_price, discount_rate, price, id, isReady } = cartItem;
  const { updateIsReady } = useCartStore();
  return (
    <Box className="xs:flex-row flex w-full flex-col items-center gap-4 rounded-lg bg-gray-100 p-2 sm:items-start sm:p-4">
      <Box className="flex gap-2">
        <Checkbox
          id={String(id)}
          className="flex-shrink-0"
          checked={isReady}
          onCheckedChange={(isReady: boolean) => updateIsReady(id, isReady)}
        />
        <Label
          htmlFor={String(id)}
          className={cn(
            "cursor-pointer overflow-hidden rounded-lg border border-transparent",
            isReady && "border-primary",
          )}
        >
          <Image width={100} height={100} src={thumbnail_img_url} alt={name} />
        </Label>
      </Box>
      <Box className="xs:items-start flex w-full flex-col items-center gap-2">
        <h3 className="text-sm font-semibold sm:text-base">{name}</h3>
        <PriceTag price={price} discountPrice={discount_price} discountRate={discount_rate} />
        <Box className="xs:justify-between relative flex w-full items-center justify-center">
          <UpdateCartItemQuantityButton cartItem={cartItem} />
          <RemoveCartItemButton cartItem={cartItem} className="xs:relative absolute right-1" />
        </Box>
      </Box>
    </Box>
  );
}
