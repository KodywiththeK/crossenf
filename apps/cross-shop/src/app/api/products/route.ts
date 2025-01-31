import { getPaginatedProducts } from "@/service/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const page = Number(req.nextUrl.searchParams.get("page")) || 1;
  const limit = Number(req.nextUrl.searchParams.get("limit")) || 5;

  return getPaginatedProducts(page, limit)
    .then((data) => NextResponse.json(data))
    .catch((error) => new Response(JSON.stringify({ error }), { status: 500 }));
}
