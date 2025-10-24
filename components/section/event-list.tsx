import EventCard from "@/components/custom/event-card";

const events = [
	{
		id: "1",
		title: "Poster Design Competition",
		date: "2025-06-23",
		image: "/Events/Poster Designing Competition.jpg",
		hint: "tech conference",
	},
	{
		id: "2",
		title: "Workshop on AI",
		date: "2024-11-05",
		image: "/Events/AI Insight.jpg",
		hint: "AI workshop",
	},
	{
		id: "3",
		title: "Networking Gala",
		date: "2024-11-20",
		image: "/Events/Brush and Blush.jpg",
		hint: "networking event",
	},
	{
		id: "4",
		title: "Hackathon 2024",
		date: "2024-12-01",
		image: "/Events/Cine Show.jpg",
		hint: "hackathon code",
	},
	{
		id: "5",
		title: "Student Chapter Meetup",
		date: "2025-01-10",
		image: "/Events/Drone Workshop.jpg",
		hint: "student meetup",
	},
	{
		id: "6",
		title: "Guest Lecture Series",
		date: "2025-02-05",
		image: "/Events/Quiz Competition.jpg",
		hint: "lecture hall",
	},
];

export default function EventList() {
	return (
		<div className="mt-12">
			<h3 className="text-2xl font-bold tracking-tight text-center">
				All Events
			</h3>
			<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{events.map((event) => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
		</div>
	);
}
