import { create } from 'zustand';

export const useCategoryStore = create((set) => ({
  category: '',
  setCategory: (selectedCategory) => set({ category: selectedCategory }),
}));

export const useBooleanStore = create((set) => ({
  isClicked: false,
  setIsClicked: () => set((state) => ({ isClicked: !state.isClicked })),
  isVisible: false,
  setIsVisible: () => set((state) => ({ isVisible: !state.isVisible })),
}));
