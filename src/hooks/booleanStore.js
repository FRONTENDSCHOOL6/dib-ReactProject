import { create } from 'zustand';

export const useBooleanStore = create((set) => ({
  isClicked: false,
  setIsClicked: () => set((state) => ({ isClicked: !state.isClicked })),
  isVisible: false,
  setIsVisible: () => set((state) => ({ isVisible: !state.isVisible })),
}));
