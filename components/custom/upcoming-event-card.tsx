"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";

interface UpcomingEventCardProps {
	event: {
		id: string;
		title: string;
		date: string;
		image: string;
		hint: string;
	};
}

export default function UpcomingEventCard({ event }: UpcomingEventCardProps) {
	return (
		<div
			className="w-full max-w-[300px] flex-shrink-0"
		>
			<Card className="w-full">
				<CardHeader className="p-0">
					<div className="relative h-40 w-full">
						<Image
							src={event.image}
							alt={event.title}
							fill
							className="rounded-t-lg object-cover"
							data-ai-hint={event.hint}
						/>
					</div>
				</CardHeader>
				<CardContent className="p-4">
					<h3 className="text-lg font-bold">{event.title}</h3>
					<p className="text-sm text-muted-foreground">{event.date}</p>
					<RainbowButton className="w-full mt-4">View Event</RainbowButton>
				</CardContent>
			</Card>
		</div>
	);
}
