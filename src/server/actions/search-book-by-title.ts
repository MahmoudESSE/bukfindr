import { type ItemsType } from "@/types/items";

export default async function SearchBookByTitle(title: string) {
  let books: ItemsType = { items: [] };
  if (!title) return books;
  books = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${title}`,
  ).then((items) => items.json() as Promise<ItemsType>);
  return books;
}
