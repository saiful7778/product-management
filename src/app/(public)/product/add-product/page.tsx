import { Button } from "@/components/shadcn/ui/button";
import { ArrowLeft } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";
import AddProductForm from "./_components/AddProductForm";

export const metadata: Metadata = {
  title: "Add Product",
  description: "Add a new product to the inventory",
};

const AddProduct = () => {
  return (
    <div className="space-y-4 mb-4">
      <Button asChild>
        <Link href="/product">
          <ArrowLeft />
          <span>Go back</span>
        </Link>
      </Button>
      <AddProductForm />
    </div>
  );
};

export default AddProduct;
