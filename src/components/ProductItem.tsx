"use client";
import type { ProductType } from "@/types";
import Image from "next/image";
import { Button } from "./shadcn/ui/button";
import { Star } from "lucide-react";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/hooks/redux.hooks";
import { addFavorite } from "@/lib/redux/features/favorite/favoriteSlice";

const ProductItem: React.FC<{ productData: ProductType }> = ({
  productData,
}) => {
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    toast.promise(
      async () => {
        dispatch(
          addFavorite({
            name: productData.name,
            price: productData.price,
            image: productData.image,
            status: productData.status,
            category: productData.category,
          })
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));
      },
      {
        loading: "Adding...",
        success: "Product is added to your favorites",
        error: "Something went wrong",
      }
    );
  };

  return (
    <div className="bg-popover border border-input space-y-2 rounded-md p-2 sm:p-4">
      <figure className="w-full aspect-square overflow-hidden rounded-md">
        <Image
          src={productData.image}
          className="w-full h-full object-cover object-center"
          width={200}
          height={200}
          alt={`${productData.name} image`}
        />
      </figure>
      <h3 className="text-lg font-semibold">{productData.name}</h3>
      <div className="text-sm">
        <span className="font-semibold">Price:</span>
        <span>${productData.price}</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="text-sm">
          <div className="font-semibold">Status:</div>
          <div>{productData.status.label}</div>
        </div>
        <div className="text-sm">
          <div className="font-semibold">Category:</div>
          <div>{productData.category.label}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleFavorite}
          disabled={productData.status.value === "out-of-stock"}
        >
          <Star />
          <span>Add to favorite</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
