import { getProducts } from "@/service/products";
import MainBannerSection from "../../components/main/MainBannerSection";
import { getEventBanners } from "@/service/eventBanner";
import MainContainer from "@/components/layout/MainContainer";
import OnSaleSection from "@/components/main/OnSaleSection";
import TopRatingSection from "@/components/main/TopRatingSection";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [products, eventBanners] = await Promise.all([getProducts(), getEventBanners()]);
  return (
    <section>
      <MainBannerSection eventBanners={eventBanners} />
      <MainContainer className="gap-16 sm:gap-20">
        <OnSaleSection products={products} />
        <TopRatingSection products={products} />
      </MainContainer>
    </section>
  );
}
