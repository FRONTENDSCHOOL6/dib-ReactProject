import { create } from 'zustand';

export const useCommentStore = create((set) => ({
  writeCommnet: '',
  setWriteComment: () => set((state) => ({ comment: state.comment })),
}));
