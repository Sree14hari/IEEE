import EventCard from "@/components/custom/event-card";
import { events } from "@/lib/data";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturedEvents() {
	// Get the top 3 events
	const featuredEvents = events.slice(0, 3);

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
				{featuredEvents.map((event) => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
		</section>
	);
}
