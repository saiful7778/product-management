"use client";

import { Button } from "@/components/shadcn/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import {
  productSchema,
  type ProductSchemaType,
} from "@/lib/schemas/productSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/shadcn/ui/input";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/redux.hooks";
import { updateProduct } from "@/lib/redux/features/product/productSlice";
import ProductCategorySelect from "../add-product/_components/ProductCategorySelect";
import { productStatus } from "@/lib/staticData";
import { type ProductType } from "./ProductTableColumn";

const ProductEdit: React.FC<{
  productData: ProductType;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ productData, open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>
            To update this product fill this form
          </DialogDescription>
        </DialogHeader>
        <ProductUpdateForm
          closeDialog={() => onOpenChange(false)}
          productData={productData}
        />
      </DialogContent>
    </Dialog>
  );
};

const ProductUpdateForm: React.FC<{
  productData: ProductType;
  closeDialog: VoidFunction;
}> = ({ productData, closeDialog }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const form = useForm<ProductSchemaType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: productData.name || "",
      price: productData.price || 0,
      image: productData.image || "",
      category: productData.category || { value: "", label: "" },
      status: productData.status || { value: "", label: "" },
    },
  });

  const handleSubmit = async (e: ProductSchemaType) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(
      updateProduct({
        id: productData.id,
        name: e.productName,
        price: e.price,
        category: e.category,
        image: e.image,
        status: e.status,
      })
    );
    closeDialog();
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2.5">
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
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button
              type="button"
              className="w-full"
              variant="outline"
              disabled={isLoading}
            >
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update"}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default ProductEdit;
