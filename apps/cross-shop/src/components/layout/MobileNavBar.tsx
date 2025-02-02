"use client";
import { route } from "@/constant/route";
import Link from "next/link";
import React from "react";

export default function MobileNavBar() {
  return (
    <nav className="border-t-border sticky bottom-0 z-40 flex items-center justify-around gap-1 border-t bg-gray-100 pb-3 pt-2 sm:hidden">
      {Object.values(route).map((item) => (
        <Link
          key={item.value}
          className="flex flex-col items-center px-2 text-sm font-semibold"
          href={item.path}
        >
          {item.icon({ size: 24 })}
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
