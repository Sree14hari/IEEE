
'use client';
import { BreakpointDebug } from "@/components/custom/breakpoint-debug";
import Logo from "@/components/custom/logo";
import { Button } from "@/components/ui/button";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "@/components/ui/dropdown";
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
	SidebarLabel,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
	IconMenu2,
	IconX,
	IconChevronRight,
	IconChevronDown,
	IconChevronUp,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Fira_Mono } from "next/font/google";
import localFont from "next/font/local";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PWA_LINK } from "@/lib/constants";
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
	{ label: "Events", url: "/events" },
	{ label: "About", url: "/about" },
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
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isExcomOpen, setIsExcomOpen] = useState(false);

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
										<Dropdown>
											<DropdownButton as={NavbarItem}>
												Excom
												<IconChevronDown />
											</DropdownButton>
											<DropdownMenu>
												<DropdownItem href="/excom/2025">2025</DropdownItem>
												<DropdownItem href="/excom/2024">2024</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</NavbarSection>
									<NavbarSpacer />
									<NavbarSection>
										<Link
											href={PWA_LINK}
											target="_blank"
											aria-label="Join Us"
											className="max-lg:hidden"
										>
											<RainbowButton>Join Us</RainbowButton>
										</Link>
										<Button plain className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
											<IconMenu2 />
										</Button>
									</NavbarSection>
								</Navbar>
							</div>
						</header>

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
															<IconChevronRight className="size-4 mr-1" />
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

						<AnimatePresence>
							{isSidebarOpen && (
								<>
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ type: 'spring', stiffness: 400, damping: 40 }}
										className="fixed inset-0 z-50 bg-zinc-900/50 backdrop-blur-sm lg:hidden"
										onClick={() => setIsSidebarOpen(false)}
									/>
									<motion.div
										initial={{ x: "100%" }}
										animate={{ x: "0%" }}
										exit={{ x: "100%" }}
										transition={{ type: 'spring', stiffness: 400, damping: 40 }}
										className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-zinc-900 lg:hidden"
									>
										<Sidebar>
											<SidebarHeader>
												<Button
													plain
													onClick={() => setIsSidebarOpen(false)}
													className="ml-auto"
												>
													<IconX />
												</Button>
											</SidebarHeader>
											<SidebarBody>
												<SidebarSection>
													{navItems.map((item) => (
														<SidebarItem key={item.url} href={item.url} onClick={() => setIsSidebarOpen(false)}>
															<SidebarLabel>{item.label}</SidebarLabel>
														</SidebarItem>
													))}
													<SidebarItem onClick={() => setIsExcomOpen(!isExcomOpen)}>
														<SidebarLabel>Excom</SidebarLabel>
														{isExcomOpen ? <IconChevronUp className="ml-auto" /> : <IconChevronDown className="ml-auto" />}
													</SidebarItem>
													<AnimatePresence>
														{isExcomOpen && (
															<motion.div
																initial={{ height: 0, opacity: 0 }}
																animate={{ height: 'auto', opacity: 1 }}
																exit={{ height: 0, opacity: 0 }}
																className="overflow-hidden flex flex-col"
															>
																<SidebarItem href="/excom/2025" onClick={() => setIsSidebarOpen(false)} className="pl-8">
																	<SidebarLabel>2025</SidebarLabel>
																</SidebarItem>
																<SidebarItem href="/excom/2024" onClick={() => setIsSidebarOpen(false)} className="pl-8">
																	<SidebarLabel>2024</SidebarLabel>
																</SidebarItem>
															</motion.div>
														)}
													</AnimatePresence>
												</SidebarSection>
												<SidebarSection>
													<SidebarItem href={PWA_LINK} target="_blank" onClick={() => setIsSidebarOpen(false)}>
														<RainbowButton className="w-full">Join Us</RainbowButton>
													</SidebarItem>
												</SidebarSection>
											</SidebarBody>
										</Sidebar>
									</motion.div>
								</>
							)}
						</AnimatePresence>
					</div>
				</TooltipProvider>
			</body>
		</html>
	);
}

    