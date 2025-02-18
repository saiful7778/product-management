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
import { type Row } from "@tanstack/react-table";
import { Ellipsis, Trash2 } from "lucide-react";
import { useState } from "react";
import type { ProductType } from "@/types";
import { removeFavorite } from "@/lib/redux/features/favorite/favoriteSlice";

interface FavoriteProductTableRowActionProps<TData> {
  row: Row<TData & ProductType>;
}

const FavoriteProductTableRowAction = <TData,>({
  row,
}: FavoriteProductTableRowActionProps<TData>) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeFavorite({ id: row.original.id }));
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
          <DropdownMenuItem
            onClick={() => setOpenDeleteDialog((prev) => !prev)}
          >
            <span>Remove</span>
            <DropdownMenuShortcut>
              <Trash2 />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteDialog
        open={openDeleteDialog}
        onOpenChange={setOpenDeleteDialog}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default FavoriteProductTableRowAction;
