import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { BookSchema } from "@/utils/types/book";

const ItemsSchema = z.object({
  items: z.array(BookSchema),
});

type ItemsType = z.infer<typeof ItemsSchema>;

export const bookRouter = createTRPCRouter({
  searchByTitle: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
      }),
    )
    .query(async ({ input: { title } }) => {
      let books: ItemsType = { items: [] };
      if (!title) return books;
      books = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${title}`,
      ).then((items) => items.json() as Promise<ItemsType>);
      return books;
    }),
});
