
'use client';
import HyperText from "@/components/ui/hyper-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Strong } from "@/components/ui/text";
import { PWA_LINK } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export function Hero() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<div className="relative">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.div
					className="hidden sm:mb-8 sm:flex sm:justify-center"
					variants={itemVariants}
				>
					<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-[6px] ring-background border-2 border-zinc-300 hover:border-zinc-400 transition-all ">
						Power What’s Next for <Strong>Tech</Strong>
					</div>
				</motion.div>
				<motion.h1
					className="mx-auto max-w-2xl text-balance text-center font-display text-4xl font-medium tracking-tight text-zinc-900 sm:text-7xl lg:mt-8"
					variants={itemVariants}
				>
					IEEE Students
					<br />
					Branch.
				</motion.h1>
				<motion.p
					className="mx-auto mt-6 max-w-2xl text-balance text-center text-lg tracking-tight text-muted-foreground"
					variants={itemVariants}
				>
					Branch Code:{" "}
					<span className="whitespace-nowrap">
						<HyperText
							className="text-foreground font-medium underline underline-offset-[2.9px]"
							text="STB12941"
						/>
					</span>{" "}
					{/* no <span className="strikethrough">ads</span> &{" "}
				<span className="strikethrough">data collection</span> */}
				</motion.p>
			</motion.div>
			
			<div
				className="mt-10 flex justify-center gap-x-6"
			>
				<Link href={PWA_LINK} target="_blank" aria-label="Join Us">
					<RainbowButton className="h-14 px-8 text-lg relative z-20 ">
						Join Us
					</RainbowButton>
				</Link>
			</div>

			<motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
				<Image
					className="absolute -bottom-0 left-0 pointer-events-none invisible xl:visible"
					alt="Hero left image"
					src="/hero-left.svg"
					width={360}
					height={360}
				/>
			</motion.div>
			<motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
				<Image
					className="absolute -bottom-0 -right-2 pointer-events-none invisible xl:visible"
					alt="Hero right image"
					src="/hero-right.svg"
					width={390}
					height={390}
				/>
			</motion.div>
		</div>
	);
}
