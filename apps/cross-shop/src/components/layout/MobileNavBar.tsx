"use client";
import { route } from "@/constant/route";
import { useCartStore } from "@/store/useCart";
import { Badge, Box } from "@common/design";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileNavBar() {
  const pathname = usePathname();
  const { cart } = useCartStore();
  return (
    <nav className="border-t-border fixed bottom-0 z-40 flex w-full items-center justify-around gap-1 border-t bg-gray-100 pb-4 pt-3 sm:hidden">
      {Object.values(route).map((item) => (
        <Link
          key={item.value}
          className="flex flex-col items-center px-2 text-sm font-semibold"
          href={item.path}
        >
          <Box className="relative">
            {item.icon({
              size: 24,
              className: pathname === item.path ? "fill-foreground" : "fill-muted",
            })}
            {item.value === route.cart.value && cart.length > 0 && (
              <Badge variant={"destructive"} className="absolute -right-4 -top-1 px-1.5 py-0.5">
                {cart.length}
              </Badge>
            )}
          </Box>
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
