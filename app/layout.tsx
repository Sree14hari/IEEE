
'use client';
import { BreakpointDebug } from "@/components/custom/breakpoint-debug";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { PWA_LINK } from "@/lib/constants";
import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	NavbarButton,
	MobileNavHeader,
	MobileNavToggle,
	MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Image from "next/image";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "@/components/ui/dropdown";
import { Link } from "@/components/ui/link";
import { IconChevronDown } from "@tabler/icons-react";

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

const navItems = [
	{ name: "Events", link: "/events" },
	{ name: "About", link: "/about" },
];

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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
				<div className="relative isolate flex min-h-svh w-full flex-col bg-white dark:bg-zinc-900">
					<Navbar>
						{/* Desktop Navigation */}
						<NavBody>
							<a href="/" className="flex items-center">
								<Image
									src="/logo.png"
									alt="IEEE Logo"
									width={100}
									height={50}
									className="filter-black"
								/>
							</a>
							<div className="flex items-center gap-2">
								<NavItems items={navItems} />
								<Dropdown>
									<DropdownButton className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 font-medium text-sm flex items-center gap-1">
										Excom
										<IconChevronDown size={16} />
									</DropdownButton>
									<DropdownMenu>
										<DropdownItem href="/excom/2025">2025</DropdownItem>
										<DropdownItem href="/excom/2024">2024</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</div>

							<div className="flex items-center gap-4">
								<Link href={PWA_LINK} target="_blank" aria-label="Join Us">
									<RainbowButton>Join Us</RainbowButton>
								</Link>
							</div>
						</NavBody>

						{/* Mobile Navigation */}
						<MobileNav>
							<MobileNavHeader>
								<a href="/" className="flex items-center">
									<Image
										src="/logo.png"
										alt="IEEE Logo"
										width={100}
										height={50}
										className="filter-black"
									/>
								</a>
								<MobileNavToggle
									isOpen={isMobileMenuOpen}
									onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								/>
							</MobileNavHeader>

							<MobileNavMenu
								isOpen={isMobileMenuOpen}
								onClose={() => setIsMobileMenuOpen(false)}
							>
								{navItems.map((item, idx) => (
									<a
										key={`mobile-link-${idx}`}
										href={item.link}
										onClick={() => setIsMobileMenuOpen(false)}
										className="relative text-neutral-600 dark:text-neutral-300"
									>
										<span className="block">{item.name}</span>
									</a>
								))}
								<a href="/excom/2025" onClick={() => setIsMobileMenuOpen(false)} className="relative text-neutral-600 dark:text-neutral-300">
									Excom 2025
								</a>
								<a href="/excom/2024" onClick={() => setIsMobileMenuOpen(false)} className="relative text-neutral-600 dark:text-neutral-300">
									Excom 2024
								</a>
								<div className="flex w-full max-w-xs flex-col gap-4">
									<Link href={PWA_LINK} target="_blank" aria-label="Join Us" className="w-full">
										<RainbowButton
											onClick={() => setIsMobileMenuOpen(false)}
											className="w-full h-9 px-3 text-sm"
										>
											Join Us
										</RainbowButton>
									</Link>
								</div>
							</MobileNavMenu>
						</MobileNav>
					</Navbar>

					<main className="flex flex-1 flex-col pb-24">
						<div className="grow p-6 lg:p-10 lg:pb-0">{children}</div>
					</main>

					<footer className="bg-black text-white py-12 px-6">
						<div className="mx-auto max-w-7xl">
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
								{footerSections.map((section) => (
									<div key={section.title}>
										<h3 className="font-bold text-white text-sm">{section.title}</h3>
										<ul className="mt-4 space-y-2">
											{section.links.map((link) => (
												<li key={link.text}>
													<Link
														href={link.href}
														className="text-zinc-300 hover:text-white flex items-center text-xs"
													>
														{/* <IconChevronRight className="size-4 mr-1" /> */}
														{link.text}
													</Link>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
							<div className="mt-12 pt-8 border-t border-dashed border-zinc-700 flex flex-wrap justify-center items-center text-xs text-zinc-400">
								{footerBottomLinks.map((link, index) => (
									<React.Fragment key={link.text}>
										<Link href={link.href} className="hover:text-white">
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
					
					<p className="text-center text-sm text-muted-foreground pb-12 mx-auto pt-4 border-dashed bg-black w-full">
						Copyright © 2025 SHR – All rights reserved.
					</p>

					<BreakpointDebug />

				</div>
			</body>
		</html>
	);
}
