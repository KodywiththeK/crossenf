import { IconBaseProps } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

function CartFill({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <FaShoppingCart {...props} color={color} size={size} className={className} />;
}

function StarFill({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <FaStar {...props} color={color} size={size} className={className} />;
}

function StarHalfFill({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <FaRegStarHalfStroke {...props} color={color} size={size} className={className} />;
}

function StarStroke({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <FaRegStar {...props} color={color} size={size} className={className} />;
}

export const Icons = {
  CartFill,
  StarFill,
  StarHalfFill,
  StarStroke,
};
