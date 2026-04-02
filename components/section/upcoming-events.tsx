"use client";

import UpcomingEventCard from "@/components/custom/upcoming-event-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface Event {
	id: string;
	title: string;
	date: string;
	image: string;
	hint: string;
	link?: string;
	organizer?: string;
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
				const response = await fetch(
					"https://ieee-events-api.ieeesbcesb20.workers.dev/events",
				);
				const data = await response.json();
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				const mappedData = data.flat().map((e: any) => ({
					id: e.id,
					title: e.title,
					date: e.event_date,
					image: e.image_url || "/placeholder.svg", // Fallback image
					hint: e.description || e.title,
					link: e.registration_link,
				}));
				setUpcomingEvents(mappedData);

				const pastResponse = await fetch(
					"https://ieee-events-api.ieeesbcesb20.workers.dev/pastevents",
				);
				const pastData = await pastResponse.json();
				const mappedPastData = pastData
					.flat()
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					.map((e: any) => ({
						id: e.id,
						title: e.title,
						date: e.event_date,
						image: e.image_url || "/placeholder.svg", // Fallback image
						hint: e.description || e.title,
						link: e.registration_link,
						organizer: e.organizer,
					}))
					.sort((a: Event, b: Event) => {
						const parseDate = (dStr: string) => {
							if (!dStr) return 0;
							const match = dStr.match(/(\d{2})\/(\d{4})/);
							if (!match) return 0;
							const month = match[1];
							const year = match[2];
							const dayMatch = dStr.match(/(\d{1,2})[^\/]*\/\d{2}\/\d{4}/);
							const day = dayMatch ? dayMatch[1].padStart(2, "0") : "01";
							return new Date(`${year}-${month}-${day}T00:00:00Z`).getTime();
						};
						return parseDate(b.date) - parseDate(a.date);
					});
				setPastEvents(mappedPastData);
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
		if (upcomingEvents.length === 0) return;

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
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{pastEvents.map((event) => (
							<div
								key={event.id}
								className="group flex flex-col justify-between p-6 rounded-2xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900/50 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300"
							>
								<div>
									<div className="flex justify-between items-center mb-4">
										<span className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
											{event.date}
										</span>
										{event.organizer && (
											<span className="text-xs font-bold px-3 py-1 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-full">
												{event.organizer}
											</span>
										)}
									</div>
									<h4 className="text-lg font-semibold text-zinc-900 dark:text-white leading-tight">
										{event.title}
									</h4>
								</div>
								{event.link && (
									<Link
										href={event.link}
										target="_blank"
										className="mt-6 inline-block"
									>
										<Button outline className="w-full">
											View Details
										</Button>
									</Link>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
