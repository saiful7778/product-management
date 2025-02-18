"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { rowPerPage } from "@/lib/staticData";
import { type Table } from "@tanstack/react-table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface TableRowItemProps<TData> {
  table: Table<TData>;
}

const TableRowItem = <TData,>({ table }: TableRowItemProps<TData>) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const selectValue =
    searchParams.get("item_per_page") ||
    String(table.getState().pagination.pageSize);

  const handleSelectValue = (value: string) => {
    table.setPageSize(Number(value));
    const params = new URLSearchParams(searchParams.toString());
    params.set("item_per_page", value);
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Select defaultValue={selectValue} onValueChange={handleSelectValue}>
        <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={table.getState().pagination.pageSize} />
        </SelectTrigger>
        <SelectContent side="top">
          {rowPerPage.map((pageSize, idx) => (
            <SelectItem key={`pagination-${idx}`} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-sm font-medium">Rows per page</p>
    </div>
  );
};

export default TableRowItem;
