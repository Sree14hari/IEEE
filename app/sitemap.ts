import fs from "node:fs/promises";
import path from "node:path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

type EventItem = {
	id: string;
};

const STATIC_ROUTES = [
	"/",
	"/about",
	"/events",
	"/societies",
	"/excom/2025",
	"/excom/2025/sb",
	"/excom/2025/cs",
	"/excom/2025/ias",
];

async function getEventIds(): Promise<string[]> {
	const publicDir = path.join(process.cwd(), "public", "assets");
	const upcomingPath = path.join(publicDir, "upcoming_events.json");
	const pastPath = path.join(publicDir, "past_events.json");

	try {
		const [upcomingRaw, pastRaw] = await Promise.all([
			fs.readFile(upcomingPath, "utf-8"),
			fs.readFile(pastPath, "utf-8"),
		]);
		const upcoming = JSON.parse(upcomingRaw) as EventItem[];
		const past = JSON.parse(pastRaw) as EventItem[];
		const ids = [...upcoming, ...past]
			.map((event) => event.id)
			.filter(Boolean);

		return Array.from(new Set(ids));
	} catch {
		return [];
	}
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const now = new Date();
	const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
		url: `${SITE_URL}${route}`,
		lastModified: now,
		changeFrequency: route === "/" ? "weekly" : "monthly",
		priority: route === "/" ? 1 : 0.7,
	}));

	const eventIds = await getEventIds();
	const eventEntries: MetadataRoute.Sitemap = eventIds.map((id) => ({
		url: `${SITE_URL}/events/${id}`,
		lastModified: now,
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	return [...staticEntries, ...eventEntries];
}
