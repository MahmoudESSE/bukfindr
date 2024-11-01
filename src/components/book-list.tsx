import BookCard from "@/components/book-card";
import { api } from "@/trpc/server";

type Props = {
  search: string;
};

export default async function BookList(props: Props) {
  const books = await api.books.searchByTitle({
    title: props.search,
  });
  return (
    <ul className="grid grid-cols-4 gap-4">
      {books.items.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
}
