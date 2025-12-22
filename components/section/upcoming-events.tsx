"use client";

import UpcomingEventCard from "@/components/custom/upcoming-event-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface Event {
	id: string;
	title: string;
	date: string;
	image: string;
	hint: string;
}

export default function UpcomingEvents() {
	const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
	const [pastEvents, setPastEvents] = useState<Event[]>([]);
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const upcomingResponse = await fetch("/assets/upcoming_events.json");
				const upcomingData = await upcomingResponse.json();
				setUpcomingEvents(upcomingData);

				const pastResponse = await fetch("/assets/past_events.json");
				const pastData = await pastResponse.json();
				setPastEvents(pastData);
			} catch (error) {
				console.error("Error fetching events:", error);
			}
		};
		fetchEvents();
	}, []);

	const checkScrollButtons = useCallback(() => {
		if (scrollContainerRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } =
				scrollContainerRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
		}
	}, []);

	useEffect(() => {
		// Initial check with a small delay to ensure DOM is ready
		const timer = setTimeout(() => {
			checkScrollButtons();
		}, 100);

		const container = scrollContainerRef.current;
		if (container) {
			container.addEventListener("scroll", checkScrollButtons);
			window.addEventListener("resize", checkScrollButtons);
			return () => {
				clearTimeout(timer);
				container.removeEventListener("scroll", checkScrollButtons);
				window.removeEventListener("resize", checkScrollButtons);
			};
		}

		return () => clearTimeout(timer);
	}, [checkScrollButtons, upcomingEvents]);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = 400;
			const newScrollLeft =
				scrollContainerRef.current.scrollLeft +
				(direction === "left" ? -scrollAmount : scrollAmount);

			scrollContainerRef.current.scrollTo({
				left: newScrollLeft,
				behavior: "smooth",
			});
		}
	};

	if (upcomingEvents.length === 0 && pastEvents.length === 0) {
		return (
			<div className="text-center py-12">
				<h3 className="text-2xl font-bold tracking-tight mb-4">Events</h3>
				<p className="text-muted-foreground">Loading events...</p>
			</div>
		);
	}

	return (
		<div className="space-y-12">
			{upcomingEvents.length > 0 && (
				<div>
					<h3 className="text-2xl font-bold tracking-tight text-center mb-6">
						Upcoming Events
					</h3>

					{/* Horizontal Scrollable Container */}
					<div className="relative">
						<div
							ref={scrollContainerRef}
							className="overflow-x-auto pb-4 scrollbar-hide"
						>
							<div className="flex gap-6 px-4">
								{upcomingEvents.map((event) => (
									<UpcomingEventCard key={event.id} event={event} />
								))}
							</div>
						</div>

						{/* Scroll Buttons */}
						<div className="flex justify-center gap-4 mt-6">
							<Button
								onClick={() => scroll("left")}
								disabled={!canScrollLeft}
								outline
								className="gap-2"
							>
								<ChevronLeft className="h-5 w-5" />
								Previous
							</Button>
							<Button
								onClick={() => scroll("right")}
								disabled={!canScrollRight}
								outline
								className="gap-2"
							>
								Next
								<ChevronRight className="h-5 w-5" />
							</Button>
						</div>
					</div>
				</div>
			)}

			{upcomingEvents.length > 0 && pastEvents.length > 0 && (
				<div className="border-t-2 border-dashed border-zinc-200" />
			)}

			{pastEvents.length > 0 && (
				<div>
					<h3 className="text-2xl font-bold tracking-tight text-center mb-6">
						Past Events
					</h3>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{pastEvents.map((event) => (
							<div key={event.id} className="flex justify-center">
								<UpcomingEventCard event={event} />
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
