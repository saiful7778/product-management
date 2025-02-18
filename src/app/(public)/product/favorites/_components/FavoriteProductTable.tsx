"use client";

import DataTable from "@/components/DataTable";
import { useFavoriteProduct } from "@/lib/redux/features/favorite/favoriteSlice";
import { categories, productStatus } from "@/lib/staticData";
import { favoriteProductTableColumn } from "./FavoriteProductTableColumn";

const FavoriteProductTable: React.FC = () => {
  const { products } = useFavoriteProduct();

  return (
    <>
      <DataTable
        searchKey="name"
        data={products}
        columns={favoriteProductTableColumn}
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

export default FavoriteProductTable;
