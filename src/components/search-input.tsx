"use client";
import { Card, CardHeader } from "./ui/card";
import { create } from "zustand";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Glasses, Shell } from "lucide-react";

type SearchState = {
  search: string;
  setSearch: (input: string) => void;
  searching: boolean;
  isSearching: () => void;
};

const useSearchStore = create<SearchState>((set) => ({
  search: "",
  setSearch: (input) => set(() => ({ search: input })),
  searching: false,
  isSearching: () => set((state) => ({ searching: !state.searching })),
}));

export default function SearchInput() {
  const { search, setSearch, searching, isSearching } = useSearchStore();
  return (
    <Card className="flex w-full flex-row items-center justify-center border align-middle">
      <CardHeader className="flex flex-row items-center justify-center gap-4 align-middle">
        <Input
          disabled={searching}
          placeholder="Harry Potter"
          type="search"
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
        />
        <Button
          disabled={searching}
          type="submit"
          onClick={() => isSearching()}
        >
          {searching ? <Shell className="animate-spin" /> : <Glasses />}
          Search
        </Button>
      </CardHeader>
    </Card>
  );
}
