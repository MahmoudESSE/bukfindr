"use server";
import { api } from "@/trpc/server";
import BookCard from "./book-card";

type Props = {
  search: string;
};

export default async function BookList(props: Props) {
  const books = await api.books.searchByTitle({
    title: props.search,
  });
  void (await api.books.searchByTitle.prefetch({
    title: "harry",
  }));
  return (
    <ul className="grid grid-cols-4 gap-4">
      {books.items.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
}
