export const revalidate = 0;
import connectToDB from "../db";
import events from "../models/Events";
import { IEvents } from "@/interfaces";
const DEFAULT_EVENTS_LIMIT = 20;
const DEFAULT_PAGE = 1;

export async function getEvents(
  page?: number,
  limit?: number
): Promise<IEvents[]> {
  await connectToDB();
  const currentPage = (page || DEFAULT_PAGE) - 1;
  const currentLimit = limit || DEFAULT_EVENTS_LIMIT;
  const data = (await events
    .find()
    .select("-description")
    .skip(currentPage * currentLimit)
    .limit(currentLimit)
    .lean()) as IEvents[];
  return data;
}

export async function getEventById(id: string) {
  await connectToDB();
  const data = await events.findOne({ id: id }).lean();
  return data;
}
