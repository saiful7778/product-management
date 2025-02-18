"use client";
import { type Table } from "@tanstack/react-table";
import TableRowItem from "./TableRowItem";
import TablePaginationItem from "./TablePaginationItem";

interface TablePaginationProps<TData> {
  table: Table<TData>;
}

const TablePagination = <TData,>({ table }: TablePaginationProps<TData>) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center text-sm font-medium">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </div>
      <div className="flex items-center gap-2 ml-auto md:gap-6">
        <TableRowItem table={table} />
        <TablePaginationItem table={table} />
      </div>
    </div>
  );
};

export default TablePagination;
