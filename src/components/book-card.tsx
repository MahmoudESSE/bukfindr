import { type BookType } from "@/utils/types/book";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

type Props = {
  book: BookType;
};
export default function BookCard(props: Props) {
  const book = props.book;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Image
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt={book.volumeInfo.title}
            width={124}
            height={124}
          />
        </CardTitle>
        <CardDescription>{`${book.volumeInfo.title}`}</CardDescription>
      </CardHeader>
    </Card>
  );
}
