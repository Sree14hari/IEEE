"use client";

import UpcomingEventCard from "@/components/custom/upcoming-event-card";
import { Button } from "@/components/ui/button";
import { events as upcomingEvents } from "@/lib/data";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRef } from "react";

export default function UpcomingEvents() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = direction === "left" ? -324 : 324;
			scrollContainerRef.current.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};

	if (upcomingEvents.length === 0) {
		return (
			<div className="text-center py-12">
				<h3 className="text-2xl font-bold tracking-tight mb-4">
					Upcoming Events
				</h3>
				<p className="text-muted-foreground">More events coming soon...</p>
			</div>
		);
	}

	return (
		<div>
			<h3 className="text-2xl font-bold tracking-tight text-center mb-6">
				Upcoming Events
			</h3>

			{/* Mobile: Vertical Grid */}
			<div className="grid grid-cols-1 gap-6 md:hidden">
				{upcomingEvents.map((event) => (
					<div key={event.id} className="flex justify-center">
						<UpcomingEventCard event={event} />
					</div>
				))}
			</div>

			{/* Desktop: Horizontal Scroll */}
			<div className="relative hidden md:block">
				<div
					ref={scrollContainerRef}
					className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory px-4"
					style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
				>
					{upcomingEvents.map((event) => (
						<UpcomingEventCard key={event.id} event={event} />
					))}
				</div>

				<div className="flex justify-center items-center gap-4 mt-4">
					<Button
						plain
						onClick={() => scroll("left")}
						className="rounded-full !p-2 bg-white/50 hover:bg-white/80"
					>
						<IconChevronLeft className="size-6" />
					</Button>
					<Button
						plain
						onClick={() => scroll("right")}
						className="rounded-full !p-2 bg-white/50 hover:bg-white/80"
					>
						<IconChevronRight className="size-6" />
					</Button>
				</div>
			</div>
		</div>
	);
}
