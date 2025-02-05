"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  Button,
  cn,
  Icons,
} from "@common/design";
import { defaultSortingOption, productSortingOptions } from "@/constant/product";
import { useSearchParams, useRouter } from "next/navigation";

export default function ProductSortDropdown() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentSort = searchParams.get("sort") || defaultSortingOption.value;
  const selectedSort = productSortingOptions[currentSort] || defaultSortingOption;

  const handleSort = (optionKey: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", optionKey);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outline" className="w-32 justify-between font-medium">
          <span>{selectedSort.text}</span>
          <Icons.DownChevron size={16} />
        </Button>
      </DropdownTrigger>
      <DropdownContent className="w-32 space-y-1">
        {Object.entries(productSortingOptions).map(([key, option]) => (
          <DropdownItem
            key={key}
            onClick={() => handleSort(key)}
            className={cn(
              "cursor-pointer rounded-lg py-2 transition-colors",
              currentSort === key ? "bg-gray-100" : "bg-white",
            )}
          >
            {option.text}
          </DropdownItem>
        ))}
      </DropdownContent>
    </Dropdown>
  );
}
