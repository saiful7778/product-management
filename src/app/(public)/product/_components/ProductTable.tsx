"use client";

import DataTable from "@/components/DataTable";
import { useProduct } from "@/lib/redux/features/product/productSlice";
import { productTableColumn } from "./ProductTableColumn";
import { categories, productStatus } from "@/lib/staticData";

const ProductTable: React.FC = () => {
  const { products } = useProduct();

  return (
    <>
      <DataTable
        searchKey="name"
        data={products}
        columns={productTableColumn}
        filters={[
          { filterName: "category", filterOptions: categories },
          {
            filterName: "status",
            filterOptions: productStatus,
          },
        ]}
      />
    </>
  );
};

export default ProductTable;
