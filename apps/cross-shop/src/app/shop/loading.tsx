import MainContainer from "@/components/layout/MainContainer";
import ProductList from "@/components/shop/ProductList";
import Heading3 from "@/components/ui/Heading3";
import { Box } from "@common/design";
import React from "react";

export default function ShopPageLoading() {
  return (
    <MainContainer>
      <Box className="flex justify-between gap-4">
        <Heading3 title="All Products">All Products</Heading3>
      </Box>
      <ProductList isLoading />
    </MainContainer>
  );
}
