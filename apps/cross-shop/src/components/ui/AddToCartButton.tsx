import { Box, Button, buttonVariants, cn, Modal, ModalTrigger } from "@common/design";
import { Product } from "@/types/products";
import { useCartStore } from "@/store/useCart";
import { CartItem } from "@/types/cart";
import { productStatus } from "@/constant/product";
import RemoveCartItemButton from "./RemoveCartItemButton";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { cart, addToCart } = useCartStore();
  const cartItem = cart.find((item) => item.id === product.id);
  const isSoldOut = product.status === productStatus.SOLD_OUT.value;
  const isCartFull = cart.length >= 3;

  const handleAddToCart = () => {
    if (isCartFull && !cartItem) return;

    const cartProduct: CartItem = {
      ...product,
      quantity: 1,
    };
    addToCart(cartProduct);
  };

  return (
    <Box>
      {cartItem ? (
        <Box className="flex w-full gap-2">
          <RemoveCartItemButton
            cartItem={cartItem}
            className="w-full"
            trigger={
              <Button variant={"secondary"} size={"sm"} className="w-full">
                Remove
              </Button>
            }
          />
          <Button className="w-full" size={"sm"} onClick={handleAddToCart} disabled={isSoldOut}>
            {`Add More ( ${cartItem.quantity} )`}
          </Button>
        </Box>
      ) : isCartFull ? (
        <Modal
          trigger={
            <ModalTrigger className={cn(buttonVariants({ size: "sm" }), "w-full")}>
              Add to Cart
            </ModalTrigger>
          }
          title="카트가 가득 찼어요!"
          description={
            "상품은 최대 세개까지 담을 수 있어요.\n카트에 담긴 물건을 먼저 삭제 혹은 주문해주세요."
          }
          confirmText="장바구니로 이동하기"
          cancelText="계속 둘러보기"
        />
      ) : (
        <Button className="w-full" size={"sm"} onClick={handleAddToCart} disabled={isSoldOut}>
          Add to Cart
        </Button>
      )}
    </Box>
  );
}
