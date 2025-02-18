import React from "react";
import { Input } from "../shadcn/ui/input";
import { type Table } from "@tanstack/react-table";
import TableFilter from "./TableFilters";
import type { FilterProps } from "./type";

interface TableToolbarProps<TData> {
  table: Table<TData>;
  searchKey: string;
  filters: FilterProps[];
}

const TableToolbar = <TData,>({
  table,
  searchKey,
  filters,
}: TableToolbarProps<TData>) => {
  const columns = filters.map((filter) => ({
    column: table.getColumn(filter.filterName),
    filterName: filter.filterName,
    options: filter.filterOptions,
  }));

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Search"
        value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn(searchKey)?.setFilterValue(event.target.value)
        }
        className="w-full max-w-xs"
      />
      <div className="ml-auto">
        <TableFilter columns={columns} />
      </div>
    </div>
  );
};

export default TableToolbar;
