import EventCard from "@/components/custom/event-card";

export default async function EventList() {
	let allEvents = [];
	try {
		const res = await fetch(
			"https://ieee-events-api.ieeesbcesb20.workers.dev/events",
			{
				cache: "no-store",
			},
		);
		const eventsData = await res.json();
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		allEvents = eventsData.flat().map((e: any) => ({
			id: e.id,
			title: e.title,
			date: e.event_date,
			image: e.image_url,
			hint: e.description || e.title,
			link: e.registration_link,
		}));
	} catch (error) {
		console.error("Failed to fetch all events:", error);
	}

	return (
		<div className="mt-12">
			<h3 className="text-2xl font-bold tracking-tight text-center">
				All Events
			</h3>
			<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
{allEvents.map((event: any) => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
		</div>
	);
}
