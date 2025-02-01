import { cn } from "../../lib";
import React from "react";

type ContainerProps = React.ComponentProps<"div">;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
}
