import React from "react";
import CartProductList from "@/components/cart/CartProductList";
import GoBackToShopButton from "@/components/cart/GoBackToShopButton";
import TotalPriceAndOrder from "@/components/cart/TotalPriceAndOrder";
import MainContainer from "@/components/layout/MainContainer";
import Heading3 from "@/components/ui/Heading3";
import { Box } from "@common/design";

export const dynamic = "force-dynamic";
export default function CartPage() {
  return (
    <MainContainer className="relative items-center pt-12 sm:pt-20">
      <GoBackToShopButton />
      <Heading3 title="Shopping Cart">Shopping Cart</Heading3>
      <Box className="flex w-full grow flex-col justify-between gap-10 sm:gap-20">
        <CartProductList />
        <TotalPriceAndOrder />
      </Box>
    </MainContainer>
  );
}
