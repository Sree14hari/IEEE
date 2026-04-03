import EventCard from "@/components/custom/event-card";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export async function FeaturedEvents() {
	let featuredEvents = [];
	try {
		const res = await fetch(
			"https://ieee-events-api.ieeesbcesb20.workers.dev/events",
			{
				cache: "no-store",
			},
		);
		const events = await res.json();
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		featuredEvents = events.flat().slice(0, 3).map((e: any) => ({
			id: e.id,
			title: e.title,
			date: e.event_date,
			image: e.image_url,
			hint: e.description || e.title,
			link: e.registration_link,
		}));
	} catch (error) {
		console.error("Failed to fetch featured events:", error);
	}

	return (
		<section className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-8">
			<div className="flex items-center justify-between mb-8">
				<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-display">
					Featured Events
				</h2>
				<Link href="/events">
					<Button
						plain
						className="group text-muted-foreground hover:text-foreground"
					>
						View all events
						<MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
				</Link>
			</div>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{featuredEvents.map((event: any) => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
		</section>
	);
}
