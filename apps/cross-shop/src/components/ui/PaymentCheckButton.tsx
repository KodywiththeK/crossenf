import { useCartStore } from "@/store/useCart";
import { buttonVariants, cn, Modal, ModalTrigger, ToastAction, useToast } from "@common/design";
import { useRouter } from "next/navigation";
import React from "react";

export default function PaymentCheckButton() {
  const router = useRouter();
  const { cart, removeFromCart } = useCartStore();
  const { toast } = useToast();

  const readyProducts = cart.filter((item) => item.isReady);
  const totalPrice = readyProducts.reduce(
    (acc, item) => acc + item.discount_price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    if (readyProducts.length === 0) return;
    readyProducts.forEach((item) => removeFromCart(item.id));
    toast({
      title: "결제가 완료되었습니다.",
      description: "다른 상품들도 더 둘러보세요!",
      action: (
        <ToastAction altText="Go to Shop" onClick={() => router.push("/cart")}>
          보러가기
        </ToastAction>
      ),
    });
  };

  return (
    <Modal
      trigger={
        <ModalTrigger
          disabled={readyProducts.length === 0}
          className={cn(buttonVariants(), "w-full")}
        >
          결제하기
        </ModalTrigger>
      }
      title="결제"
      description={`총 결제금액은 ${totalPrice.toLocaleString()} 원입니다.\n결제하시겠습니까?`}
      confirmText="결제하기"
      cancelText="돌아가기"
      onConfirm={handleCheckout}
    />
  );
}
