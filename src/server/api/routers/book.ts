import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { type ItemsType } from "@/types/items";
import { TRPCError } from "@trpc/server";

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
      if (!books) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "no books found",
        });
      }
      return books;
    }),
});
