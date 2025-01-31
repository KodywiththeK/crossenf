import { create } from "zustand";

interface CartState {
  cart: [] | null;
  setCart: (cart: []) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: null,
  setCart: (cart) => set({ cart }),
}));
