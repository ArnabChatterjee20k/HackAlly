import { getEvents } from "@/db/utils/events";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const data = await getEvents(Number(page),limit?parseInt(limit):null);
  return NextResponse.json(data);
}
