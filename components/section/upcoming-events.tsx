import UpcomingEventCard from "@/components/custom/upcoming-event-card";

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
	return (
		<div>
			<h3 className="text-2xl font-bold tracking-tight text-center mb-6">
				Upcoming Events
			</h3>
			<div className="flex gap-6 overflow-x-auto pb-4">
				{upcomingEvents.map((event) => (
					<UpcomingEventCard key={event.id} event={event} />
				))}
			</div>
		</div>
	);
}
