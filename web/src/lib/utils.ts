import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSearchParams = (
  data: Record<string, string | string[] | number | number[] | boolean | undefined>
) => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined && value !== "") {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          if (val !== "") {
            params.append(key, val.toString());
          }
        });
      } else {
        params.append(key, value.toString());
      }
    }
  }

  return params.toString();
};

export function unescapeMarkdown(markdown: string): string {
  let cleaned = markdown;

  if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
    cleaned = cleaned.slice(1, -1);
  }

  cleaned = cleaned.replace(/\\n/g, "\n");
  cleaned = cleaned.replace(/\\\\/g, "\\");
  cleaned = cleaned
    .split("\n")
    .map((line) => line.replace(/^\s+/, ""))
    .join("\n");

  return cleaned;
}
