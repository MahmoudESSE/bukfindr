import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { type ItemsType } from "@/utils/types/items";

export const bookRouter = createTRPCRouter({
  searchByTitle: publicProcedure
    .input(
      z.object({
        title: z.string(),
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
