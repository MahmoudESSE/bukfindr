import BookCard from "@/components/book-card";
import { api } from "@/trpc/react";

type Props = {
  search: string;
};

export default function BookList(props: Props) {
  if (!props.search) {
    return <></>;
  }

  const [books] = api.books.searchByTitle.useSuspenseQuery({
    title: props.search,
  });

  return (
    <ul className="grid grid-cols-4 gap-4">
      {books.items?.map((book) => <BookCard key={book.id} book={book} />)}
    </ul>
  );
}
