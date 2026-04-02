import {
	IconAward,
	IconBooks,
	IconCoins,
	IconUsers,
	IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";
import { PWA_LINK } from "@/lib/constants";

const features = [
	{
		name: "Opportunity",
		description:
			"Unlock a world of opportunities for skill development, networking, and career advancement through our various programs and events.",
		icon: IconAward,
	},
	{
		name: "Resources",
		description:
			"Gain access to a wealth of resources, including technical journals, online courses, and mentorship programs to fuel your growth.",
		icon: IconBooks,
	},
	{
		name: "Networks",
		description:
			"Connect with a global community of students, professionals, and industry leaders, building a network that will support you throughout your career.",
		icon: IconUsers,
	},
	{
		name: "Allowance",
		description:
			"Take advantage of special allowances and discounts on conferences, workshops, and competitions to make the most of your membership.",
		icon: IconCoins,
	},
];

export function PainPoint() {
	return (
		<div className="relative bg-white py-16 sm:py-28 overflow-hidden">
			{/* Subtle dot grid */}
			<div
				className="absolute inset-0 opacity-40"
				style={{
					backgroundImage: "radial-gradient(circle, #e4e4e7 1px, transparent 1px)",
					backgroundSize: "28px 28px",
				}}
			/>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mx-auto max-w-2xl text-center mb-14 sm:mb-20">
					<p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-3">
						Membership
					</p>
					<h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 font-display">
						Why <span className="text-zinc-900">Join Us?</span>
					</h2>
					<p className="mt-4 text-base sm:text-lg leading-8 text-zinc-500 text-balance">
						Joining our IEEE student branch opens the door to a world of
						opportunities, resources, and connections that will enrich your
						academic and professional journey.
					</p>
				</div>

				{/* Feature cards */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
					{features.map((feature, index) => (
						<div
							key={feature.name}
							className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-zinc-300"
							style={{
								animation: `fadeInUp 0.6s ease-out forwards ${index * 0.12}s`,
								opacity: 0,
								transform: "translateY(20px)",
							}}
						>
							{/* Background glow */}
							<div className="absolute inset-0 rounded-2xl sm:rounded-3xl transition-colors duration-500 group-hover:bg-zinc-50/80" />

							{/* Icon */}
							<div className="relative z-10 mb-5 self-start flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 transition-all duration-300 group-hover:bg-zinc-900 group-hover:border-zinc-900">
								<feature.icon className="w-6 h-6 text-zinc-700 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
							</div>

							{/* Text */}
							<div className="relative z-10 flex-1">
								<h3 className="text-lg font-bold text-zinc-900 mb-2">{feature.name}</h3>
								<p className="text-sm sm:text-base leading-relaxed text-zinc-500 group-hover:text-zinc-600 transition-colors duration-300">
									{feature.description}
								</p>
							</div>

						</div>
					))}
				</div>

				</div>

			<style>{`
				@keyframes fadeInUp {
					to { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</div>
	);
}
