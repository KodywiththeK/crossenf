import { getProducts } from "@/service/products";
import { Container } from "@common/design";
import MainBannerSection from "./MainBannerSection";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <MainBannerSection />
      <Container className="flex flex-col min-h-screen py-10 gap-10">
        <ul className="flex flex-col gap-2">
          {products.map((product, idx) => (
            <li key={product.id}>{idx + product.name}</li>
          ))}
        </ul>
      </Container>
    </>
  );
}
