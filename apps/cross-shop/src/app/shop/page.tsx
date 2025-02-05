import React from "react";
import MainContainer from "@/components/layout/MainContainer";
import ProductList from "@/components/shop/ProductList";
import Heading3 from "@/components/ui/Heading3";
import { Box } from "@common/design";
import ProductSortDropdown from "@/components/ui/ProductSortDropdown";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata("shop");
export default function ShopPage() {
  return (
    <MainContainer>
      <Box className="flex justify-between gap-4">
        <Heading3 title="All Products">All Products</Heading3>
        <ProductSortDropdown />
      </Box>
      <ProductList />
    </MainContainer>
  );
}
