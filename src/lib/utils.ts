import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

type ConscructMetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(price);
}

export function consctructMetadata({
  title = "CaseCraft - custom high-quality phone cases",
  description = "Create custom hight-quality phone cases in seconds",
  image = "/thumnail.png",
  icons = "/favicon.ico",
}: ConscructMetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image }],
    },
    icons,
  };
}
