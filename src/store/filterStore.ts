import { create } from "zustand";

type FilterState = {
  owner?: string;
  done?: boolean;
};

type FilterActions = {
  setFilterValues: (payload: Partial<FilterState>) => void;
  clearFilter: () => void;
};

const initialState: FilterState = {
  owner: undefined,
  done: undefined,
};

export const useFilterStore = create<FilterState & FilterActions>((set) => ({
  ...initialState,
  setFilterValues: (payload) => set((state) => ({ ...state, ...payload })),
  clearFilter: () => set(initialState),
}));
