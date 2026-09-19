import { z } from "zod";

export const NoteSchema = z.object({
  title: z.string().min(3),
  subject: z.string().min(2),
  category: z.string().min(2),
  content: z.string().min(10),
  published: z.boolean(),
});

export type NoteForm = z.infer<typeof NoteSchema>;