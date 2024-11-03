"use client";
import BookList from "@/components/book-list";
import SearchInput from "./search-input";
import { Suspense } from "react";
import { useSearchStore } from "@/providers/search-store-provider";

export default function BookView() {
  const { search } = useSearchStore((state) => state);

  if (!search) {
    return <></>;
  }

  return (
    <>
      <SearchInput />
      <Suspense fallback={<BookListEmpty />}>
        <BookList search={search} />
      </Suspense>
    </>
  );
}

function BookListEmpty() {
  return <></>;
}
