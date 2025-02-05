export type ProductStatus = "FOR_SALE" | "SOLD_OUT";
export interface Product {
  id: number;
  price: number;
  status: ProductStatus;
  thumbnail_img_url: string;
  star_rate_avg: number; // 평균 별점 (0~5 범위)
  name: string;
  discount_rate: number; // 할인율 (0~100)
  discount_price: number;
}

// 상품 정렬 가능한 속성 정의
export enum SortingProperty {
  PRICE = "discount_price",
  RATING = "star_rate_avg",
  DISCOUNT = "discount_rate",
  ID = "id",
}

// 정렬 옵션 타입 정의
export type SortingOptionType = {
  value: string;
  text: string;
  primary: SortingProperty; // 최우선 정렬 기준
  ascending: boolean; // true면 오름차순, 기본은 내림차순
};
