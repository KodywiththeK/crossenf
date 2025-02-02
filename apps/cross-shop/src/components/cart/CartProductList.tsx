"use client";
import { useCartStore } from "@/store/useCart";
import React from "react";
import CartProductCard from "@/components/templates/CartProductCard";
import NoProductsInCart from "./NoProductsInCart";

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
        <NoProductsInCart />
      )}
    </ul>
  );
}
