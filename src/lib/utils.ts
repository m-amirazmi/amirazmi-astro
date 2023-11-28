import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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