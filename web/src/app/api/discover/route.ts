import { getEvents } from "@/db/utils/events";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = searchParams.get("page");
  const data = await getEvents(Number(page));
  return NextResponse.json(data);
}
