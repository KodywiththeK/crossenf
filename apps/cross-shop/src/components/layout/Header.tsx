"use client";
import React from "react";
import { Box, Button, Container, Input, Icons, cn } from "@common/design";
import Image from "next/image";
import Link from "next/link";
import { useResponsive } from "@/hooks/useResponsive";
import { useCartStore } from "@/store/useCart";
import { route } from "@/constant/route";

export default function Header() {
  const { isMax767 } = useResponsive();
  const isMobile = isMax767();
  const { cart } = useCartStore();
  const isCartFull = cart.length >= 3;
  return (
    <header className="bg-primary fixed top-0 z-40 h-[104px] w-full sm:h-20">
      <Container className="flex w-full flex-col items-center justify-center gap-4 py-4 text-xl sm:flex-row sm:justify-between sm:gap-6 sm:py-5">
        <Link href={route.home.path}>
          <Image
            src="https://s3cross-static-design.s3.ap-northeast-2.amazonaws.com/App_resource/logo/logo_crossshop_white_ph.svg"
            alt="Logo"
            width={178}
            height={20}
            className="shrink-0"
          />
        </Link>
        <Box className="flex w-full items-center gap-4 sm:w-auto">
          <Input
            placeholder="What kind of products are you looking for?"
            className="h-9 w-full sm:w-80 md:h-10"
          />
          <Link href={route.cart.path} className="hidden sm:block">
            <Button
              className={cn(
                "ml-auto flex items-center gap-1",
                isCartFull && "bg-muted border-none",
              )}
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
