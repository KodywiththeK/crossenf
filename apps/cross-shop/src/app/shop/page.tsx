import ProductList from "@/components/shop/ProductList";
import { Box, Container } from "@common/design";
import React from "react";

export default function ShopPage() {
  return (
    <Container className="flex flex-col sm:py-6 py-4 md:py-10 sm:gap-10 gap-6">
      <Box className="flex flex-col gap-4 sm:gap-6">
        <h3 className="font-semibold sm:text-xl text-lg">All Products</h3>
        <ProductList />
      </Box>
    </Container>
  );
}
