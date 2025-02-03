import { cn, Container } from "@common/design";
import React, { PropsWithChildren } from "react";

type Props = React.ComponentProps<"div">;

export default function MainContainer({ className, ...props }: PropsWithChildren<Props>) {
  return (
    <Container
      className={cn("flex flex-col gap-6 pt-6 sm:gap-10 sm:pt-12", className)}
      {...props}
    />
  );
}
