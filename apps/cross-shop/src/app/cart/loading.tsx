"use client";
import CartProductList from "@/components/cart/CartProductList";
import TotalPriceAndOrder from "@/components/cart/TotalPriceAndOrder";
import MainContainer from "@/components/layout/MainContainer";
import Heading3 from "@/components/ui/Heading3";
import { Box } from "@common/design";
import React from "react";

export default function CartPageLoading() {
  return (
    <MainContainer className="relative items-center pt-12 sm:pt-20">
      <Heading3 title="Shopping Cart">Shopping Cart</Heading3>
      <Box className="flex w-full grow flex-col justify-between gap-10 sm:gap-20">
        <CartProductList isLoading />
        <TotalPriceAndOrder />
      </Box>
    </MainContainer>
  );
}
