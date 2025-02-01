import { productSortingOptions } from "@/constant/product";
import { Product } from "@/types/products";
import { customFetch } from "@/utils/fetch/server/customFetch";

/**
 * 상품 데이터를 가져오는 함수
 * @returns 전체 상품 리스트
 */
export const getProducts = async (): Promise<Product[]> => {
  const allProducts = await customFetch<Product[]>("products.json");
  const defaultOption = Object.values(productSortingOptions).find((i) => i.isDefault);
  return defaultOption?.sort(allProducts) || allProducts;
};

/**
 * 페이지네이션을 지원하는 상품 데이터 가져오기
 * @param page - 가져올 페이지 (기본값: 1)
 * @param limit - 한 번에 가져올 상품 개수 (기본값: 5)
 * @returns { products: Product[], nextPage?: number }
 */
export const getPaginatedProducts = async (page: number = 1, limit: number = 5) => {
  const allProducts = await getProducts(); // 전체 데이터 가져오기

  // 페이지네이션 로직 적용
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = allProducts.slice(startIndex, endIndex);

  // 다음 페이지가 있는지 확인
  const nextPage = endIndex < allProducts.length ? page + 1 : undefined;

  return { products: paginatedProducts, nextPage };
};
