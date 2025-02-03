import { defaultSortingOption, productSortingOptions } from "@/constant/product";
import { Product } from "@/types/products";
import { customFetch } from "@/utils/fetch/server/customFetch";

/**
 * 상품 데이터를 가져오는 함수
 * @returns 전체 상품 리스트
 */
export const getProducts = async (): Promise<Product[]> => {
  const allProducts = await customFetch<Product[]>("products.json");
  return defaultSortingOption.sort(allProducts);
};

/**
 * 페이지네이션 및 정렬된 상품 목록 가져오기
 * @param page - 현재 페이지 번호
 * @param limit - 페이지당 아이템 수
 * @param sortValue - 정렬 기준
 * @returns { products: Product[], nextPage?: number }
 */
export const getPaginatedProducts = async (
  page: number = 1,
  limit: number = 5,
  sortValue: string = "price_down",
) => {
  const allProducts = await getProducts();

  // 정렬 옵션이 존재하는지 확인하고 정렬 적용
  const sortOption = productSortingOptions[sortValue];
  const sortedProducts = sortOption ? sortOption.sort([...allProducts]) : allProducts;

  // 페이지네이션 적용
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = sortedProducts.slice(startIndex, endIndex);

  // 다음 페이지가 있는지 확인
  const nextPage = endIndex < sortedProducts.length ? page + 1 : undefined;

  return { products: paginatedProducts, nextPage };
};
