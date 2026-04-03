import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	MoveLeft,
	ExternalLink,
	Calendar,
	Tag,
	MapPin,
	ArrowLeft,
} from "lucide-react";
import type { Metadata } from "next";
import { RainbowButton } from "@/components/ui/rainbow-button";

// --------------------
// Types
// --------------------
interface Event {
	id: string;
	title: string;
	date: string;
	image: string;
	hint: string;
	description?: string;
	link?: string;
	location?: string;
}

// --------------------
// Data fetch
// --------------------
async function getEventData(id: string): Promise<Event | null> {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	let event: any;

	try {
		// Fetch upcoming events
		const resUpcoming = await fetch(
			"https://ieee-events-api.ieeesbcesb20.workers.dev/events",
			{ next: { revalidate: 60 } },
		);
		const dataUpcoming = await resUpcoming.json();
		const upcoming = dataUpcoming.flat() || [];
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		event = upcoming.find((e: any) => e.id === id);

		if (!event) {
			const resPast = await fetch(
				"https://ieee-events-api.ieeesbcesb20.workers.dev/pastevents",
				{ next: { revalidate: 60 } },
			);
			const dataPast = await resPast.json();
			const past = dataPast.flat() || [];
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			event = past.find((e: any) => e.id === id);
		}

		if (event) {
			return {
				id: event.id,
				title: event.title,
				date: event.event_date,
				image: event.image_url,
				hint: event.description ? "Event" : "Workshop",
				description: event.description,
				link: event.registration_link,
				location: event.location,
			};
		}
	} catch (error) {
		console.error("Error fetching event:", error);
		return null;
	}

	return null;
}

export async function generateMetadata(props: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const params = await props.params;
	const event = await getEventData(params.id);

	if (!event) {
		return {
			title: "Event Not Found",
			description: "The requested event could not be found.",
		};
	}

	const description =
		event.description ??
		`${event.title} by IEEE SB SBCE. Explore event details, category, and registration information.`;

	return {
		title: `${event.title} | Events`,
		description,
		alternates: {
			canonical: `/events/${event.id}`,
		},
		openGraph: {
			title: event.title,
			description,
			type: "article",
			url: `/events/${event.id}`,
			images: [
				{
					url: event.image,
					alt: event.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: event.title,
			description,
			images: [event.image],
		},
	};
}

// --------------------
// Page
// --------------------
export default async function EventPage(props: {
	params: Promise<{ id: string }>;
}) {
	const params = await props.params;
	const event = await getEventData(params.id);
	if (!event) notFound();

	return (
		<div className="w-full pb-16">
			<div className="mx-auto max-w-6xl">
				<Link
					href="/events"
					className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8"
				>
					<ArrowLeft className="mr-2 h-4 w-4" />
					Back to Events
				</Link>

				<div className="overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
					<div className="grid md:grid-cols-5 gap-0">
						{/* Poster Section - Using 3 cols out of 5 for a wider poster */}
						<div className="relative min-h-[400px] md:min-h-[600px] w-full bg-zinc-100 dark:bg-zinc-950 md:col-span-3">
							<Image
								src={event.image || "/placeholder.svg"}
								alt={event.title}
								fill
								className="object-contain p-6"
								sizes="(max-width: 768px) 100vw, 60vw"
								priority
							/>
						</div>

						{/* Details Section */}
						<div className="flex flex-col p-8 lg:p-12 md:col-span-2">
							<div className="flex items-center gap-2 mb-4">
								<span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
									{event.hint}
								</span>
							</div>

							<h1 className="text-2xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl mb-6">
								{event.title}
							</h1>

							<div className="space-y-4 mb-8">
								<div className="flex items-center text-zinc-700 dark:text-zinc-300">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 mr-4">
										<Calendar className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
									</div>
									<span className="text-base font-medium">{event.date}</span>
								</div>
								{event.location && (
									<div className="flex items-center text-zinc-700 dark:text-zinc-300">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 mr-4">
											<MapPin className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
										</div>
										<span className="text-base font-medium">
											{event.location}
										</span>
									</div>
								)}
							</div>

							<div className="prose prose-zinc dark:prose-invert max-w-none flex-1">
								<h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center mb-3">
									About Event
								</h3>
								<p className="whitespace-pre-wrap text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
									{event.description ||
										"No description provided. Please register to discover more details!"}
								</p>
							</div>

							{event.link && (
								<div className="pt-8 mt-8 border-t border-zinc-200 dark:border-zinc-800 block w-full">
									<a
										href={event.link}
										target="_blank"
										rel="noopener noreferrer"
										className="block w-full"
									>
										<RainbowButton className="w-full py-5 text-base font-bold shadow-xl">
											Register Now
										</RainbowButton>
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
