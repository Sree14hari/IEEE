import EventCard from "@/components/custom/event-card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface ApiEvent {
	id: string;
	title: string;
	event_date: string;
	image_url: string;
	description?: string;
	registration_link?: string;
}

interface EventProp {
	id: string;
	title: string;
	date: string;
	image: string;
	hint: string;
	link?: string;
	isPast: boolean;
}

const parseEventDate = (dStr: string): number => {
	if (!dStr) return 0;

	// Try standard parse first (works for "4 April 2026", "2026-04-04", etc.)
	const parsed = Date.parse(dStr);
	if (!Number.isNaN(parsed)) return parsed;

	// Handle DD/MM/YYYY or D/M/YYYY
	const dmyMatch = dStr.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
	if (dmyMatch) {
		const day = Number.parseInt(dmyMatch[1], 10);
		const month = Number.parseInt(dmyMatch[2], 10) - 1;
		const year = Number.parseInt(dmyMatch[3], 10);
		return new Date(year, month, day).getTime();
	}

	// Handle MM/YYYY or M/YYYY
	const myMatch = dStr.match(/^(\d{1,2})[\/\-](\d{4})/);
	if (myMatch) {
		const month = Number.parseInt(myMatch[1], 10) - 1;
		const year = Number.parseInt(myMatch[2], 10);
		return new Date(year, month, 1).getTime();
	}

	return 0;
};

export async function FeaturedEvents() {
	let featuredEvents: EventProp[] = [];
	try {
		const res = await fetch(
			"https://ieee-events-api.ieeesbcesb20.workers.dev/events",
			{
				cache: "no-store",
			},
		);
		const events = (await res.json()) as ApiEvent[][];

		const today = new Date();
		today.setHours(0, 0, 0, 0);
		const todayTimestamp = today.getTime();

		featuredEvents = events
			.flat()
			.sort(
				(a: ApiEvent, b: ApiEvent) =>
					parseEventDate(b.event_date) - parseEventDate(a.event_date),
			)
			.slice(0, 3)
			.map((e: ApiEvent) => {
				const eventTime = parseEventDate(e.event_date);
				return {
					id: e.id,
					title: e.title,
					date: e.event_date,
					image: e.image_url,
					hint: e.description || e.title,
					link: e.registration_link,
					isPast: eventTime > 0 && eventTime < todayTimestamp,
				};
			});
	} catch (error) {
		console.error("Failed to fetch featured events:", error);
	}

	return (
		<section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<div className="flex items-center justify-between gap-4 mb-8">
				<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-display whitespace-nowrap">
					Featured Events
				</h2>
				<Link href="/events">
					<Button
						plain
						className="group text-muted-foreground hover:text-foreground whitespace-nowrap"
					>
						View all
						<span className="hidden sm:inline"> events</span>
						<MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 shrink-0" />
					</Button>
				</Link>
			</div>

			<div className="-mx-4 px-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory flex gap-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0">
				{featuredEvents.map((event) => (
					<div
						key={event.id}
						className="w-[85vw] max-w-[320px] flex-shrink-0 snap-center sm:w-auto sm:max-w-none sm:flex-shrink"
					>
						<EventCard event={event} />
					</div>
				))}
			</div>
		</section>
	);
}
