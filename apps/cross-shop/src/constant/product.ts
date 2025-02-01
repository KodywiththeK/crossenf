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
  sort: (p: Product[]) => void;
  isDefault?: true;
};
export const productSortingOptions: Record<string, ProductSortingOptionType> = {
  price_down: {
    value: "price_down",
    text: "높은가격순",
    sort: (p: Product[]) => p.sort((a, b) => b.discount_price - a.discount_price),
    isDefault: true,
  },
  price_up: {
    value: "price_up",
    text: "낮은가격순",
    sort: (p: Product[]) => p.sort((a, b) => a.discount_price - b.discount_price),
  },
  rating: {
    value: "rating",
    text: "인기순",
    sort: (p: Product[]) => p.sort((a, b) => b.star_rate_avg - a.star_rate_avg),
  },
  discount: {
    value: "discount",
    text: "할인률순",
    sort: (p: Product[]) => p.sort((a, b) => b.discount_rate - a.discount_rate),
  },
};
