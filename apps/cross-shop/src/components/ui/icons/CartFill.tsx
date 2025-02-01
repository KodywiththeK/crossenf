import React from "react";
import { FaShoppingCart } from "react-icons/fa";

type CartFillProps = React.ComponentProps<typeof FaShoppingCart>;

export default function CartFill({
  size = "24",
  color = "currentColor",
  className,
  ...props
}: CartFillProps) {
  return <FaShoppingCart {...props} color={color} size={size} className={className} />;
}
