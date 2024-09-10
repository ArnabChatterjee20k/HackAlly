"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function Header({ children }: PropsWithChildren) {
  const pathname = usePathname();
  if (pathname.startsWith("/discover/")) return;
  return (
    <header className=" bg-zinc-50 px-32 py-5">
      <div className="flex max-w-[1800px] mx-auto">
        <Link
          href="#"
          className="font-nunito font-black text-3xl text-gray-900 mb-4 md:mb-0"
        >
          hackAlly
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center"></nav>
      </div>
    </header>
  );
}
