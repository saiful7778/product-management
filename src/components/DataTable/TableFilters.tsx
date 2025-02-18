import { SlidersHorizontal } from "lucide-react";
import { Button } from "../shadcn/ui/button";
import { type Column } from "@tanstack/react-table";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/ui/popover";
import type { FilterProps } from "./type";
import TableSingleFilter from "./TableSingleFilter";

interface TableFilterProps<TData> {
  columns: {
    column: Column<TData, unknown> | undefined;
    filterName: string;
    options: FilterProps["filterOptions"];
  }[];
}

const TableFilter = <TData,>({ columns }: TableFilterProps<TData>) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontal />
          <span>Filter</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[200px] space-y-2">
        {columns?.map((column, idx) => (
          <TableSingleFilter
            key={`filter-column-${idx}`}
            filterName={column.filterName}
            options={column.options}
            column={column.column}
          />
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default TableFilter;
