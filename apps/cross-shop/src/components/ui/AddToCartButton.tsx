"use client";
import {
  Box,
  Button,
  buttonVariants,
  cn,
  Modal,
  ModalTrigger,
  ToastAction,
  useToast,
} from "@common/design";
import { Product } from "@/types/products";
import { useCartStore } from "@/store/useCart";
import { CartItem } from "@/types/cart";
import { productStatus } from "@/constant/product";
import { useRouter } from "next/navigation";
import { route } from "@/constant/route";
import UpdateCartItemQuantityButton from "./UpdateCartItemQuantityButton";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { cart, addToCart } = useCartStore();
  const cartItem = cart.find((item) => item.id === product.id);
  const isSoldOut = product.status === productStatus.SOLD_OUT.value;
  const isCartFull = cart.length >= 3;

  const handleAddToCart = () => {
    if (isCartFull && !cartItem) return;

    const cartProduct: CartItem = {
      ...product,
      quantity: 1,
      isReady: false,
    };
    addToCart(cartProduct);
    toast({
      title: "장바구니에 담았습니다.",
      description: "장바구니를 확인해보세요!",
      action: (
        <ToastAction altText="Go to Cart" onClick={() => router.push(route.cart.path)}>
          장바구니로 이동
        </ToastAction>
      ),
    });
  };

  return (
    <Box>
      {cartItem ? (
        <Box className="flex w-full justify-center gap-2">
          <UpdateCartItemQuantityButton cartItem={cartItem} />
        </Box>
      ) : isCartFull ? (
        <Modal
          trigger={
            <ModalTrigger
              className={cn(buttonVariants({ size: "sm" }), "w-full")}
              disabled={isSoldOut}
            >
              Add to Cart
            </ModalTrigger>
          }
          title="🛒 장바구니가 가득 찼어요!"
          description={
            "상품은 최대 세개까지 담을 수 있어요.\n장바구니에 담긴 물건을 삭제 혹은 주문해주세요."
          }
          confirmText="장바구니로 이동하기"
          cancelText="그냥 둘러보기"
          onConfirm={() => router.push(route.cart.path)}
        />
      ) : isSoldOut ? (
        <Modal
          trigger={
            <ModalTrigger
              className={cn(buttonVariants({ size: "sm", variant: "secondary" }), "w-full")}
            >
              Get Restock Notification
            </ModalTrigger>
          }
          title="🔔 재입고 알림받기"
          description={"상품이 재입고 되면 알려드릴게요!\n알림을 받으시겠어요?"}
          confirmText="받을래요"
          cancelText="괜찮아요"
          onConfirm={() =>
            toast({
              title: "알림신청 완료!",
              description: `다음엔 놓치시지 않도록, "${product.name}"이 입고되면 빠르게 알려드릴게요!`,
            })
          }
        />
      ) : (
        <Button className="w-full" size={"sm"} onClick={handleAddToCart}>
          Add to Cart
        </Button>
      )}
    </Box>
  );
}
