import { Badge } from "@/components/shadcn/ui/badge";
import { type ColumnDef } from "@tanstack/react-table";
import ProductTableRowAction from "./ProductTableRowAction";

interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  status: string;
}

export const productTableColumn: ColumnDef<ProductType>[] = [
  {
    id: "count",
    header: () => <div className="text-center">#NO</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
  },
  {
    header: "Product Name",
    accessorKey: "name",
  },
  {
    accessorKey: "price",
    header: () => <div className="text-center">Price</div>,
    cell: ({ row }) => (
      <div className="text-center capitalize">${row.getValue("price")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: () => <div className="text-center">Category</div>,
    cell: ({ row }) => (
      <div className="text-center capitalize">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Badge
          variant={
            row.getValue("status") === "private" ? "secondary" : "default"
          }
          className="capitalize"
        >
          {row.getValue("status")}
        </Badge>
      </div>
    ),
  },
  {
    id: "actions",
    cell: () => <ProductTableRowAction />,
  },
];
