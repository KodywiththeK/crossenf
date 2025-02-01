import { getProducts } from "@/service/products";
import { Container } from "@common/design";
import MainBannerSection from "./MainBannerSection";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <MainBannerSection />
      <Container className="flex flex-col gap-6 py-4 sm:gap-10 sm:py-6 md:py-10">
        <ul className="flex flex-col gap-2">
          {products.map((product, idx) => (
            <li key={product.id}>{idx + product.name}</li>
          ))}
        </ul>
      </Container>
    </>
  );
}
