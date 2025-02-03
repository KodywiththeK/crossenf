import { cn } from "@common/design";
import React from "react";

type Props = React.ComponentProps<"h3">;

export default function Heading3({ className, ...props }: Props) {
  return (
    <h3 className={cn("text-lg font-semibold sm:text-xl lg:text-2xl", className)} {...props} />
  );
}
