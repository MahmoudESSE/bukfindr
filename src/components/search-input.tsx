"use client";

import { Card, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Glasses, Shell } from "lucide-react";
import { useSearchStore } from "@/utils/global";

export default function SearchInput() {
  const { setSearch, searching, isSearching } = useSearchStore();
  return (
    <Card>
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
