import { useCartStore } from "@/store/useCart";
import { CartItem } from "@/types/cart";
import { Icons, Modal, ModalTrigger } from "@common/design";
import React from "react";

type RemoveCartItemButtonProps = {
  cartItem: CartItem;
  trigger?: React.ReactNode;
  className?: string;
};

export default function RemoveCartItemButton({
  cartItem,
  trigger = <Icons.Trash size={24} className="fill-gray-500" />,
  className,
}: RemoveCartItemButtonProps) {
  const { removeFromCart } = useCartStore();
  const handleClick = () => {
    removeFromCart(cartItem.id);
  };

  return (
    <Modal
      trigger={<ModalTrigger className={className}>{trigger}</ModalTrigger>}
      title={"상품 삭제"}
      description={"상품을 장바구니에서 삭제하시겠습니까?"}
      confirmText={"삭제하기"}
      cancelText={"그대로 두기"}
      onConfirm={handleClick}
    />
  );
}
