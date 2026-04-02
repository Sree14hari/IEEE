
import {
	Card,
	CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Excom 2025",
	description:
		"Meet the IEEE SB SBCE Executive Committee for 2025 across SB, CS, and IAS teams.",
	alternates: {
		canonical: "/excom/2025",
	},
};

const committees = [
	{ title: "SB Excom", slug: "sb", image: "/Excom/SB.webp", hint: "team meeting" },
	{ title: "CS Excom", slug: "cs", image: "/Excom/CS.webp", hint: "people coding" },
	{ title: "IAS Excom", slug: "ias", image: "/Excom/IAS.webp", hint: "industrial machinery" },
];

export default function Page() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
			<div className="text-center mb-16">
				<h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-900 dark:text-zinc-50 tracking-tight font-display">
					Executive Committee <span className="text-blue-600 dark:text-blue-500">2025</span>
				</h2>
				<p className="mt-4 text-xl leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
					Meet the 2025 team behind the scenes bringing innovation to life.
				</p>
			</div>
			
			<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{committees.map((committee, index) => (
					<Link
						key={committee.slug}
						href={`/excom/2025/${committee.slug}`}
						className="group relative block w-full rounded-[2.5rem] p-[2px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 bg-zinc-200 dark:bg-zinc-800"
						style={{ 
							animation: `fadeInUp 0.7s ease-out forwards ${index * 0.15}s`,
							opacity: 0,
							transform: 'translateY(20px)'
						}}
					>
						{/* Animated Gradient Border effect on hover */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
						
						<Card className="relative bg-white dark:bg-zinc-950 rounded-[calc(2.5rem-2px)] overflow-hidden h-full flex flex-col items-center justify-center border-none">
							{/* Subtle background glow when hovered */}
							<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
								<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-800 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
							</div>

							<div className="p-10 w-full flex justify-center relative z-10">
								<div className="relative h-48 w-48 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:drop-shadow-2xl">
									<Image
										src={committee.image}
										alt={committee.title}
										fill
										className="object-contain drop-shadow-sm transition-all duration-500 filter group-hover:brightness-110"
										data-ai-hint={committee.hint}
									/>
								</div>
							</div>
							
							<CardContent className="px-8 pb-10 pt-4 text-center w-full relative z-10 flex flex-col items-center">
								<h3 className="text-3xl font-bold bg-clip-text text-transparent bg-zinc-900 dark:bg-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400 transition-all duration-500 mb-4 bg-[length:200%_auto] group-hover:animate-gradient">
									{committee.title}
								</h3>
								
								<div className="mt-2 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 text-zinc-400 dark:text-zinc-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-500/50 group-hover:w-40">
									<span className="opacity-0 w-0 overflow-hidden whitespace-nowrap group-hover:opacity-100 group-hover:w-auto group-hover:px-2 group-hover:mr-1 transition-all duration-500 text-sm font-semibold">
										View Team
									</span>
									<span className="text-xl leading-none transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
								</div>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
			<style>{`
				@keyframes fadeInUp {
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</div>
	);
}
