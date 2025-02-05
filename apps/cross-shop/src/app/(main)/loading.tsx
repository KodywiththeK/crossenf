import MainContainer from "@/components/layout/MainContainer";
import OnSaleSection from "@/components/main/OnSaleSection";
import MainBannerSection from "@/components/main/MainBannerSection";
import TopRatingSection from "@/components/main/TopRatingSection";
import React from "react";

export default function MainPageLoading() {
  return (
    <section>
      <MainBannerSection eventBanners={[]} isLoading />
      <MainContainer>
        <OnSaleSection products={[]} isLoading />
        <TopRatingSection products={[]} isLoading />
      </MainContainer>
    </section>
  );
}
