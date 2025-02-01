import { Product } from "./products";

export interface CartItem extends Product {
  quantity: number; // 장바구니에서 개별 상품의 수량
  isReady: boolean; // 장바구니에 담긴 상품이 주문 가능한 상태인지 여부
}
