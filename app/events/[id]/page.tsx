import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft, ExternalLink, Calendar, Tag } from "lucide-react";

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
}

// --------------------
// Data fetch
// --------------------
async function getEventData(id: string) {
	const publicDir = path.join(process.cwd(), "public");

	const upcomingPath = path.join(publicDir, "assets", "upcoming_events.json");
	const pastPath = path.join(publicDir, "assets", "past_events.json");

	let event: Event | undefined;

	try {
		const upcoming = JSON.parse(await fs.readFile(upcomingPath, "utf-8"));
		event = upcoming.find((e: Event) => e.id === id);

		if (!event) {
			const past = JSON.parse(await fs.readFile(pastPath, "utf-8"));
			event = past.find((e: Event) => e.id === id);
		}
	} catch {
		return null;
	}

	return event;
}

// --------------------
// Page
// --------------------
export default async function EventPage({
	params,
}: {
	params: { id: string };
}) {
	const event = await getEventData(params.id);
	if (!event) notFound();

	return (
		<div className="min-h-screen bg-background pt-20">
			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-6 py-12">
				<div className="mb-8">
					<Link href="/events">
						<Button outline className="gap-2">
							<MoveLeft className="h-4 w-4" />
							Back to Events
						</Button>
					</Link>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					{/* Left: Image */}
					<div className="relative aspect-[4/5] lg:sticky lg:top-24 rounded-2xl overflow-hidden shadow-2xl">
						<Image
							src={event.image}
							alt={event.title}
							fill
							className="object-cover"
							priority
						/>
					</div>

					{/* Right: Details */}
					<div className="space-y-8">
						{/* Title */}
						<div>
							<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
								{event.title}
							</h1>
							<div className="flex flex-wrap gap-4 text-muted-foreground">
								<div className="flex items-center gap-2">
									<Calendar className="h-5 w-5" />
									<span className="text-lg">{event.date}</span>
								</div>
								<div className="flex items-center gap-2">
									<Tag className="h-5 w-5" />
									<span className="text-lg capitalize">{event.hint}</span>
								</div>
							</div>
						</div>

						{/* Divider */}
						<div className="h-px bg-border" />

						{/* Description */}
						<div>
							<h2 className="text-2xl font-semibold mb-4">About This Event</h2>
							<p className="text-lg text-muted-foreground leading-relaxed">
								{event.description ||
									"Detailed information for this event is coming soon."}
							</p>
						</div>

						{/* Link Button */}
						{event.link && (
							<div>
								<a
									href={event.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block"
								>
									<Button className="gap-2 text-lg px-8 py-6" color="dark">
										Register Now
										<ExternalLink className="h-5 w-5" />
									</Button>
								</a>
							</div>
						)}

						{/* Additional Info Card */}
						<div className="bg-card border border-border rounded-2xl p-6 space-y-4">
							<h3 className="text-xl font-semibold">Event Details</h3>
							<div className="space-y-3 text-muted-foreground">
								<div className="flex justify-between">
									<span>Category:</span>
									<span className="font-medium text-foreground capitalize">
										{event.hint}
									</span>
								</div>
								<div className="flex justify-between">
									<span>Date:</span>
									<span className="font-medium text-foreground">
										{event.date}
									</span>
								</div>
								<div className="flex justify-between">
									<span>Organized by:</span>
									<span className="font-medium text-foreground">
										IEEE Student Branch
									</span>
								</div>
							</div>
						</div>

						{/* CTA Card */}
						<div className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white rounded-2xl p-8">
							<h3 className="text-2xl font-semibold mb-3">
								Want to stay updated?
							</h3>
							<p className="text-white/90 mb-6">
								Join IEEE Student Branch to get notified about upcoming events
								and opportunities.
							</p>
							<Button className="border border-white/20 bg-white/5 text-white hover:bg-white/10 font-semibold">
								Join IEEE SB
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
