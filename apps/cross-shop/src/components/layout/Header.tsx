"use client";
import React from "react";
import { Box, Button, Container, Input } from "@common/design";
import Image from "next/image";
import CartFill from "../ui/icons/CartFill";
import Link from "next/link";
import { useResponsive } from "@/hooks/useResponsive";

export default function Header() {
  const { isMax767 } = useResponsive();
  const isMobile = isMax767();
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
            <Button className="ml-auto" variant={"outline"} size={isMobile ? "sm" : "md"}>
              <CartFill className="fill-foreground" />
            </Button>
          </Link>
        </Box>
      </Container>
    </header>
  );
}
