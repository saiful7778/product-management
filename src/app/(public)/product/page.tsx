import { Button } from "@/components/shadcn/ui/button";
import { Plus } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";
import ProductTable from "./_components/ProductTable";

export const metadata: Metadata = {
  title: "Product List",
  description: "View and manage your products",
};

const ProductPage: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="text-right">
        <Button asChild>
          <Link href="/product/add-product">
            <Plus />
            <span>Add product</span>
          </Link>
        </Button>
      </div>
      <ProductTable />
    </div>
  );
};

export default ProductPage;
