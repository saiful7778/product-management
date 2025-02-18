import { Badge } from "@/components/shadcn/ui/badge";
import { type ColumnDef } from "@tanstack/react-table";
import ProductTableRowAction from "./ProductTableRowAction";
import TableFilterHeader from "@/components/DataTable/TableFilterHeader";
import Image from "next/image";

export interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  category: { value: string; label: string };
  status: { value: string; label: string };
}

export const productTableColumn: ColumnDef<ProductType>[] = [
  {
    id: "count",
    header: () => <div className="text-center">#NO</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
  },
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <figure className="w-10 aspect-square overflow-hidden rounded">
          <Image
            src={row.original.image}
            className="w-full h-full object-cover object-center"
            width={40}
            height={40}
            alt={`${row.original.name} image`}
          />
        </figure>
        <div>{row.original.name}</div>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <TableFilterHeader
        className="text-center justify-center"
        column={column}
        title="Price"
      />
    ),
    cell: ({ row }) => (
      <div className="text-center capitalize">${row.getValue("price")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: () => <div className="text-center">Category</div>,
    cell: ({ row }) => (
      <div className="text-center capitalize">
        {row.original.category.label}
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(
        (row.getValue(id) as { value: string; label: string })?.value
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Badge
          variant={
            row.original.status.value === "out-of-stock"
              ? "secondary"
              : "default"
          }
          className="capitalize"
        >
          {row.original.status.label}
        </Badge>
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(
        (row.getValue(id) as { value: string; label: string })?.value
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <ProductTableRowAction row={row} />,
  },
];
