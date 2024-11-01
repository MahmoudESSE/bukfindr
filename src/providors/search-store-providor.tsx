"use client";

import {
  createSearchStore,
  initSearchStore,
  type SearchStore,
} from "@/stores/search-store";
import { createContext, useContext, useRef, type ReactNode } from "react";
import { useStore } from "zustand";

export type SearchStoreApi = ReturnType<typeof createSearchStore>;

export const SearchStoreContext = createContext<SearchStoreApi | undefined>(
  undefined,
);

export interface SearchStoreProviderProps {
  children: ReactNode;
}

export const SearchStoreProvidor = ({ children }: SearchStoreProviderProps) => {
  const storeRef = useRef<SearchStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createSearchStore(initSearchStore());
  }

  return (
    <SearchStoreContext.Provider value={storeRef.current}>
      {children}
    </SearchStoreContext.Provider>
  );
};

export const useSearchStore = <T,>(selector: (store: SearchStore) => T): T => {
  const searchStoreContext = useContext(SearchStoreContext);
  if (!searchStoreContext) {
    throw new Error("useSearchStore must be used within SearchStoreProvidor");
  }

  return useStore(searchStoreContext, selector);
};
