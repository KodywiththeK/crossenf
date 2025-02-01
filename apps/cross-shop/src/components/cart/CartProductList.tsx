"use client";
import { useCartStore } from "@/store/useCart";
import React from "react";
import CartProductCard from "@/components/templates/CartProductCard";

export default function CartProductList() {
  const { cart } = useCartStore();
  return (
    <ul className="flex w-full flex-col gap-2">
      {cart.map((item) => (
        <li key={item.id}>
          <CartProductCard cartItem={item} />
        </li>
      ))}
    </ul>
  );
}
