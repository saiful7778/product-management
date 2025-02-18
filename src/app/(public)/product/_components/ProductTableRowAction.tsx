"use client";

import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react";

const ProductTableRowAction: React.FC = () => {
  return (
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
        <DropdownMenuItem>
          <span>View</span>
          <DropdownMenuShortcut>
            <Eye />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Update</span>
          <DropdownMenuShortcut>
            <Pencil />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Delete</span>
          <DropdownMenuShortcut>
            <Trash2 />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductTableRowAction;
