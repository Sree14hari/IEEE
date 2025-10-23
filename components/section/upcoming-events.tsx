"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Button } from "../ui/button";

const upcomingEvents = [
	{
		id: "1",
		title: "Annual Tech Conference",
		date: "2024-10-15",
		image: "https://picsum.photos/seed/upcoming1/1200/800",
		hint: "tech conference",
	},
	{
		id: "2",
		title: "Workshop on AI",
		date: "2024-11-05",
		image: "https://picsum.photos/seed/upcoming2/1200/800",
		hint: "AI workshop",
	},
	{
		id: "3",
		title: "Networking Gala",
		date: "2024-11-20",
		image: "https://picsum.photos/seed/upcoming3/1200/800",
		hint: "networking event",
	},
];

export default function UpcomingEvents() {
	const [index, setIndex] = useState(0);

	const handleNext = () => {
		setIndex((prev) => (prev + 1) % upcomingEvents.length);
	};

	const handlePrev = () => {
		setIndex(
			(prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length,
		);
	};

	return (
		<div className="mt-12">
			<h3 className="text-2xl font-bold tracking-tight">Upcoming Events</h3>
			<div className="relative w-full h-[300px] md:h-[500px] my-6 flex items-center justify-center">
				<AnimatePresence>
					{upcomingEvents.map((event, i) => {
						const isCurrent = index === i;
						const isPrev =
							index === 0
								? i === upcomingEvents.length - 1
								: i === index - 1;
						const isNext =
							index === upcomingEvents.length - 1
								? i === 0
								: i === index + 1;

						let transform = "translateX(0) scale(0.8)";
						let zIndex = 1;
						let opacity = 0.6;

						if (isCurrent) {
							transform = "translateX(0) scale(1)";
							zIndex = 3;
							opacity = 1;
						} else if (isPrev) {
							transform = "translateX(-50%) scale(0.8)";
							zIndex = 2;
						} else if (isNext) {
							transform = "translateX(50%) scale(0.8)";
							zIndex = 2;
						} else {
							transform = `translateX(${
								i < index ? "-100%" : "100%"
							}) scale(0.6)`;
							zIndex = 0;
							opacity = 0;
						}

						return (
							<motion.div
								key={event.id}
								initial={{
									transform: transform,
									zIndex: zIndex,
									opacity: opacity,
								}}
								animate={{
									transform: transform,
									zIndex: zIndex,
									opacity: opacity,
								}}
								exit={{ opacity: 0, scale: 0.6 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								className="absolute w-full md:w-1/2 h-full"
							>
								<div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
									<Image
										src={event.image}
										alt={event.title}
										fill
										className="object-cover"
										data-ai-hint={event.hint}
									/>
									<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
										<h3 className="text-2xl font-bold text-white">
											{event.title}
										</h3>
										<p className="text-lg text-white/80">{event.date}</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</AnimatePresence>
				<Button
					plain
					onClick={handlePrev}
					className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full !p-2"
				>
					<IconChevronLeft />
				</Button>
				<Button
					plain
					onClick={handleNext}
					className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full !p-2"
				>
					<IconChevronRight />
				</Button>
			</div>
		</div>
	);
}