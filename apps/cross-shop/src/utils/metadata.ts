import { siteMetadata } from "@/constant/metadata";
import { Metadata } from "next";

export function generateMetadata(
  page: keyof typeof siteMetadata,
  overrides?: Partial<Metadata>,
): Metadata {
  const meta = siteMetadata[page] || siteMetadata.global;

  return {
    title: meta.title,
    description: meta.description,
    icons: {
      icon: siteMetadata.global.favicon,
      apple: siteMetadata.global.appleTouchIcon,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.url,
      images: [
        {
          url: siteMetadata.global.ogImage,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [siteMetadata.global.twitterImage],
    },
    viewport:
      "width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover, user-scalable=no",
    ...overrides, // 필요하면 추가 메타데이터 덮어쓰기 가능
  };
}
