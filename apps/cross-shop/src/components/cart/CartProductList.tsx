"use client";
import { useCartStore } from "@/store/useCart";
import React from "react";
import CartProductCard from "@/components/templates/CartProductCard";
import { Box, Button } from "@common/design";
import Link from "next/link";

export default function CartProductList() {
  const { cart } = useCartStore();
  return (
    <ul className="flex w-full flex-col gap-2">
      {cart.length ? (
        cart.map((item) => (
          <li key={item.id}>
            <CartProductCard cartItem={item} />
          </li>
        ))
      ) : (
        <Box className="rounded-lg bg-gray-100 py-10 text-center text-base">
          <p>장바구니에 상품이 없습니다.</p>
          <Link href="/shop">
            <Button variant={"link"}>상품 담으러 가기</Button>
          </Link>
        </Box>
      )}
    </ul>
  );
}
