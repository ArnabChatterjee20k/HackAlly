import HackathonCard from "@/components/HackathonCard";
import {getEvents} from "@/db/utils/events";
import React from "react";
// import {events} from "@/dumpData"

export default async function page() {
  const events = await getEvents();
  console.log({events})
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-7 px-3 md:px-32 py-7 max-w-[1500px] mx-auto">
      {events.map(({id,title,starts_at,ends_at,is_online,registrations_count,themes,displayed_location,organization_name}) => (
        <HackathonCard id={id} starts_at={starts_at} ends_at={ends_at} title={title} displayed_location={displayed_location} is_online={is_online} organisation_name={organization_name} registrations_count={registrations_count} themes={themes}/>
      ))}
    </section>
  );
}
