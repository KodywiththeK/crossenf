import { SortingProperty, SortingOptionType } from "@/types/products";

export const productStatus = {
  SOLD_OUT: {
    value: "SOLD_OUT",
    text: "SOLD OUT",
  },
  FOR_SALE: {
    value: "FOR_SALE",
    text: "FOR SALE",
  },
};

// 정렬 우선순위
const { PRICE, RATING, DISCOUNT, ID } = SortingProperty;
export const defaultSortPriorities: SortingProperty[] = [PRICE, RATING, DISCOUNT, ID];

// Enum 기반 정렬 옵션
export const productSortingOptions: Record<string, SortingOptionType> = {
  price_high: {
    value: "price_high",
    text: "가격 높은 순",
    primary: PRICE,
    ascending: false,
  },
  price_low: {
    value: "price_low",
    text: "가격 낮은 순",
    primary: PRICE,
    ascending: true,
  },
  rating: {
    value: "rating",
    text: "평점 높은 순",
    primary: RATING,
    ascending: false,
  },
  discount: {
    value: "discount",
    text: "할인율 높은 순",
    primary: DISCOUNT,
    ascending: false,
  },
  id: {
    value: "id",
    text: "최신 상품 순", // id 값이 높을수록 최신 상품이라고 가정
    primary: ID,
    ascending: false,
  },
};

export const defaultSortingOption = productSortingOptions.price_high;
