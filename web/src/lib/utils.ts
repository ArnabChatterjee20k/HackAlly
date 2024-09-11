import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum STATUS {
  ONGOING = "Ongoing",
  UPCOMING = "Upcoming",
  OVER = "Over",
  ERROR = "ERROR",
}

export function getEventDateStatus(
  start: string | null,
  end: string | null
): STATUS {
  if (!start && !end) return STATUS.ERROR;
  const now = new Date();
  const startDate = new Date(start || "");
  const endDate = new Date(end || "");

  if (now < startDate) {
    return STATUS.UPCOMING;
  } else if (now >= startDate && now <= endDate) {
    return STATUS.ONGOING;
  } else {
    return STATUS.OVER;
  }
}


export function getAvatarName(title:string){
  const words = title.split(" ").map(word=>word[0])
  return words.join("")
}