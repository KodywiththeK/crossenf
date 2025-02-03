import { Product } from "@/types/products";
import { apiClient } from "@/utils/fetch/client/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";

/**
 * 페이지네이션을 지원하는 상품 리스트 가져오기
 * @param pageParam - 현재 페이지 (React Query 내부적으로 관리)
 * @param limit - 한 번에 가져올 상품 개수 (기본값: 5)
 */
const getProducts = async ({ pageParam = 1, sortValue = "price_down" }) => {
  return apiClient<{ products: Product[]; nextPage?: number }>(
    `products?page=${pageParam}&limit=5&sort=${sortValue}`,
  );
};

/**
 * 상품 리스트를 가져오는 커스텀 훅
 * @param sortValue - 정렬 기준 (기본값: "price_down")
 */
export const useProducts = (sortValue = "price_down") => {
  return useInfiniteQuery({
    queryKey: ["products", sortValue], // 🔹 정렬 상태가 변경되면 새로운 데이터 가져오기
    queryFn: ({ pageParam }) => getProducts({ pageParam, sortValue }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    staleTime: 5 * 60 * 1000,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
    refetchInterval: false,
  });
};
