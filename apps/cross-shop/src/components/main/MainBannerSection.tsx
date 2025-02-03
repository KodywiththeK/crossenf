"use client";
import { route } from "@/constant/route";
import { EventBanner } from "@/types/eventBanner";
import {
  Box,
  Button,
  Carousel,
  Container,
  MainBannerCarouselPaginationBullets,
} from "@common/design";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  eventBanners: EventBanner[];
};

export default function MainBannerSection({ eventBanners }: Props) {
  const router = useRouter();

  const bannerSlides = eventBanners.map((eventBanner) => {
    const { id, background, image } = eventBanner;
    return (
      <Box key={id} style={{ backgroundColor: background }} className="relative w-full">
        <Link className="block w-full" href={route.shop.path}>
          <Container className="relative flex max-h-[400px] items-center justify-center overflow-hidden">
            <Image
              src={image}
              alt={`main banner ${id}`}
              width={1200}
              height={300}
              className="w-full"
            />
            <Button
              onClick={() => router.push(route.shop.path)}
              variant={"outline"}
              size={"lg"}
              className="absolute bottom-8 z-10 mx-auto h-10 text-sm font-medium sm:bottom-10 sm:text-base md:h-14 md:text-lg lg:bottom-14 lg:text-xl"
            >
              {"Go Shopping ->"}
            </Button>
          </Container>
          <Box className="absolute inset-0 bg-gray-900 opacity-50" />
        </Link>
      </Box>
    );
  });

  return (
    <Carousel
      slides={bannerSlides}
      slidesPerView={1}
      effect="fade"
      loop={true}
      className="w-full"
      pagination={MainBannerCarouselPaginationBullets}
    />
  );
}
