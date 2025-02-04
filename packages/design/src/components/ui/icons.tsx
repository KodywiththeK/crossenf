import { IconBaseProps } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { PiTrashLight } from "react-icons/pi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { GiFruitBowl } from "react-icons/gi";

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

function Plus({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <CiSquarePlus {...props} color={color} size={size} className={className} />;
}

function Minus({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <CiSquareMinus {...props} color={color} size={size} className={className} />;
}

function Trash({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <PiTrashLight {...props} color={color} size={size} className={className} />;
}

function LeftChevron({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <FaAngleLeft {...props} color={color} size={size} className={className} />;
}

function RightChevron({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <FaAngleRight {...props} color={color} size={size} className={className} />;
}

function DownChevron({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <FaAngleDown {...props} color={color} size={size} className={className} />;
}

function Home({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <AiFillHome {...props} color={color} size={size} className={className} />;
}

function Shop({ size = "24", color = "currentColor", className, ...props }: IconBaseProps) {
  return <GiFruitBowl {...props} color={color} size={size} className={className} />;
}

export const Icons = {
  CartFill,
  StarFill,
  StarHalfFill,
  StarStroke,
  Plus,
  Minus,
  Trash,
  LeftChevron,
  RightChevron,
  DownChevron,
  Home,
  Shop,
};
