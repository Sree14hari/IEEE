import EventCard from "@/components/custom/event-card";

const events = [
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
	{
		id: "6",
		title: "Guest Lecture Series",
		date: "2025-02-05",
		image: "https://picsum.photos/seed/event6/800/600",
		hint: "lecture hall",
	},
];

export default function EventList() {
	return (
		<div className="mt-12">
			<h3 className="text-2xl font-bold tracking-tight">All Events</h3>
			<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{events.map((event) => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
		</div>
	);
}
