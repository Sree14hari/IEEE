import EventList from "@/components/section/event-list";
import UpcomingEvents from "@/components/section/upcoming-events";

export default function Page() {
	return (
		<div className="mx-auto max-w-full lg:flex lg:items-start lg:gap-x-10 px-4 sm:px-0 flex-col">
			<div className="lg:mx-0 lg:flex-auto">
				<div className="mx-auto sm:text-left">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Events
					</h2>
					<p className="mt-2 text-lg leading-8 text-muted-foreground">
						Check out our upcoming events.
					</p>
				</div>
			</div>
			<UpcomingEvents />
			<EventList />
		</div>
	);
}
