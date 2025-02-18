import * as z from "zod";

export const productSchema = z.object({
  productName: z
    .string({ required_error: "Product name is required" })
    .min(1, "Product name is required")
    .max(200, "Product name too long"),
  price: z
    .number({ required_error: "Product price is required" })
    .min(1, "Product price is required"),
  image: z
    .string({ required_error: "Product image is required" })
    .url("Invalid image URL")
    .min(1, "Product image is required")
    .max(200, "Product image too long"),
  category: z.object({
    value: z
      .string({ required_error: "Product category is required" })
      .min(1, "Product category is required"),
    label: z
      .string({ required_error: "Product category is required" })
      .min(1, "Product category is required"),
  }),
  status: z.object({
    value: z
      .string({ required_error: "Product status is required" })
      .min(1, "Product status is required"),
    label: z
      .string({ required_error: "Product status is required" })
      .min(1, "Product status is required"),
  }),
});

export type ProductSchemaType = z.infer<typeof productSchema>;
