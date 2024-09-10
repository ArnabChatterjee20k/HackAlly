import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <section className="max-w-[1500px]">
      <div className="bg-white flex justify-center items-center gap-3 max-w-[1000px] rounded-sm p-5">
        <div className="justify-center">
          <img
            src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/981/678/datas/medium_square.png"
            className="size-32"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <h3>Searching for a team?</h3>
            <p>
              Use <strong>HackAlly</strong>
            </p>
          </div>
          <Button className="bg-blue-800 hover:bg-blue-800" asChild>
            <Link href="/discover/id">Apply Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
