import { Button } from "@/components/shadcn/ui/button";
import { Plus } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";
import ProductTable from "./_components/ProductTable";
import GoBackButton from "@/components/GoBackButton";

export const metadata: Metadata = {
  title: "Product List",
  description: "View and manage your products",
};

const ProductPage: React.FC = () => {
  return (
    <div className="space-y-2 sm:space-y-4">
      <div className="flex flex-wrap items-center gap-2 justify-between">
        <GoBackButton />
        <Button size="default" asChild>
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
