import { create } from 'zustand';

export const useStore = create((set) => ({
  data: [],
  loading: true,
  error: null,
  setData: (newData) => set({ data: newData }),
  setLoading: (isLoading) => set({ loading: isLoading }),
  setError: (newError) => set({ error: newError }),
}));
