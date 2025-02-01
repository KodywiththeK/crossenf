import ProductList from "@/components/shop/ProductList";
import { Box, Container } from "@common/design";
import React from "react";

export default function ShopPage() {
  return (
    <Container className="flex flex-col gap-6 py-4 sm:gap-10 sm:py-6 md:py-10">
      <Box className="flex flex-col gap-4 sm:gap-6">
        <h3 title="All Products" className="text-lg font-semibold sm:text-xl">
          All Products
        </h3>
        <ProductList />
      </Box>
    </Container>
  );
}
