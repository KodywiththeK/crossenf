"use client";
import React from "react";
import { Box, Button, Container, Input, Icons } from "@common/design";
import Image from "next/image";
import Link from "next/link";
import { useResponsive } from "@/hooks/useResponsive";
import { useCartStore } from "@/store/useCart";

export default function Header() {
  const { isMax767 } = useResponsive();
  const isMobile = isMax767();
  const { cart } = useCartStore();
  return (
    <header className="sticky top-0 w-full bg-primary z-40">
      <Container className="sm:py-5 py-4 text-xl w-full flex sm:flex-row flex-col items-center justify-center sm:justify-between sm:gap-6 gap-4">
        <Link href={"/"}>
          <Image
            src="https://s3cross-static-design.s3.ap-northeast-2.amazonaws.com/App_resource/logo/logo_crossshop_white_ph.svg"
            alt="Logo"
            width={178}
            height={20}
            className="shrink-0"
          />
        </Link>
        <Box className="flex items-center gap-4 w-full sm:w-auto">
          <Input
            placeholder="What kind of products are you looking for?"
            className="w-full sm:w-80 h-9 md:h-10"
          />
          <Link href={"/cart"} className="hidden sm:block">
            <Button
              className="ml-auto flex items-center gap-1"
              variant={"outline"}
              size={isMobile ? "sm" : "md"}
            >
              <Icons.CartFill className="fill-foreground" />
              {cart.length && (
                <span className="text-sm">{cart.reduce((a, b) => a + b.quantity, 0)}</span>
              )}
            </Button>
          </Link>
        </Box>
      </Container>
    </header>
  );
}
