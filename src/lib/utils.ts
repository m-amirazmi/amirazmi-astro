import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { IPost } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugify = (text: string): string => {
  return text
    .toString()
    .replace(/\s+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const deslugify = (text: string): string => {
  return text.toString().replace(/-/g, " ");
};

export const dateFormat = (datetime: string): string => {
  const newDate = new Date(+datetime);
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = newDate.getDay();
  const month = monthList[newDate.getMonth()];
  const year = newDate.getFullYear();
  return `${day} ${month} ${year}`;
};

export const filterAndSortedPostList = (posts: IPost[], length = 0) => {
  const removeDeactivated = posts.filter((i) => !i.deactivate);
  const sortedByLatest = removeDeactivated.sort(
    (a, b) => +b.pubDate - +a.pubDate
  );
  if (length > 0) return sortedByLatest.slice(0, length);
  return sortedByLatest;
};