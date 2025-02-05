"use client";
import { useCartStore } from "@/store/useCart";
import { Box } from "@common/design";
import CleanCartButton from "../ui/CleanCartButton";
import PaymentCheckButton from "../ui/PaymentCheckButton";

export default function TotalPriceAndOrder() {
  const { cart } = useCartStore();
  const readyProducts = cart.filter((item) => item.isReady);
  const totalPrice = readyProducts.reduce(
    (acc, item) => acc + item.discount_price * item.quantity,
    0,
  );

  return (
    <Box className="w-full space-y-4 rounded-lg border bg-white p-4">
      <Box className="flex items-center justify-center gap-2">
        <span className="text-lg font-semibold">Total Price:</span>
        <span className="text-xl font-bold">{Math.floor(totalPrice).toLocaleString()} 원</span>
      </Box>
      <Box className="flex flex-col gap-2 sm:flex-row">
        <CleanCartButton />
        <PaymentCheckButton />
      </Box>
    </Box>
  );
}
