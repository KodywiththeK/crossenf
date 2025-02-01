import CartProductList from "@/components/cart/CartProductList";
import { Box, buttonVariants, cn, Container, Icons } from "@common/design";
import Link from "next/link";
import React from "react";

export default function CartPage() {
  return (
    <Container className="relative flex grow flex-col gap-10 py-4 sm:flex-row sm:gap-4 sm:py-6 md:py-10">
      <Link
        href="/shop"
        className={cn(buttonVariants({ variant: "link" }), "absolute left-0 top-2 gap-1 sm:top-4")}
      >
        <Icons.LeftChevron size={16} />
        <span>Go back to SHOP</span>
      </Link>
      <Box className="flex basis-2/3 flex-col items-center gap-4 py-6 sm:gap-6 sm:py-8">
        <h3 title="Shopping Cart" className="text-lg font-semibold sm:text-xl">
          Shopping Cart
        </h3>
        <CartProductList />
      </Box>
      <Box className="flex basis-1/3 flex-col items-center gap-4 py-6 sm:gap-6 sm:py-8">
        <p className="text-lg font-semibold sm:text-xl">Ordering Sheet</p>
      </Box>
    </Container>
  );
}
