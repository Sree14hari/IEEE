"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";

const stats = [
	{ value: 10, label: "Years", suffix: "+" },
	{ value: 99, label: "Members", suffix: "+" },
	{ value: 70, label: "Events", suffix: "+" },
	{ value: 3, label: "Communities", suffix: "+" },
];

function Stat({
	value,
	label,
	suffix,
}: {
	value: number;
	label: string;
	suffix?: string;
}) {
	const ref = useRef<HTMLParagraphElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView && ref.current) {
			animate(0, value, {
				duration: 2,
				ease: "easeOut",
				onUpdate(latest) {
					if (ref.current) {
						ref.current.textContent = `${Math.round(latest)}${
							suffix || ""
						}`;
					}
				},
			});
		}
	}, [isInView, value, suffix]);

	return (
		<div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4 sm:p-8 shadow-sm h-40">
			<DottedGlowBackground
				className="pointer-events-none"
				opacity={0.5}
				gap={8}
				radius={1}
				colorLightVar="--color-zinc-500"
				glowColorLightVar="--color-zinc-600"
				colorDarkVar="--color-zinc-500"
				glowColorDarkVar="--color-sky-800"
				backgroundOpacity={0}
			/>
			<p
				ref={ref}
				className="text-4xl font-bold tracking-tighter text-foreground sm:text-6xl relative z-10"
			>
				{`0${suffix || ""}`}
			</p>
			<p className="mt-2 text-lg text-muted-foreground relative z-10">{label}</p>
		</div>
	);
}

export function Stats() {
	return (
		<div className="bg-white py-12 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 sm:gap-8 text-center">
					{stats.map((stat) => (
						<Stat
							key={stat.label}
							value={stat.value}
							label={stat.label}
							suffix={stat.suffix}
						/>
					))}
				</div>
			</div>
		</div>
	);
}