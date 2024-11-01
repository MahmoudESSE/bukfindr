"use client";
import SearchInput from "./search-input";
import BookList from "./book-list";
import { useSearchStore } from "@/providors/search-store-providor";
import { Suspense } from "react";

export default function BookView() {
  const { search } = useSearchStore((state) => state);
  return (
    <>
      <SearchInput />
      <Suspense fallback={<BookListEmpty />}>
        {"use server"}
        <BookList search={search} />
      </Suspense>
    </>
  );
}

function BookListEmpty() {
  return <></>;
}
