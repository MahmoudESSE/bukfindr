import { createStore } from "zustand";

export type SearchState = {
  search: string;
  searching: boolean;
};

export type SearchActions = {
  setSearch: (input: string) => void;
  isSearching: () => void;
};

export type SearchStore = SearchState & SearchActions;

export const initSearchStore = (): SearchState => {
  return {
    search: "harry potter",
    searching: false,
  };
};

export const defaultInitState: SearchState = {
  search: "",
  searching: false,
};

export const createSearchStore = (
  initState: SearchState = defaultInitState,
) => {
  return createStore<SearchStore>()((set) => ({
    ...initState,
    setSearch: (input) => set(() => ({ search: input })),
    isSearching: () => set((state) => ({ searching: !state.searching })),
  }));
};
