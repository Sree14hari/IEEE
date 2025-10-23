import { BreakpointDebug } from "@/components/custom/breakpoint-debug";
import Logo from "@/components/custom/logo";
import { Button } from "@/components/ui/button";
import {
	DropdownDescription,
	DropdownDivider,
	DropdownItem,
	DropdownLabel,
	DropdownMenu,
} from "@/components/ui/dropdown";
import { Link } from "@/components/ui/link";
import {
	Navbar,
	NavbarDivider,
	NavbarItem,
	NavbarSection,
	NavbarSpacer,
} from "@/components/ui/navbar";
import { RainbowButton } from "@/components/ui/rainbow-button";
import {
	Sidebar,
	SidebarBody,
	SidebarHeader,
	SidebarItem,
	SidebarSection,
} from "@/components/ui/sidebar";
import { Strong } from "@/components/ui/text";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
	IconArrowUpRight,
	IconBrandOpenSource,
	IconShieldLock,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Fira_Mono } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

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

import { PWA_LINK } from "@/lib/constants";
import "./globals.css";

const fontMono = Fira_Mono({
	weight: ["400", "500"],
	subsets: ["latin"],
	variable: "--font-mono",
});

const navItems = [
	{ label: "Events", url: "/events" },
	{ label: "Excom", url: "/excom" },
	{ label: "About", url: "/about" },
];

export const metadata: Metadata = {
	title: "IEEE SB SBCE",
	description:
		"Power What Next for Tech",
	// openGraph: {
	// 	title: "gider.im",
	// 	description:
	// 		"Free, privacy first, local first, no tracking, no ads, no data collection.",
	// 	url: "https://gider.im",
	// 	siteName: "gider.im",
	// 	locale: "en_US",
	// 	type: "website",
	// 	images: [
	// 		{
	// 			url: "https://gider.im/og.png",
	// 			width: 1200,
	// 			height: 630,
	// 			alt: "gider.im",
	// 		},
	// 	],
	// },
	
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const footerSections = [
	{
		title: "About IEEE",
		description:
			"IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.",
		links: [
			{ text: "Learn more about IEEE", href: "#" },
			{ text: "IEEE Mission & Vision", href: "#" },
		],
	},
	{
		title: "Locations",
		description:
			"IEEE has a global presence with seven offices internationally.",
		links: [{ text: "IEEE office locations", href: "#" }],
	},
	{
		title: "Membership",
		links: [
			{ text: "Join", href: "#" },
			{ text: "Renew", href: "#" },
			{ text: "Benefits", href: "#" },
			{ text: "IEEE Collabratec", href: "#" },
		],
	},
	{
		title: "Get involved",
		links: [
			{ text: "Conferences", href: "#" },
			{ text: "Local activities", href: "#" },
			{ text: "Publishing", href: "#" },
			{ text: "Societies", href: "#" },
			{ text: "Councils", href: "#" },
			{ text: "Standards", href: "#" },
			{ text: "Technical careers", href: "#" },
			{ text: "Volunteer", href: "#" },
		],
	},
	{
		title: "Connect with IEEE",
		isConnect: true,
		links: [
			{ text: "IEEE Collabratec", href: "#" },
			{ text: "Careers at IEEE", href: "#" },
			{ text: "IEEE Newsroom", href: "#" },
			{ text: "IEEE Media Kit", href: "#" },
			{ text: "IEEE Learning Network", href: "#" },
		],
	},
];

const footerBottomLinks = [
	{ text: "Home", href: "#" },
	{ text: "Contact & Support", href: "#" },
	{ text: "Accessibility", href: "#" },
	{ text: "Nondiscrimination Policy", href: "#" },
	{ text: "IEEE Ethics Reporting", href: "#" },
	{ text: "IEEE Privacy Policy", href: "#" },
	{ text: "Terms & Disclosures", href: "#" },
];

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${font.variable} ${fontMono.variable}`}>
			<head>
				<link
					rel="icon"
					type="image/png"
					href="/favicon-48x48.png"
					sizes="48x48"
				/>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
			</head>
			<body>
				<TooltipProvider delayDuration={0} disableHoverableContent>
					<div className="relative isolate flex min-h-svh w-full flex-col bg-white dark:bg-zinc-900">
						<header className="flex items-center px-4">
							<div className="min-w-0 flex-1">
								<Navbar>
									<Button href="/" plain>
										<Image
											src="/logo.png"
											alt="IEEE Logo"
											width={100}
											height={50}
											className="filter-black"
										/>
									</Button>
									<NavbarDivider className="max-lg:hidden" />
									<NavbarSection className="max-lg:hidden">
										{navItems.map((item) => (
											<NavbarItem key={item.url} href={item.url}>
												{item.label}
											</NavbarItem>
										))}
									</NavbarSection>
									<NavbarSpacer />
									<NavbarSection>
										<Link
											href={PWA_LINK}
											target="_blank"
											aria-label="Join Us"
										>
											<RainbowButton>Join Us</RainbowButton>
										</Link>
									</NavbarSection>
								</Navbar>
							</div>
						</header>

						<main className="flex flex-1 flex-col pb-2">
							<div className="grow p-6 lg:p-10 lg:pb-0">{children}</div>
						</main>

						<footer className="py-16 mx-6">
							<Logo className="mx-auto h-44 w-auto text-zinc-200 opacity-80" />
							<div className="mt-10 text-sm">
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
									{footerSections.map((section) => (
										<div key={section.title}>
											<h3 className="font-bold text-zinc-900 dark:text-white">{section.title}</h3>
											<ul className="mt-4 space-y-2">
												{section.links.map((link) => (
													<li key={link.text}>
														<Link
															href={link.href}
															className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
														>
															{link.text}
														</Link>
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
								<div className="mt-12 pt-8 border-t border-dashed flex flex-wrap justify-center items-center text-sm text-zinc-500">
									{footerBottomLinks.map((link, index) => (
										<React.Fragment key={link.text}>
											<Link href={link.href} className="hover:text-zinc-700 dark:hover:text-zinc-200">
												{link.text}
											</Link>
											{index < footerBottomLinks.length - 1 && (
												<span className="mx-2">|</span>
											)}
										</React.Fragment>
									))}
								</div>
							</div>
						</footer>
						
						<p className="text-center text-sm text-muted-foreground pb-12 mx-auto pt-4 border-dashed">
							Copyright © 2024 IEEE – All rights reserved.
						</p>

						<BreakpointDebug />
					</div>
				</TooltipProvider>
			</body>
		</html>
	);
}