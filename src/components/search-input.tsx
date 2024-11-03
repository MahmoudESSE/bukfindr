"use client";

import { useSearchStore } from "@/providers/search-store-provider";
import { Card, CardHeader } from "./ui/card";
import { Input } from "./ui/input";

export default function SearchInput() {
  const { setSearch, searching } = useSearchStore((state) => state);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-center gap-4 align-middle">
        <Input
          disabled={searching}
          placeholder="Harry Potter"
          type="search"
          onChange={(e) => {
            e.preventDefault();
            if (!searching) {
              setSearch(e.target.value);
            }
          }}
        />
      </CardHeader>
    </Card>
  );
}
