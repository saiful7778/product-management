"use client";
import { type Table } from "@tanstack/react-table";
import TableRowItem from "./TableRowItem";
import TablePaginationItem from "./TablePaginationItem";
import { Suspense } from "react";

interface TablePaginationProps<TData> {
  table: Table<TData>;
}

const TablePagination = <TData,>({ table }: TablePaginationProps<TData>) => {
  return (
    <div className="flex sm:flex-row flex-col items-center gap-2">
      <div className="flex items-center justify-center text-sm font-medium">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </div>
      <div className="flex items-center flex-wrap gap-2 sm:ml-auto md:gap-6">
        <Suspense>
          <TableRowItem table={table} />
        </Suspense>
        <TablePaginationItem table={table} />
      </div>
    </div>
  );
};

export default TablePagination;
