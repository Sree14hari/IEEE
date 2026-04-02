"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { IconCalendarEvent, IconUsers, IconBuildingCommunity, IconClockHour4 } from "@tabler/icons-react";

const stats = [
	{ value: 10, label: "Years Active", suffix: "+", icon: IconClockHour4, description: "A decade of innovation" },
	{ value: 100, label: "Members", suffix: "+", icon: IconUsers, description: "Students across chapters" },
	{ value: 100, label: "Events", suffix: "+", icon: IconCalendarEvent, description: "Workshops, talks & more" },
	{ value: 4, label: "Societies", suffix: "+", icon: IconBuildingCommunity, description: "Specialized IEEE chapters" },
];

function Stat({
	value,
	label,
	suffix,
	icon: Icon,
	description,
	index,
}: {
	value: number;
	label: string;
	suffix?: string;
	icon: React.ElementType;
	description: string;
	index: number;
}) {
	const ref = useRef<HTMLParagraphElement>(null);
	const cardRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(cardRef, { once: true });

	useEffect(() => {
		if (isInView && ref.current) {
			animate(0, value, {
				duration: 2,
				ease: "easeOut",
				delay: index * 0.15,
				onUpdate(latest) {
					if (ref.current) {
						ref.current.textContent = `${Math.round(latest)}${suffix || ""}`;
					}
				},
			});
		}
	}, [isInView, value, suffix, index]);

	return (
		<div
			ref={cardRef}
			className="group relative flex flex-row sm:flex-col items-center sm:justify-center overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-left sm:text-center gap-4 sm:gap-0 transition-all duration-500 hover:-translate-y-1"
			style={{
				animation: `fadeInUp 0.6s ease-out forwards ${index * 0.15}s`,
				opacity: 0,
				transform: "translateY(20px)",
			}}
		>
			{/* Card background */}
			<div className="absolute inset-0 bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl shadow-sm group-hover:shadow-md group-hover:border-zinc-300 transition-all duration-300" />

			{/* Glow blob */}
			<div className="absolute -top-6 -left-6 w-24 h-24 bg-zinc-200/30 rounded-full blur-2xl group-hover:bg-zinc-300/40 transition-colors duration-500" />
			<div className="absolute -bottom-6 -right-6 w-20 h-20 bg-zinc-200/30 rounded-full blur-2xl group-hover:bg-zinc-300/40 transition-colors duration-500" />

			{/* Icon badge */}
			<div className="relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 sm:mb-4 rounded-xl sm:rounded-2xl bg-zinc-100 border border-zinc-200 transition-all duration-300 group-hover:bg-zinc-900 group-hover:border-zinc-900">
				<Icon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-700 group-hover:text-white transition-colors duration-300" />
			</div>

			{/* Text content */}
			<div className="relative z-10 flex flex-col sm:items-center">
				{/* Animated number */}
				<p
					ref={ref}
					className="text-3xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 font-display leading-none"
				>
					{`0${suffix || ""}`}
				</p>

				{/* Label */}
				<p className="mt-1 text-sm sm:text-lg font-semibold text-zinc-700">{label}</p>

				{/* Description */}
				<p className="mt-0.5 text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-600 transition-colors duration-300">{description}</p>
			</div>
		</div>
	);
}

export function Stats() {
	return (
		<div className="relative overflow-hidden bg-white py-12 sm:py-28">
			{/* Subtle dot grid */}
			<div
				className="absolute inset-0 opacity-[0.4]"
				style={{
					backgroundImage: "radial-gradient(circle, #e4e4e7 1px, transparent 1px)",
					backgroundSize: "30px 30px",
				}}
			/>

			{/* Large background glows */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-200/20 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-200/20 rounded-full blur-3xl pointer-events-none" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section header */}
				<div className="text-center mb-14">
					<p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-2">Our Impact</p>
					<h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 font-display tracking-tight">
						Growing Together, <span className="text-zinc-900">Year by Year</span>
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
					{stats.map((stat, index) => (
						<Stat
							key={stat.label}
							value={stat.value}
							label={stat.label}
							suffix={stat.suffix}
							icon={stat.icon}
							description={stat.description}
							index={index}
						/>
					))}
				</div>
			</div>

			<style>{`
				@keyframes fadeInUp {
					to { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</div>
	);
}
