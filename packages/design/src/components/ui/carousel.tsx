"use client";
import { cn } from "../../lib";
import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AutoplayOptions, PaginationOptions, Swiper as SwiperClass } from "swiper/types";

export type CarouselProps = {
  slides: React.ReactNode[]; // 슬라이드에 들어갈 내용
  loop?: boolean; // 무한 루프 여부
  autoplay?: AutoplayOptions | boolean;
  spaceBetween?: number; // 슬라이드 간 간격
  slidesPerView?: number; // 한 번에 보여줄 슬라이드 수
  slidesPerGroup?: number; // 한 번에 넘어갈 슬라이드 수
  pagination?: boolean | PaginationOptions | undefined; // 페이지네이션 설정
  id?: string;
  className?: string; // Swiper 컨테이너 스타일
  slideClassName?: string; // 슬라이드 스타일
  effect?: "slide" | "fade" | "cube" | "coverflow" | "flip" | "creative" | "cards"; // 슬라이드 효과 default: 'slide'
  style?: React.CSSProperties; // Swiper 스타일
  onChange?: (swiper: SwiperClass) => void; // 슬라이드 변경 콜백
  currentIndex?: number; // 현재 슬라이드 인덱스
};

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  loop = true,
  autoplay = { delay: 3000 },
  spaceBetween = 0,
  slidesPerView = 1,
  slidesPerGroup,
  pagination = false,
  className = "",
  id,
  slideClassName = "",
  effect = "slide",
  style,
  onChange,
  currentIndex,
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  // 화면 리사이징 시 슬라이드를 첫 번째로 이동
  useEffect(() => {
    function handleResize() {
      if (swiperRef.current) {
        swiperRef.current.slideTo(0);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSlideChange = (swiper: SwiperClass) => {
    if (onChange) {
      onChange(swiper);
    }
  };

  useEffect(() => {
    if (swiperRef.current && typeof currentIndex === "number") {
      swiperRef.current.slideTo(currentIndex);
    }
  }, [currentIndex]);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      id={id}
      loop={loop}
      effect={effect}
      autoplay={autoplay}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup ? Math.floor(slidesPerGroup) : undefined}
      pagination={pagination}
      className={cn("relative", className)}
      style={style}
      onSlideChange={handleSlideChange}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} style={{ height: "auto" }} className={cn(slideClassName)}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export function setCarouselCustomPaginationBullets({
  defaultClass,
  activeClass,
  commonClass,
}: {
  defaultClass: string;
  activeClass: string;
  commonClass?: string;
}): PaginationOptions {
  const defaultBullet = "carousel-bullet";
  const activeBullet = "carousel-bullet-active";
  return {
    clickable: true,
    type: "custom",
    bulletActiveClass: activeBullet,
    bulletClass: defaultBullet,
    renderCustom: (_, current: number, total: number) => {
      const bullets = Array.from({ length: total })
        .map(
          (_, i) => `
        <span class="${defaultBullet} transition-all cursor-pointer ${commonClass} ${
          i + 1 === current ? `${activeBullet} ${activeClass}` : defaultClass
        }"></span>
        `,
        )
        .join("");
      return `<div class="flex items-center justify-center py-1 gap-2">${bullets}</div>`;
    },
  };
}

export const MainBannerCarouselPaginationBullets: PaginationOptions =
  setCarouselCustomPaginationBullets({
    commonClass: "h-2 md:h-3 w-4 lg:h-3 xl:w-5 rounded-[2px]",
    defaultClass: "bg-gray-300 opacity-50",
    activeClass: "bg-gray-100",
  });
