import { Product } from "./products";

export interface CartItem extends Product {
  quantity: number; // 장바구니에서 개별 상품의 수량
}
