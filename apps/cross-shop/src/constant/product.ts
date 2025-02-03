import { Product } from "@/types/products";

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

type ProductSortingOptionType = {
  value: string;
  text: string;
  sort: (p: Product[]) => Product[];
};
export const productSortingOptions: Record<string, ProductSortingOptionType> = {
  price_down: {
    value: "price_down",
    text: "가격 높은 순",
    sort: (p: Product[]) => [...p].sort((a, b) => b.discount_price - a.discount_price),
  },
  price_up: {
    value: "price_up",
    text: "가격 낮은 순",
    sort: (p: Product[]) => [...p].sort((a, b) => a.discount_price - b.discount_price),
  },
  rating: {
    value: "rating",
    text: "인기 순",
    sort: (p: Product[]) => [...p].sort((a, b) => b.star_rate_avg - a.star_rate_avg),
  },
  discount: {
    value: "discount",
    text: "할인율 순",
    sort: (p: Product[]) => [...p].sort((a, b) => b.discount_rate - a.discount_rate),
  },
};
export const defaultSortingOption = productSortingOptions.price_down;
