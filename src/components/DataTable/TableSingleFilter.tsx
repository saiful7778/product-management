import { type Column } from "@tanstack/react-table";
import { Label } from "../shadcn/ui/label";
import type { FilterProps } from "./type";
import { Checkbox } from "../shadcn/ui/checkbox";

interface TableSingleFilterProps<TData> {
  column?: Column<TData, unknown>;
  filterName: string;
  options: FilterProps["filterOptions"];
}

const TableSingleFilter = <TData,>({
  column,
  filterName,
  options,
}: TableSingleFilterProps<TData>) => {
  const selectedValues = new Set(column?.getFilterValue() as string[]);

  return (
    <div>
      <div className="text-sm font-bold mb-2 capitalize">{filterName}</div>
      <ul className="flex flex-col gap-2">
        {options?.map((option, idx) => {
          const isSelected = selectedValues.has(option.value);
          return (
            <li key={`${option.value}-${idx}`}>
              <Label className="capitalize flex items-center gap-2">
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={() => {
                    if (isSelected) {
                      selectedValues.delete(option.value);
                    } else {
                      selectedValues.add(option.value);
                    }
                    const filterValues = Array.from(selectedValues);
                    column?.setFilterValue(
                      filterValues.length ? filterValues : undefined
                    );
                  }}
                />
                {option.label}
              </Label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableSingleFilter;
