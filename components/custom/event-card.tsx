"use client";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface EventCardProps {
	event: {
		id: string;
		title: string;
		date: string;
		image: string;
		hint: string;
	};
}

export default function EventCard({ event }: EventCardProps) {
	return (
		<Card className="w-full">
			<CardHeader>
				<div className="relative h-48 w-full">
					<Image
						src={event.image}
						alt={event.title}
						fill
						className="rounded-t-lg object-cover"
						data-ai-hint={event.hint}
					/>
				</div>
			</CardHeader>
			<CardContent>
				<CardTitle className="text-lg font-bold">{event.title}</CardTitle>
				<p className="text-sm text-muted-foreground">{event.date}</p>
			</CardContent>
			<CardFooter>
				<Button className="w-full">View Event</Button>
			</CardFooter>
		</Card>
	);
}
