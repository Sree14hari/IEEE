"use client";

import { useState } from "react";

const excoms = [
	{ id: "sb", name: "Student Branch", src: "/Excom/2026/ieesbsbce.svg" },
	{ id: "cs", name: "Computer Society", src: "/Excom/2026/cs.svg" },
	{ id: "ias", name: "Industry Applications", src: "/Excom/2026/ias.svg" },
	{ id: "sc", name: "Sensors Council", src: "/Excom/2026/sc.svg" },
	{ id: "sps", name: "Signal Processing", src: "/Excom/2026/sps.svg" },
	{ id: "sscs", name: "Solid-State Circuits", src: "/Excom/2026/sscs.svg" },
];

export function CurrentExecom() {
	const [activeTab, setActiveTab] = useState("sb");

	const activeExcom = excoms.find((e) => e.id === activeTab) || excoms[0];

	return (
		<section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 border-t border-zinc-200/50 dark:border-zinc-800/30">
			<div className="mb-6">
				<p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
					Leadership
				</p>
				<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-display">
					Current EXECOM
					<span className="text-zinc-900 dark:text-zinc-50">.</span>
				</h2>
				<p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
					Meet the driving force behind IEEE SB SBCE. Select a chapter below to
					view our active 2026 Executive Committee.
				</p>
			</div>

			{/* Interactive Scrollable Selector Pills */}
			<div className="flex gap-2 pb-4 overflow-x-auto scrollbar-hide py-2">
				{excoms.map((excom) => {
					const isActive = excom.id === activeTab;
					return (
						<button
							key={excom.id}
							type="button"
							onClick={() => setActiveTab(excom.id)}
							className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-300 whitespace-nowrap cursor-pointer ${
								isActive
									? "bg-zinc-900 border-zinc-900 dark:bg-zinc-100 dark:border-zinc-100 text-white dark:text-zinc-900 shadow-md shadow-zinc-900/10 dark:shadow-zinc-100/10"
									: "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-200"
							}`}
						>
							{excom.name}
						</button>
					);
				})}
			</div>

			{/* Responsive Display: Animated wrapper container to prevent animation/hover override conflicts */}
			<div className="flex items-center justify-center pt-6 pb-16 overflow-visible">
				<div
					key={activeExcom.id}
					className="animate-circular-scroll flex items-center justify-center w-full"
				>
					<img
						src={activeExcom.src}
						alt={`IEEE SB SBCE ${activeExcom.name} Executive Committee`}
						className="rotate-0 md:rotate-[-90deg] w-full max-w-[600px] h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
						loading="lazy"
					/>
				</div>
			</div>

			<style>{`
				.scrollbar-hide::-webkit-scrollbar {
					display: none;
				}
				.scrollbar-hide {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
				
				/* Circular Scroll animation applied on the wrapper */
				@keyframes circularScroll {
					0% {
						opacity: 0;
						transform: rotate(-30deg) translate(-50px, 50px) scale(0.85);
					}
					100% {
						opacity: 1;
						transform: rotate(0deg) translate(0, 0) scale(1);
					}
				}

				.animate-circular-scroll {
					animation: circularScroll 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
					transform-origin: center center;
				}
			`}</style>
		</section>
	);
}
