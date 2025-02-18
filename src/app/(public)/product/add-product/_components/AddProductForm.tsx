"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import {
  productSchema,
  type ProductSchemaType,
} from "@/lib/schemas/productSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import ProductCategorySelect from "./ProductCategorySelect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { useAppDispatch } from "@/hooks/redux.hooks";
import { addProduct } from "@/lib/redux/features/product/productSlice";
import { useRouter } from "next/navigation";

const AddProductForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const form = useForm<ProductSchemaType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: "",
      price: 0,
      image: "",
      category: "",
      status: "",
    },
  });

  const handleSubmit = async (e: ProductSchemaType) => {
    dispatch(
      addProduct({
        name: e.productName,
        price: e.price,
        category: e.category,
        image: e.image,
        status: e.status,
      })
    );
    router.push("/product");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-2.5 max-w-xl w-full mx-auto"
      >
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Product name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Product Image</FormLabel>
                <FormControl>
                  <Input
                    type="url"
                    placeholder="Product Image(url)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Product price"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Product Category</FormLabel>
                <ProductCategorySelect
                  value={field.value}
                  setValue={(value) => field.onChange(value)}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Status</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-2.5"></div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AddProductForm;
