import { create } from "zustand";

export type SearchState = {
  search: string;
  setSearch: (input: string) => void;
  searching: boolean;
  isSearching: () => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  search: "",
  setSearch: (input) => set(() => ({ search: input })),
  searching: false,
  isSearching: () => set((state) => ({ searching: !state.searching })),
}));
