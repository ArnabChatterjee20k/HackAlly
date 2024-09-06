import HackathonCard from "@/components/HackathonCard";
import React from "react";
const data = Array(10).fill(10);
export default function page() {
  return (
    <section className="grid grid-cols-3 gap-5 px-32 py-7">
      {data.map(() => (
        <HackathonCard />
      ))}
    </section>
  );
}
