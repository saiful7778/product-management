"use client";

import DeleteDialog from "@/components/DeleteDialog";
import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { useAppDispatch } from "@/hooks/redux.hooks";
import { deleteProduct } from "@/lib/redux/features/product/productSlice";
import { type Row } from "@tanstack/react-table";
import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { type ProductType } from "./ProductTableColumn";
import ProductEdit from "./ProductEdit";
import ProductView from "./ProductView";

interface ProductTableRowActionProps<TData> {
  row: Row<TData & ProductType>;
}

const ProductTableRowAction = <TData,>({
  row,
}: ProductTableRowActionProps<TData>) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct({ id: row.original.id }));
    setOpenDeleteDialog(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="data-[state=open]:bg-muted"
          >
            <Ellipsis className="size-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setOpenViewDialog((prev) => !prev)}>
            <span>View</span>
            <DropdownMenuShortcut>
              <Eye />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenEditDialog((prev) => !prev)}>
            <span>Update</span>
            <DropdownMenuShortcut>
              <Pencil />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setOpenDeleteDialog((prev) => !prev)}
          >
            <span>Delete</span>
            <DropdownMenuShortcut>
              <Trash2 />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ProductView
        productData={row.original}
        open={openViewDialog}
        onOpenChange={setOpenViewDialog}
      />
      <ProductEdit
        productData={row.original}
        open={openEditDialog}
        onOpenChange={setOpenEditDialog}
      />
      <DeleteDialog
        open={openDeleteDialog}
        onOpenChange={setOpenDeleteDialog}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default ProductTableRowAction;
