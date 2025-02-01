import { useCartStore } from "@/store/useCart";
import { CartItem } from "@/types/cart";
import { Box, Button, Icons, Input } from "@common/design";
import React from "react";

type UpdateCartItemQuantityButtonProps = {
  cartItem: CartItem;
};
export default function UpdateCartItemQuantityButton({
  cartItem,
}: UpdateCartItemQuantityButtonProps) {
  const { updateQuantity } = useCartStore();
  return (
    <Box className="flex flex-row items-center gap-0.5">
      <Button
        size={"icon"}
        variant={"icon"}
        onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
      >
        <Icons.Minus size={32} className="fill-gray-500" />
      </Button>
      <Input
        type="number"
        value={cartItem.quantity}
        className="hide-spinner h-9 w-16 p-2 text-center"
        onChange={(e) => updateQuantity(cartItem.id, Number(e.target.value))}
      />
      <Button
        size={"icon"}
        variant={"icon"}
        onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
      >
        <Icons.Plus size={32} className="fill-gray-500" />
      </Button>
    </Box>
  );
}
