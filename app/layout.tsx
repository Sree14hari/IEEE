import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SiteShell } from "@/components/custom/site-shell";
import {
	DEFAULT_OG_IMAGE,
	SEO_KEYWORDS,
	SITE_DESCRIPTION,
	SITE_NAME,
	SITE_URL,
} from "@/lib/seo";

import "./globals.css";

const font = localFont({
	src: [
		{
			path: "../fonts/GTWalsheimPro-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/GTWalsheimPro-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../fonts/GTWalsheimPro-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-display",
});

const fontMono = Fira_Mono({
	weight: ["400", "500"],
	subsets: ["latin"],
	variable: "--font-mono",
});

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL);

export const metadata: Metadata = {
	metadataBase,
	applicationName: SITE_NAME,
	title: {
		default: `${SITE_NAME} | Official Website`,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	keywords: SEO_KEYWORDS,
	authors: [{ name: SITE_NAME }],
	creator: SITE_NAME,
	publisher: SITE_NAME,
	referrer: "origin-when-cross-origin",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: "/",
		title: `${SITE_NAME} | Official Website`,
		description: SITE_DESCRIPTION,
		siteName: SITE_NAME,
		locale: "en_IN",
		images: [
			{
				url: DEFAULT_OG_IMAGE,
				width: 1200,
				height: 630,
				alt: `${SITE_NAME} logo`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: `${SITE_NAME} | Official Website`,
		description: SITE_DESCRIPTION,
		images: [DEFAULT_OG_IMAGE],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-video-preview": -1,
			"max-snippet": -1,
		},
	},
	icons: {
		icon: [
			{ url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
			{ url: "/favicon.svg", type: "image/svg+xml" },
		],
		shortcut: ["/favicon.ico"],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
	},
	category: "technology",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${font.variable} ${fontMono.variable}`}>
			<body>
				<SiteShell>{children}</SiteShell>
			</body>
		</html>
	);
}
