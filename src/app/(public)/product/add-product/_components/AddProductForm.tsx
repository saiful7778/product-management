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
import { useState } from "react";
import { productStatus } from "@/lib/staticData";

const AddProductForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const form = useForm<ProductSchemaType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: "",
      price: 0,
      image: "",
    },
  });

  const handleSubmit = async (e: ProductSchemaType) => {
    setIsLoading(true);
    dispatch(
      addProduct({
        name: e.productName,
        price: e.price,
        category: e.category,
        image: e.image,
        status: e.status,
      })
    );
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push("/product");
    setIsLoading(false);
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
                <Input
                  placeholder="Product name"
                  disabled={isLoading}
                  {...field}
                />
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                  disabled={isLoading}
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
                    onValueChange={(value) =>
                      field.onChange(
                        productStatus.find((status) => status.value === value)
                      )
                    }
                    defaultValue={field.value?.value}
                    disabled={isLoading}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {productStatus.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-2.5"></div>
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default AddProductForm;
