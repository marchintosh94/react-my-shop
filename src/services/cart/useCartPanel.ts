import { create } from "zustand";

export interface CartStateOverlay {
  open: boolean;
  toggle: () => void;
  openOverlay: () => void;
  closeOverlay: () => void;
}

export const useCartPanel = create<CartStateOverlay>((set, get) => ({
  open: false,
  toggle: () => set({open: !get().open}),
  // toggle: () => set(state => ({open: !state.open})),
  closeOverlay: () => set({open: false}),
  openOverlay: () => set({open: true}),
}))