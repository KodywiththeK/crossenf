import { Product } from "@/types/products";
import { apiClient } from "@/utils/fetch/client/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";

/**
 * 페이지네이션을 지원하는 상품 리스트 가져오기
 * @param pageParam - 현재 페이지 (React Query 내부적으로 관리)
 * @param limit - 한 번에 가져올 상품 개수 (기본값: 5)
 */
const getProducts = async ({ pageParam = 1 }) => {
  return apiClient<{ products: Product[]; nextPage?: number }>(
    `products?page=${pageParam}&limit=5`,
  );
};

export const useProducts = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    staleTime: 5 * 60 * 1000,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
    refetchInterval: false,
  });
};
