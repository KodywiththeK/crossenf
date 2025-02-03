import React from "react";
import MainContainer from "@/components/layout/MainContainer";
import ProductList from "@/components/shop/ProductList";
import Heading3 from "@/components/ui/Heading3";

export default function ShopPage() {
  return (
    <MainContainer>
      <Heading3 title="All Products">All Products</Heading3>
      <ProductList />
    </MainContainer>
  );
}
