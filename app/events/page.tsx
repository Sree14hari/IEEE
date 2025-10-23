import EventList from "@/components/section/event-list";
import UpcomingEvents from "@/components/section/upcoming-events";

export default function Page() {
	return (
		<div className="mx-auto max-w-full px-4 sm:px-0 space-y-12">
			<UpcomingEvents />
			<div className="border-t-2 border-dashed border-zinc-200" />
			<EventList />
		</div>
	);
}
