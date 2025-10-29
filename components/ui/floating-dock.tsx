
"use client";
import React from "react";
import {
	motion,
	useSpring,
	useMotionValue,
	useTransform,
} from "motion/react";
import { Link } from "./link";
import { cn } from "@/lib/utils";

export const FloatingDock = ({
	items,
	className,
	mobileClassName,
}: {
	items: {
		title: string;
		icon?: React.ReactNode;
		href: string;
		target?: string;
	}[];
	className?: string;
	mobileClassName?: string;
}) => {
	let mouseX = useMotionValue(Infinity);

	return (
		<>
			{/* Desktop Dock */}
			<div
				onMouseMove={(e) => mouseX.set(e.pageX)}
				onMouseLeave={() => mouseX.set(Infinity)}
				className={cn(
					"hidden md:flex items-end fixed inset-x-0 bottom-6 z-50 justify-center",
					className,
				)}
			>
				<div className="flex h-16 items-end justify-center gap-4 rounded-2xl bg-white/10 px-4 pb-3 backdrop-blur-md dark:bg-black/10">
					{items.map((item, idx) => (
						<DockItem
							key={idx}
							mouseX={mouseX}
							item={item}
						/>
					))}
				</div>
			</div>
			{/* Mobile Dock */}
			<div
				className={cn(
					"md:hidden fixed bottom-0 inset-x-0 z-50 w-full",
					mobileClassName,
				)}
			>
				<div className="flex justify-around items-center bg-white/10 backdrop-blur-md dark:bg-black/10 p-2">
					{items.map((item, idx) => (
						<Link
							href={item.href}
							target={item.target}
							key={`mobile-item-${idx}`}
							className="flex flex-col items-center justify-center gap-1 text-neutral-500 dark:text-neutral-300"
						>
							<div className="size-8">{item.icon}</div>
							<span className="text-xs">{item.title}</span>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export const DockItem = ({
	item,
	mouseX,
}: {
	item: {
		title: string;
		icon?: React.ReactNode;
		href: string;
		target?: string;
	};
	mouseX: any;
}) => {
	let ref = React.useRef<HTMLDivElement>(null);

	let distance = useTransform(mouseX, (val) => {
		let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
	let width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	return (
		<div className="flex items-center justify-center">
			<motion.div
				ref={ref}
				style={{ width }}
				className="flex aspect-square items-center justify-center rounded-full"
			>
				<Link
					href={item.href}
					target={item.target}
					className="relative z-20 flex size-10 items-center justify-center rounded-full bg-neutral-100/30 text-neutral-500 transition-colors duration-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800/30 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
				>
					<div className="size-6">{item.icon}</div>
				</Link>
			</motion.div>
		</div>
	);
};
    