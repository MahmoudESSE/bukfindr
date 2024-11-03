import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { type ItemsType } from "@/types/items";

export const bookRouter = createTRPCRouter({
  searchByTitle: publicProcedure
    .input(
      z.object({
        title: z.string(),
      }),
    )
    .query(async ({ input: { title } }) => {
      if (!title) return { items: [] };
      const data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${title}`,
      );
      const books = (await data.json()) as Promise<ItemsType>;
      return await books;
    }),
});
