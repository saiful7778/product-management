"use client";

import { Button } from "@/components/shadcn/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/ui/command";
import { FormControl } from "@/components/shadcn/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popover";
import { cn } from "@/lib/shadcn/utils";
import { categories } from "@/lib/staticData";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const ProductCategorySelect: React.FC<{
  value: { value: string; label: string };
  setValue: ({ value, label }: { value: string; label: string }) => void;
  disabled: boolean;
}> = ({ value, setValue, disabled }) => {
  const [openPopover, setOpenPopover] = useState<boolean>(false);

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-full justify-between",
              !value && "text-muted-foreground"
            )}
            disabled={disabled}
          >
            {value
              ? categories.find((category) => category.value === value?.value)
                  ?.label
              : "Select product category"}
            <ChevronDown className="opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  value={category.label}
                  key={category.value}
                  onSelect={() => {
                    setValue(category);
                    setOpenPopover(false);
                  }}
                >
                  {category.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      category.value === value?.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ProductCategorySelect;
