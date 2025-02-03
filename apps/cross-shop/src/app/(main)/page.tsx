import { getProducts } from "@/service/products";
import MainBannerSection from "../../components/main/MainBannerSection";
import { getEventBanners } from "@/service/eventBanner";
import MainContainer from "@/components/layout/MainContainer";
import HotDealSection from "@/components/main/HotDealSection";
import TopRatingSection from "@/components/main/TopRatingSection";

export default async function Home() {
  const [products, eventBanners] = await Promise.all([getProducts(), getEventBanners()]);
  return (
    <section>
      <MainBannerSection eventBanners={eventBanners} />
      <MainContainer>
        <HotDealSection products={products} />
        <TopRatingSection products={products} />
      </MainContainer>
    </section>
  );
}
