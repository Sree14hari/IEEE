"use client";

import BlurIn from "@/components/ui/blur-in";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function SplashScreen() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		// Check if we've shown the splash screen in this session
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 1000); // Wait for animation to finish + buffer

		return () => clearTimeout(timer);
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ y: 0 }}
					exit={{ y: "-100%" }}
					transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
					className="fixed inset-0 z-[9999] flex h-full w-full flex-col items-center justify-center bg-background"
				>
					<div className="flex flex-col items-center space-y-4">
						<BlurIn
							className="text-3xl font-bold font-sans tracking-tighter sm:text-6xl md:text-8xl text-foreground text-center px-4"
							word="IEEE   SB   SBCE"
							duration={1.5}
						/>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
