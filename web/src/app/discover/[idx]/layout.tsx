import Blob from "@/icons/Blob";
import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getEventById } from "@/db/utils/events";

export default async function layout({children,params}:{ params: { idx: string } } & PropsWithChildren) {
  const event = await getEventById(params.idx)
  return (
    <html>
      <body>
        <header className="relative">
          <div className="blob-header flex flex-col bg-[#1E40AF] min-h-[9rem] sm:rounded-bl-[70px] relative overflow-hidden">
            <Blob className="size-56 absolute -bottom-36 -left-12" />
            <Blob className="size-64 absolute left-[25%] rotate-90 -top-44" />
            <Blob className="hidden md:block size-96 absolute -rotate-[60deg] right-0 -top-5" />
            <div className="flex max-w-[1800px] px-8 pt-7 md:px-28 z-10 md:pt-8">
              <h1 className="font-nunito text-white font-black text-4xl">
                hackAlly
              </h1>
            </div>
          </div>
          <div className="absolute -bottom-20 w-full mx-auto">
            <div className="flex bg-white w-[90%] sm:w-[40%] mx-auto gap-3 rounded-sm">
              <Avatar className="rounded-tl-sm rounded-bl-sm rounded-tr-none rounded-br-none size-32">
                <AvatarImage src={event?.thumbnail_url} alt="@shadcn" />
                <AvatarFallback className="rounded-tl-sm rounded-bl-sm rounded-tr-none rounded-br-none">CN</AvatarFallback>
              </Avatar>
              <div className="w-full flex flex-col md:flex-row items-center justify-between px-1 md:px-6 py-2">
                <div>
                  <h3 className="font-nunito font-bold text-xl md:text-2xl">Searching for a team?</h3>
                  <p className="font-nunito font-semibold text-base md:text-xl">
                    Use <strong className="text-blue-900">hackAlly</strong>
                  </p>
                </div>
                <Button className="bg-blue-900 text-white font-bold w-full md:w-auto">BUILD NOW</Button>
              </div>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
