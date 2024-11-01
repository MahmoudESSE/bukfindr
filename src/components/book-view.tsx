"use client";
import BookList from "@/components/book-list";
import SearchInput from "./search-input";
import { useSearchStore } from "@/providors/search-store-providor";
import { Suspense } from "react";

export default function BookView() {
  const { search } = useSearchStore((state) => state);
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
