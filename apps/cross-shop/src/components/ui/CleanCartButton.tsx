import { useCartStore } from "@/store/useCart";
import { buttonVariants, cn, Modal, ModalTrigger } from "@common/design";
import React from "react";

export default function CleanCartButton() {
  const { cart, clearCart } = useCartStore();
  return (
    <Modal
      trigger={
        <ModalTrigger
          className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          disabled={cart.length === 0}
        >
          장바구니 비우기
        </ModalTrigger>
      }
      title="장바구니 비우기"
      description="장바구니의 모든 상품이 삭제됩니다. 정말로 비우시겠습니까?"
      confirmText="비우기"
      cancelText="돌아가기"
      onConfirm={clearCart}
    />
  );
}
