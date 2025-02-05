import {
  defaultSortingOption,
  defaultSortPriorities,
  productSortingOptions,
  productStatus,
} from "@/constant/product";
import { Product } from "@/types/products";

export const getHotDealProducts = (products: Product[], limit: number = 5) => {
  const hotDealProducts = products
    .filter((i) => i.status === productStatus.FOR_SALE.value)
    .sort((a, b) => b.discount_rate - a.discount_rate)
    .slice(0, limit);
  return hotDealProducts;
};

export const getTopRatingProducts = (products: Product[], limit: number = 5) => {
  const topRatingProducts = products
    .filter((i) => i.status === productStatus.FOR_SALE.value)
    .sort((a, b) => b.star_rate_avg - a.star_rate_avg)
    .slice(0, limit);
  return topRatingProducts;
};

/**
 * ✅ 정렬 로직을 동적으로 적용하는 함수
 * @param products - 정렬할 상품 배열
 * @param sortKey - 적용할 정렬 기준 (price_high, rating 등)
 * @returns 정렬된 상품 배열
 */
export function getSortedProducts(products: Product[], sortKey: string): Product[] {
  const option = productSortingOptions[sortKey] || defaultSortingOption;

  // 기본 우선순위 배열에서 primary를 최우선으로 하고, 나머지를 순서대로 적용
  const sortPriorities = [
    option.primary,
    ...defaultSortPriorities.filter((p) => p !== option.primary),
  ];

  return [...products].sort((a, b) => {
    for (const key of sortPriorities) {
      const isAscending = key === option.primary ? option.ascending : false;
      const valueA = a[key];
      const valueB = b[key];

      // 숫자로 변환 가능한 값이면 비교
      const numA = typeof valueA === "number" ? valueA : Number(valueA);
      const numB = typeof valueB === "number" ? valueB : Number(valueB);

      if (!isNaN(numA) && !isNaN(numB)) {
        if (numA !== numB) {
          return isAscending ? numA - numB : numB - numA;
        }
      } else {
        // 문자열이면 localeCompare을 사용하여 정렬
        const strA = String(valueA);
        const strB = String(valueB);
        const result = strA.localeCompare(strB, undefined, { numeric: true });
        if (result !== 0) return result;
      }
    }
    return 0;
  });
}
