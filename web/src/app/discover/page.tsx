import HackathonCard from "@/components/HackathonCard";
import {getEvents} from "@/db/utils/events";
import React from "react";
import Discover from "./Discover";
// import {events} from "@/dumpData"

export default async function page() {
  const events = await getEvents(1);
  return <Discover events={events}/>
}
