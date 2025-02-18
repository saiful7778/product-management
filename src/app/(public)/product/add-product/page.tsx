import { Button } from "@/components/shadcn/ui/button";
import { ArrowLeft } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Add Product",
  description: "Add a new product to the inventory",
};

const AddProduct = () => {
  return (
    <div>
      <Button asChild>
        <Link href="../">
          <ArrowLeft />
          <span>Go back</span>
        </Link>
      </Button>
    </div>
  );
};

export default AddProduct;
