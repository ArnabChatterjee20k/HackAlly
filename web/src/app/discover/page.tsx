import HackathonCard from "@/components/HackathonCard";
import React from "react";
const data = Array(10).fill(10);
export default function page() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-7 px-3 md:px-32 py-7 max-w-[1500px] mx-auto">
      {data.map(() => (
        <HackathonCard />
      ))}
    </section>
  );
}
