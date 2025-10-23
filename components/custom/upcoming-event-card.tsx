"use client";
import {
	Card,
	CardContent,
	CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
		<Card className="min-w-[300px] flex-shrink-0">
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
                <Button className="w-full mt-4">View Event</Button>
			</CardContent>
		</Card>
	);
}
