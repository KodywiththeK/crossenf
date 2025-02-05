"use client";
import React from "react";
import { Box, Button, Container, Icons, cn } from "@common/design";
import Image from "next/image";
import Link from "next/link";
import { useResponsive } from "@/hooks/useResponsive";
import { useCartStore } from "@/store/useCart";
import { route } from "@/constant/route";

export default function Header() {
  const { isMax767 } = useResponsive();
  const isMobile = isMax767();
  const { cart } = useCartStore();
  return (
    <header className="bg-primary fixed top-0 z-40 h-16 w-full sm:h-20">
      <Container className="flex h-full w-full items-center justify-center gap-1 py-4 text-xl sm:justify-between sm:gap-4 sm:py-5">
        <Link href={route.home.path}>
          <Image
            src="https://s3cross-static-design.s3.ap-northeast-2.amazonaws.com/App_resource/logo/logo_crossshop_white_ph.svg"
            alt="Logo"
            width={178}
            height={20}
            className="h-auto w-44 shrink-0 object-cover"
          />
        </Link>
        <Box className="flex items-center gap-2 lg:gap-3">
          <Link href={route.shop.path} className="hidden sm:block">
            <Button
              className={cn("ml-auto flex h-10 w-28 items-center gap-1")}
              variant={"outline"}
              size={isMobile ? "sm" : "md"}
            >
              <Icons.Shop size={20} />
              {route.shop.title}
            </Button>
          </Link>
          <Link href={route.cart.path} className="hidden sm:block">
            <Button
              className={cn("ml-auto flex h-10 w-16 items-center gap-1")}
              variant={"outline"}
              size={isMobile ? "sm" : "md"}
            >
              <Icons.CartFill size={20} />
              {cart.length && <span className="text-sm">{cart.length}</span>}
            </Button>
          </Link>
        </Box>
      </Container>
    </header>
  );
}
