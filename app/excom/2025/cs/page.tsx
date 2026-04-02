import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import data from "@/public/Excom/2025/2025.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "CS Excom 2025",
	description:
		"View the IEEE Computer Society Executive Committee members of IEEE SB SBCE for 2025.",
	alternates: {
		canonical: "/excom/2025/cs",
	},
};

interface ExecomMember {
	id: string;
	name: string;
	designation: string;
	linkedin?: string;
	category: string;
	year: string;
	image_url: string;
}

const rankDesignation = (designation: string) => {
	if (!designation) return 100;
	const ds = designation.toLowerCase();
	if (
		ds.includes("counsellor") ||
		ds.includes("counselor") ||
		ds.includes("branch counsellor") ||
		ds.includes("adviser") ||
		ds.includes("advisor") ||
		ds.includes("faculty")
	)
		return 1;
	if (ds.includes("vice chair")) return 3;
	if (ds.includes("chair")) return 2;
	if (ds.includes("joint secretary")) return 5;
	if (ds.includes("secretary")) return 4;
	if (ds.includes("treasurer")) return 6;
	if (ds.includes("webmaster")) return 7;
	if (ds.includes("design")) return 8;
	if (ds.includes("lead")) return 9;
	return 100;
};

export default async function Page() {
	let members: ExecomMember[] = [];
	try {
		members = data.filter(
			(m: ExecomMember) => m.category === "CS Execom" && m.year === "2025",
		);
		
		members.sort(
			(a: ExecomMember, b: ExecomMember) => rankDesignation(a.designation) - rankDesignation(b.designation)
		);
	} catch (error) {
		console.error("Failed to load execom data:", error);
	}

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
			<div className="text-center mb-16">
				<h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-900 dark:text-zinc-50 tracking-tight font-display">
					CS Execom <span className="text-blue-600 dark:text-blue-500">2025</span>
				</h2>
				<p className="mt-4 text-xl leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
					Meet the Computer Society Executive Committee driving innovation and leadership.
				</p>
			</div>

			{members.length === 0 ? (
				<div className="text-center py-20">
					<p className="text-xl text-zinc-500 dark:text-zinc-400">Member details coming soon.</p>
				</div>
			) : (
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{members.map((member: ExecomMember, index: number) => (
						<div
							key={member.id}
							className="group relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-blue-900/20"
							style={{ 
								animation: `fadeInUp 0.6s ease-out forwards ${index * 0.1}s`,
								opacity: 0,
								transform: 'translateY(20px)'
							}}
						>
							<div className="aspect-[3/4] w-full relative overflow-hidden">
								<Image
									src={member.image_url || "/placeholder.svg"}
									alt={member.name}
									fill
									className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
								<div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
									<h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
									<p className="text-blue-400 font-medium text-sm mb-4 uppercase tracking-wider">{member.designation}</p>
									<div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
										{member.linkedin && (
											<Link
												href={member.linkedin}
												target="_blank"
												className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-blue-600 text-white backdrop-blur-md transition-all duration-300 hover:scale-110"
											>
												<Linkedin className="w-4 h-4" />
											</Link>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
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
