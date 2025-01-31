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
