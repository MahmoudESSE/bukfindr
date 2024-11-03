import { z } from "zod";
import { BookSchema } from "./book";

export const ItemsSchema = z.object({
  items: z.array(BookSchema).nullish(),
});

export type ItemsType = z.infer<typeof ItemsSchema>;
