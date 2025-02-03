import { useCartStore } from "@/store/useCart";
import { CartItem } from "@/types/cart";
import { Box, Button, Icons, Input } from "@common/design";
import React from "react";
import RemoveCartItemButton from "./RemoveCartItemButton";

type UpdateCartItemQuantityButtonProps = {
  cartItem: CartItem;
};

export default function UpdateCartItemQuantityButton({
  cartItem,
}: UpdateCartItemQuantityButtonProps) {
  const { updateQuantity, removeFromCart } = useCartStore();

  const handleQuantityChange = (quantity: number) => {
    updateQuantity(cartItem.id, quantity);
  };

  return (
    <Box className="flex flex-row items-center gap-0.5">
      {/* 수량이 1일 때는 삭제 버튼 표시, 아닐 때는 감소 버튼 */}
      {cartItem.quantity <= 1 ? (
        <RemoveCartItemButton
          cartItem={cartItem}
          trigger={<Icons.Minus size={32} className="fill-gray-500" />}
        />
      ) : (
        <Button
          size="icon"
          variant="icon"
          onClick={() => handleQuantityChange(cartItem.quantity - 1)}
        >
          <Icons.Minus size={32} className="fill-gray-500" />
        </Button>
      )}

      {/* 숫자 입력 필드 (0으로 시작하는 숫자 변환, 1 이하일 때 삭제 처리) */}
      <Input
        type="number"
        value={String(cartItem.quantity).replace(/^0+/, "")}
        className="hide-spinner h-9 w-16 p-2 text-center"
        onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
        onBlur={() => cartItem.quantity < 1 && removeFromCart(cartItem.id)}
        onFocus={(e) => e.target.select()}
      />

      {/* 수량 증가 버튼 */}
      <Button
        size="icon"
        variant="icon"
        onClick={() => handleQuantityChange(cartItem.quantity + 1)}
      >
        <Icons.Plus size={32} className="fill-gray-500" />
      </Button>
    </Box>
  );
}
