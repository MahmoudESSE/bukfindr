import BookCard from "@/components/book-card";
import SearchBookByTitle from "@/server/actions/search-book-by-title";

type Props = {
  search: string;
};

export default async function BookList(props: Props) {
  if (!props.search) {
    return <></>;
  }

  const books = await SearchBookByTitle(props.search);

  return (
    <ul className="grid grid-cols-4 gap-4">
      {books.items?.map((book) => <BookCard key={book.id} book={book} />)}
    </ul>
  );
}
