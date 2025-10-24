
'use client';
import HyperText from "@/components/ui/hyper-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Strong } from "@/components/ui/text";
import { PWA_LINK } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export function Hero() {

	return (
		<div className="relative">
			<div>
				<div
					className="hidden sm:mb-8 sm:flex sm:justify-center"
				>
					<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-[6px] ring-background border-2 border-zinc-300 hover:border-zinc-400 transition-all ">
						Power What’s Next for <Strong>Tech</Strong>
					</div>
				</div>
				<h1
					className="mx-auto max-w-2xl text-balance text-center font-display text-4xl font-medium tracking-tight text-zinc-900 sm:text-7xl lg:mt-8"
				>
					IEEE Students
					<br />
					Branch.
				</h1>
				<p
					className="mx-auto mt-6 max-w-2xl text-balance text-center text-lg tracking-tight text-muted-foreground"
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
				</p>
			</div>
			
			<div
				className="mt-10 flex justify-center gap-x-6"
			>
				<Link href={PWA_LINK} target="_blank" aria-label="Join Us">
					<RainbowButton className="h-14 px-8 text-lg relative z-20 ">
						Join Us
					</RainbowButton>
				</Link>
			</div>

			<div>
				<Image
					className="absolute -bottom-0 left-0 pointer-events-none invisible xl:visible animate-[float_6s_ease-in-out_infinite]"
					alt="Hero left image"
					src="/hero-left.svg"
					width={360}
					height={360}
				/>
			</div>
			<div>
				<Image
					className="absolute -bottom-0 -right-2 pointer-events-none invisible xl:visible animate-[float_6s_ease-in-out_infinite_3s]"
					alt="Hero right image"
					src="/hero-right.svg"
					width={390}
					height={390}
				/>
			</div>
		</div>
	);
}
