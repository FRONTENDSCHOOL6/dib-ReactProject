import { create } from 'zustand';

export const useCategoryStore = create((set) => ({
  category: '',
  setCategory: () => set((state) => ({ category: state.category })),
}));