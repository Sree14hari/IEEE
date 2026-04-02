"use client";

import { BreakpointDebug } from "@/components/custom/breakpoint-debug";
import { SplashScreen } from "@/components/custom/splash-screen";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { PWA_LINK } from "@/lib/constants";
import React, { useState } from "react";
import Image from "next/image";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNavMenu,
	MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import {
	Dropdown,
	DropdownButton,
	DropdownItem,
	DropdownMenu,
} from "@/components/ui/dropdown";
import { Link } from "@/components/ui/link";
import { IconChevronDown } from "@tabler/icons-react";

const navItems = [
	{ name: "Events", link: "/events" },
	{ name: "Societies", link: "/societies" },
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

export function SiteShell({ children }: { children: React.ReactNode }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="relative isolate flex min-h-svh w-full flex-col bg-white dark:bg-zinc-900">
			<SplashScreen />
			<Navbar>
				<NavBody>
					<a href="/" className="flex items-center">
						<Image
							src="/logo.png"
							alt="IEEE Logo"
							width={100}
							height={50}
							className="filter-black w-16 h-auto md:w-24"
						/>
					</a>
					<div className="hidden lg:flex items-center gap-6">
						<NavItems items={navItems} />
						<Dropdown>
							<DropdownButton
								id="excom-dropdown-button"
								className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 font-medium text-sm flex items-center gap-1"
							>
								Excom
								<IconChevronDown size={16} />
							</DropdownButton>
							<DropdownMenu>
								<DropdownItem href="/excom/2025">2025</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>

					<div className="flex items-center gap-4">
						<div className="hidden lg:flex">
							<Link href={PWA_LINK} target="_blank" aria-label="Join Us">
								<RainbowButton>Join Us</RainbowButton>
							</Link>
						</div>
						<div className="lg:hidden">
							<MobileNavToggle
								isOpen={isMobileMenuOpen}
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							/>
						</div>
					</div>
				</NavBody>
				<MobileNavMenu
					isOpen={isMobileMenuOpen}
					onClose={() => setIsMobileMenuOpen(false)}
				>
					<div className="flex flex-col items-center gap-6">
						<NavItems
							items={navItems}
							onItemClick={() => setIsMobileMenuOpen(false)}
							className="text-xl"
						/>
						<div className="flex flex-col items-center gap-4">
							<h3 className="text-lg font-medium text-zinc-500">Excom</h3>
							<Link
								href="/excom/2025"
								className="px-4 py-2 text-xl text-neutral-600 dark:text-neutral-300"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								2025
							</Link>
						</div>
						<Link
							href={PWA_LINK}
							target="_blank"
							aria-label="Join Us"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<RainbowButton>Join Us</RainbowButton>
						</Link>
					</div>
				</MobileNavMenu>
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
				Copyright © 2025 SHR - All rights reserved.
			</p>

			<BreakpointDebug />
		</div>
	);
}
