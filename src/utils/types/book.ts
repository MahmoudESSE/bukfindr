import { z } from "zod";

export const BookSchema = z.object({
  id: z.string(),
  volumeInfo: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    publisher: z.string(),
    publishedDate: z.string(),
    imageLinks: z.object({
      smallThumbnail: z.string(),
      thumbnail: z.string(),
    }),
    infoLink: z.string(),
  }),
});

export type BookType = z.infer<typeof BookSchema>;
