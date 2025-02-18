"use client";

import DataTable from "@/components/DataTable";
import { useProduct } from "@/lib/redux/features/product/productSlice";
import { productTableColumn } from "./ProductTableColumn";
import { categories } from "@/lib/staticData";

const ProductTable: React.FC = () => {
  const { products } = useProduct();

  return (
    <div>
      <DataTable
        searchKey="name"
        data={products}
        columns={productTableColumn}
        filters={[
          { filterName: "category", filterOptions: categories },
          {
            filterName: "status",
            filterOptions: [
              { value: "public", label: "Public" },
              { value: "private", label: "Private" },
            ],
          },
        ]}
      />
    </div>
  );
};

export default ProductTable;
