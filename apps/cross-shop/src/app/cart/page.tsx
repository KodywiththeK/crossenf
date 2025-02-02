import CartProductList from "@/components/cart/CartProductList";
import TotalPriceAndOrder from "@/components/cart/TotalPriceAndOrder";
import { route } from "@/constant/route";
import { Box, buttonVariants, cn, Container, Icons } from "@common/design";
import Link from "next/link";
import React from "react";

export default function CartPage() {
  return (
    <Container className="relative flex min-h-[80vh] grow flex-col gap-10 pt-4 sm:gap-4 sm:pt-6 md:pt-10">
      <Link
        href={route.shop.path}
        className={cn(buttonVariants({ variant: "link" }), "absolute left-0 top-2 gap-1 sm:top-4")}
      >
        <Icons.LeftChevron size={16} />
        <span>Go back to SHOP</span>
      </Link>
      <Box className="flex w-full grow flex-col items-center gap-6 pt-6 sm:gap-10 sm:pt-8">
        <h3 title="Shopping Cart" className="text-lg font-semibold sm:text-xl">
          Shopping Cart
        </h3>
        <Box className="flex w-full grow flex-col justify-between gap-4">
          <CartProductList />
          <TotalPriceAndOrder />
        </Box>
      </Box>
    </Container>
  );
}
