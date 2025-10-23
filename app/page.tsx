import { Hero } from "@/components/section/hero";
import { ImageCarousel } from "@/components/custom/image-carousel";
import { PainPoint } from "@/components/section/pain-point";
import { Stats } from "@/components/section/stats";
import { Supporters } from "@/components/section/supporters";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="bg-zinc-50 -mx-6 lg:-mx-10 border-dashed -mt-7 pt-12 border-zinc-200 relative z-10 border-t-2">
				<div className="mx-auto w-full px-4 pb-10 ">
					<Supporters />
				</div>
			</div>
			<div className="-mx-6 lg:-mx-10 relative space-y-4 bg-zinc-50 rounded-lg pt-2">
				<Stats />
				<PainPoint />
				<ImageCarousel />
			</div>
		</>
	);
}
