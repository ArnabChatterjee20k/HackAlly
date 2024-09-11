import DescriptionLoader from "@/components/DescriptionLoader";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { getEventById } from "@/db/utils/events";
import { getEventDateStatus, STATUS } from "@/lib/utils";
import { Dot } from "lucide-react";
import Link from "next/link";

import React from "react";


export default async function Page({ params }: { params: { idx: string } }) {
  const eventId = params.idx;
  const event = await getEventById(eventId);
  const status = getEventDateStatus(event?.starts_at, event?.ends_at);
  const title = event?.title;
  const isOnline = event?.is_online;
  const thumbnailURL = event?.thumbnail_url;
  const url = event?.url
  // @ts-ignore
  const description = event?.description;
  return (
    <section className="mt-28 pb-5">
      <Card className="shadow-none bg-white w-[90%] sm:w-[40%] mx-auto gap-3 rounded-sm p-8">
        <CardHeader className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <div className="flex items-center text-blue-950">
              {isOnline ? "Online" : "In-Person"}
              {status !== STATUS.ERROR ? (
                <>
                  <Dot />
                  {status}
                </>
              ) : null}
            </div>
            <h4 className="font-extrabold text-blue-950 text-2xl max-w-[90%] text-balance text-center md:text-left">
              {title}
            </h4>
          </div>
          <Button className="bg-blue-900 text-white font-bold w-full md:w-auto">
            <Link href={url}>
              APPLY NOW
            </Link>
          </Button>
        </CardHeader>
        <div className="px-6">
          <DescriptionLoader data={description} />
        </div>
      </Card>
    </section>
  );
}
