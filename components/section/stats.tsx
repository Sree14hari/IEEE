"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
	{ value: 10, label: "Years", suffix: "+" },
	{ value: 99, label: "Members", suffix: "+" },
	{ value: 70, label: "Events", suffix: "+" },
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
		<div className="flex flex-col items-center rounded-lg border bg-black p-8 shadow-sm">
			<p
				ref={ref}
				className="text-4xl font-bold tracking-tighter text-white sm:text-6xl"
			>
				{`0${suffix || ""}`}
			</p>
			<p className="mt-2 text-lg text-zinc-300">{label}</p>
		</div>
	);
}

export function Stats() {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-3">
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
