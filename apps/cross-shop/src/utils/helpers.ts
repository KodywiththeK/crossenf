import { productStatus } from "@/constant/product";
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
