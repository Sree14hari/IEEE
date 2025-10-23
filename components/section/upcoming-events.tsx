'use client';

import UpcomingEventCard from "@/components/custom/upcoming-event-card";
import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRef } from "react";

const upcomingEvents = [
	{
		id: "1",
		title: "Annual Tech Conference",
		date: "2024-10-15",
		image: "https://picsum.photos/seed/event1/800/600",
		hint: "tech conference",
	},
	{
		id: "2",
		title: "Workshop on AI",
		date: "2024-11-05",
		image: "https://picsum.photos/seed/event2/800/600",
		hint: "AI workshop",
	},
	{
		id: "3",
		title: "Networking Gala",
		date: "2024-11-20",
		image: "https://picsum.photos/seed/event3/800/600",
		hint: "networking event",
	},
	{
		id: "4",
		title: "Hackathon 2024",
		date: "2024-12-01",
		image: "https://picsum.photos/seed/event4/800/600",
		hint: "hackathon code",
	},
    {
		id: "5",
		title: "Student Chapter Meetup",
		date: "2025-01-10",
		image: "https://picsum.photos/seed/event5/800/600",
		hint: "student meetup",
	},
];

export default function UpcomingEvents() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -324 : 324;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

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
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {upcomingEvents.map((event) => (
						<UpcomingEventCard key={event.id} event={event} />
                    ))}
                </div>

                <div className="flex justify-center items-center gap-4 mt-4">
                    <Button plain onClick={() => scroll('left')} className="rounded-full !p-2 bg-white/50 hover:bg-white/80">
                        <IconChevronLeft className="size-6" />
                    </Button>
                    <Button plain onClick={() => scroll('right')} className="rounded-full !p-2 bg-white/50 hover:bg-white/80">
                        <IconChevronRight className="size-6" />
                    </Button>
                </div>
			</div>
		</div>
	);
}
