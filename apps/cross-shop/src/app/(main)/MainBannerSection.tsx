"use client";
import { useResponsive } from "@/hooks/useResponsive";
import { Button, Container } from "@common/design";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function MainBannerSection() {
  const { isMax640 } = useResponsive();
  const isMobile = isMax640();
  const router = useRouter();
  return (
    <div className="w-full bg-[#7699f4]">
      <Container className="relative flex max-h-[400px] items-center justify-center overflow-hidden">
        <Image
          src="https://s3cross-media.s3.amazonaws.com/shop_media/20250110_031255.jpg"
          alt="main banner"
          width={1200}
          height={300}
          className="w-full"
        />
        <Button
          onClick={() => router.push("/shop")}
          variant={"outline"}
          size={isMobile ? "md" : "lg"}
          className="absolute bottom-4 right-8 h-10 text-sm sm:text-base md:right-10 md:h-12 md:text-lg lg:right-14"
        >
          {"Go Shopping ->"}
        </Button>
      </Container>
    </div>
  );
}
