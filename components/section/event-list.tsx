import EventCard from "@/components/custom/event-card";
import { events } from "@/lib/data";

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
