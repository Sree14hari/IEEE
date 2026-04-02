import UpcomingEvents from "@/components/section/upcoming-events";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Events",
	description:
		"Explore upcoming and past IEEE SB SBCE events, workshops, and technical programs.",
	alternates: {
		canonical: "/events",
	},
};

export default function Page() {
	return (
		<div className="mx-auto max-w-full px-4 sm:px-0 space-y-12">
			<UpcomingEvents />
		</div>
	);
}
