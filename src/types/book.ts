import { z } from "zod";

export const BookSchema = z.object({
  id: z.string(),
  volumeInfo: z.object({
    title: z.string().nullish(),
    authors: z.array(z.string().nullish()),
    publisher: z.string().nullish(),
    publishedDate: z.string().nullish(),
    imageLinks: z
      .object({
        smallThumbnail: z.string().nullish(),
        thumbnail: z.string().nullish(),
      })
      .nullish(),
    infoLink: z.string().nullish(),
  }),
});

export type BookType = z.infer<typeof BookSchema>;
