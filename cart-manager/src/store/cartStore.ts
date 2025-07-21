// src/store/cartStore.ts
import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
  totalItems: () =>
    get().cart.reduce((total, item) => total + item.quantity, 0),
}));
