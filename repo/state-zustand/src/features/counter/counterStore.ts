import { create } from 'zustand'
import { fetchCount } from './counterAPI';

export const useStore = create((set, get) => ({
  count: 1,
  incAmount: 2,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  setIncAmount: (val: number) => set((state) => ({ incAmount: Number(val) })),
  incByAmount:() => set((state) => ({ count: state.count + state.incAmount })),
  incIfOdd:() => {
    if (get().count % 2 === 1) {
      get().incByAmount()
    }
  },
  incAsync: async () => {
    const response = await fetchCount(get().incAmount);
    set((state) => ({
      count: state.count + response.data,
      incAmount: response.data
    }))
  },
}))
