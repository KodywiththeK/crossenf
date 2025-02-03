import { route } from "@/constant/route";
import { buttonVariants, cn, Icons } from "@common/design";
import Link from "next/link";
import React from "react";

export default function GoBackToShopButton() {
  return (
    <Link
      href={route.shop.path}
      className={cn(buttonVariants({ variant: "link" }), "absolute left-0 top-2 gap-1 sm:top-4")}
    >
      <Icons.LeftChevron size={16} />
      <span>Go back to SHOP</span>
    </Link>
  );
}
