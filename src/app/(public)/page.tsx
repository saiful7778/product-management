"use client";
import ProductItem from "@/components/ProductItem";
import { Button } from "@/components/shadcn/ui/button";
import { useProduct } from "@/lib/redux/features/product/productSlice";
import { Box, Star } from "lucide-react";
import Link from "next/link";

const HomePage: React.FC = () => {
  const { products } = useProduct();
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-end mb-2 sm:mb-4">
        <Button asChild>
          <Link href="/product">
            <Box className="w-4 h-4" />
            <span>Products</span>
          </Link>
        </Button>
        <Button asChild>
          <Link href="/product/favorites">
            <Star className="w-4 h-4" />
            <span>Favorites</span>
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {products.map((product, idx) => (
          <ProductItem key={`product-${idx}`} productData={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
