"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface UpcomingEventCardProps {
	event: {
		id: string;
		title: string;
		date: string;
		image: string;
		hint: string;
		link?: string;
	};
}

export default function UpcomingEventCard({ event }: UpcomingEventCardProps) {
	return (
		<div className="relative w-full max-w-[320px] flex-shrink-0 group flex flex-col overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
			{/* Image Section */}
			<div className="relative h-48 w-full overflow-hidden">
				<Image
					src={event.image || "/placeholder.svg"}
					alt={event.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					data-ai-hint={event.hint}
				/>
				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
				
				{/* Date Badge */}
				<div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-zinc-900 shadow-sm backdrop-blur-md dark:bg-zinc-900/95 dark:text-zinc-100">
					<Calendar className="h-3.5 w-3.5" />
					{event.date}
				</div>
			</div>

			{/* Content Section */}
			<div className="flex flex-1 flex-col justify-between p-5">
				<div className="mb-5">
					<h3 className="line-clamp-2 text-[1.1rem] font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
						{event.title}
					</h3>
					<p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
						{event.hint && event.hint !== event.title ? event.hint : "Don't miss out on this amazing opportunity. Join us and engage with the community!"}
					</p>
				</div>
				
				<Link href={`/events/${event.id}`} className="w-full mt-auto">
					<RainbowButton className="w-full py-2 text-sm font-semibold shadow-sm">View Details</RainbowButton>
				</Link>
			</div>
		</div>
	);
}
