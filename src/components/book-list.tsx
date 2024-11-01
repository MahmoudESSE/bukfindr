import { api } from "@/trpc/server";
import BookCard from "./book-card";

export default async function BookList() {
  const books = await api.books.searchByTitle({
    title: "harry",
  });
  void (await api.books.searchByTitle.prefetch({
    title: "ice and fire",
  }));
  return (
    <ul className="grid grid-cols-4 gap-4">
      {books.items.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
}
