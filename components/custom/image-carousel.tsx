"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const images = [
	{ src: "/Gallery/ieee.jpg", alt: "IEEE event photo" },
	{ src: "/Gallery/ieee2.jpg", alt: "IEEE event photo" },
	{ src: "/Gallery/ieee3.jpg", alt: "IEEE event photo" },
	{ src: "/Gallery/ieee2.jpg", alt: "IEEE event photo" },
	{ src: "/Gallery/ieee.jpg", alt: "IEEE event photo" },
	{ src: "/Gallery/ieee3.jpg", alt: "IEEE event photo" },
];

export function ImageCarousel() {
	const [[current, direction], setCurrent] = useState([0, 0]);
	const [isHovered, setIsHovered] = useState(false);

	const total = images.length;
	const index = ((current % total) + total) % total;

	const go = useCallback((dir: number) => {
		setCurrent(([prev]) => [prev + dir, dir]);
	}, []);

	// Auto-play
	useEffect(() => {
		if (isHovered) return;
		const id = setInterval(() => go(1), 4000);
		return () => clearInterval(id);
	}, [go, isHovered]);

	const variants = {
		enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
		center: { x: 0, opacity: 1 },
		exit: (d: number) => ({ x: d < 0 ? "100%" : "-100%", opacity: 0 }),
	};

	const prev = ((index - 1) + total) % total;
	const next = (index + 1) % total;

	return (
		<div className="relative bg-white py-16 sm:py-24 overflow-hidden">
			{/* Header */}
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
				<div className="flex items-end justify-between">
					<div>
						<p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-2">
							Memories
						</p>
						<h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 font-display">
							Our Gallery
						</h2>
					</div>
					{/* Nav buttons */}
					<div className="flex items-center gap-3">
						<button
							type="button"
							onClick={() => go(-1)}
							className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-900 hover:border-zinc-900 hover:text-white text-zinc-700 transition-all duration-300 shadow-sm"
						>
							<IconChevronLeft className="w-5 h-5" />
						</button>
						<button
							type="button"
							onClick={() => go(1)}
							className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 bg-white hover:bg-zinc-900 hover:border-zinc-900 hover:text-white text-zinc-700 transition-all duration-300 shadow-sm"
						>
							<IconChevronRight className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>

			{/* Gallery layout */}
			<div
				className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-3 sm:gap-4">
					{/* Main large image */}
					<div className="relative h-64 sm:h-[480px] rounded-3xl overflow-hidden">
						<AnimatePresence initial={false} custom={direction}>
							<motion.div
								key={index}
								custom={direction}
								variants={variants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{ type: "spring", stiffness: 300, damping: 35 }}
								className="absolute inset-0"
							>
								<Image
									src={images[index].src}
									alt={images[index].alt}
									fill
									className="object-cover"
									priority
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
								<div className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
									{index + 1} / {total}
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Side thumbnails */}
					<div className="hidden sm:flex flex-col gap-4">
						{[prev, next].map((imgIdx, i) => (
							<button
								type="button"
								key={`thumb-${i}`}
								onClick={() => go(i === 0 ? -1 : 1)}
								className="relative flex-1 rounded-2xl overflow-hidden group cursor-pointer"
							>
								<Image
									src={images[imgIdx].src}
									alt={images[imgIdx].alt}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
							</button>
						))}
					</div>
				</div>

				{/* Dot indicators */}
				<div className="flex items-center justify-center gap-2 mt-6">
					{images.map((_, i) => (
						<button
							type="button"
							key={`dot-${i}`}
							onClick={() => setCurrent(([prev]) => [prev + (i - index), i - index])}
							className={`rounded-full transition-all duration-300 ${
								i === index
									? "w-6 h-2 bg-zinc-900"
									: "w-2 h-2 bg-zinc-300 hover:bg-zinc-500"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
