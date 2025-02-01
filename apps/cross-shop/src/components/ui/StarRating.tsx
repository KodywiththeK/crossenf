import { Icons } from "@common/design";
import React from "react";

type StarRatingProps = {
  rating: number;
  maxStars?: number; // 기본값: 5
  size?: number | string; // 기본값: 16
};

export default function StarRating({ rating, maxStars = 5, size = 16 }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Icons.StarFill key={`full-${i}`} size={size} />
      ))}
      {hasHalfStar && <Icons.StarHalfFill key="half" size={size} />}
      {[...Array(emptyStars)].map((_, i) => (
        <Icons.StarStroke key={`empty-${i}`} size={size} />
      ))}
      <span className="text-sm text-gray-600">({rating.toFixed(1)})</span>
    </div>
  );
}
