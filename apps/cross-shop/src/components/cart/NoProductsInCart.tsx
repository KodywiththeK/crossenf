import { route } from "@/constant/route";
import { Box, Button } from "@common/design";
import Link from "next/link";
import React from "react";

export default function NoProductsInCart() {
  return (
    <Box className="rounded-lg bg-gray-100 py-10 text-center text-base">
      <p>장바구니에 상품이 없습니다.</p>
      <Link href={route.shop.path}>
        <Button variant={"link"}>상품 담으러 가기</Button>
      </Link>
    </Box>
  );
}
