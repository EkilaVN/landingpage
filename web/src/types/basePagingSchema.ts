import { z } from "zod";

export const basePagingSchema = z.object({
  page: z.number().catch(1),
  pageSize: z.number().catch(10),
});

export type BasePagingSchema = z.infer<typeof basePagingSchema>;
