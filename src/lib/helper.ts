import { sanityClient } from "sanity:client";
import type { HeroProps } from "./types";

export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };

  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  //  Formate date
  const parsedDate = new Date(date);
  const day = parsedDate.getDate();
  const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;
  const monthYear = parsedDate.toLocaleDateString("en", options);

  return `${dayWithSuffix} ${monthYear}`;
};

// Helper function to get specific hero variant
export const getHeroByVariant = (heroes: HeroProps[], variant: string) => {
  return heroes.find((hero) => hero.variant === variant);
};

export async function getSiteSettings() {
  try {
    const settings = await sanityClient.fetch('*[_type == "siteSettings"][0]');

    if (!settings) {
      console.warn("No site settings found in Sanity.");
      return { colorScheme: { preset: "default" } };
    }
    return settings;
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return { colorScheme: { preset: "default" } };
  }
}

// function to clean text
export const cleanText = (text: any) => {
  return text.replace(/[^\x20-\x7E]/g, "").trim();
};
