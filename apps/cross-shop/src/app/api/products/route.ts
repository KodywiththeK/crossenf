import { queryParams } from "@/constant/params";
import { getPaginatedProducts } from "@/service/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { page, limit, sort } = queryParams;
  const pageValue = Number(req.nextUrl.searchParams.get(page.key)) || page.defaultValue;
  const limitValue = Number(req.nextUrl.searchParams.get(limit.key)) || limit.defaultValue;
  const sortValue = req.nextUrl.searchParams.get(sort.key) || sort.defaultValue;

  return getPaginatedProducts(pageValue, limitValue, sortValue)
    .then((data) => NextResponse.json(data))
    .catch((error) => new Response(JSON.stringify({ error: error.message }), { status: 500 }));
}
