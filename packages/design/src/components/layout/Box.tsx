import { cn } from "../../lib";
import React from "react";

type ContainerProps = React.ComponentProps<"div">;

export function Box({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}
