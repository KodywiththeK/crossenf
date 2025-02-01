import { Box, Button } from "@common/design";
import { Product } from "@/types/products";
import { useCartStore } from "@/store/useCart";
import { CartItem } from "@/types/cart";

type CartButtonProps = {
  product: Product;
};

export default function CartButton({ product }: CartButtonProps) {
  const { cart, addToCart, removeFromCart } = useCartStore();
  const cartItem = cart.find((item) => item.id === product.id);
  const isSoldOut = product.status === "SOLD_OUT";

  const handleAddToCart = () => {
    const cartProduct: CartItem = {
      ...product,
      quantity: 1,
    };
    addToCart(cartProduct);
  };

  return (
    <Box>
      {cartItem ? (
        <Box className="flex gap-2">
          <Button
            className="flex-1"
            variant={"secondary"}
            size={"sm"}
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </Button>
          <Button className="flex-1" size={"sm"} onClick={handleAddToCart}>
            Add More
          </Button>
        </Box>
      ) : (
        <Button className="w-full" size={"sm"} onClick={handleAddToCart} disabled={isSoldOut}>
          Add to Cart
        </Button>
      )}
    </Box>
  );
}
