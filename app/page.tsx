import { Hero } from "@/components/section/hero";
import { FeaturedEvents } from "@/components/section/featured-events";
import { ImageCarousel } from "@/components/custom/image-carousel";
import { PainPoint } from "@/components/section/pain-point";
import { Stats } from "@/components/section/stats";
import { Supporters } from "@/components/section/supporters";
import { MarqueeBanner } from "@/components/section/marquee-banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
	description:
		"Discover IEEE SB SBCE events, societies, achievements, and student initiatives in one place.",
	alternates: {
		canonical: "/",
	},
};

export default function Home() {
	return (
		<>
			<Hero />
			<div className="bg-white -mx-6 sm:mx-0 lg:-mx-10 border-dashed -mt-7 pt-12 border-zinc-200 relative z-10 border-t-2">
				<div className="mx-auto w-full px-4 pb-10 ">
					<Supporters />
				</div>
			</div>
			<div className="-mx-6 sm:mx-0 lg:-mx-10 relative space-y-4 bg-white rounded-lg">
				<Stats />
				<MarqueeBanner />
				<PainPoint />
				<ImageCarousel />
			</div>
			<FeaturedEvents />
		</>
	);
}
