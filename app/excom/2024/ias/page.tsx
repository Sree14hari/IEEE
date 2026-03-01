import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

interface ExecomMember {
	id: string;
	name: string;
	designation: string;
	linkedin?: string;
	category: string;
	year: string;
	image_url: string;
}

export default async function Page() {
	let members: ExecomMember[] = [];
	try {
		const res = await fetch(
			"https://ieee-events-api.ieeesbcesb20.workers.dev/execom",
			{
				cache: "no-store",
			},
		);
		const data = await res.json();
		members = data.filter(
			(m: ExecomMember) => m.category === "IAS Execom" && m.year === "2024",
		);
	} catch (error) {
		console.error("Failed to fetch execom:", error);
	}

	return (
		<div className="mx-auto max-w-full px-4 sm:px-0 mb-12">
			<div className="lg:mx-0 lg:flex-auto">
				<div className="mx-auto sm:text-left">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						IAS Execom 2024
					</h2>
					<p className="mt-2 text-lg leading-8 text-muted-foreground mb-8">
						Meet the Industry Applications Society Executive Committee for 2024.
					</p>
				</div>

				{members.length === 0 ? (
					<p className="text-muted-foreground">Member details coming soon.</p>
				) : (
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{members.map((member: ExecomMember) => (
							<Card
								key={member.id}
								className="overflow-hidden flex flex-col items-center p-4"
							>
								<div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-primary/20">
									<Image
										src={member.image_url || "/placeholder.svg"}
										alt={member.name}
										fill
										className="object-cover"
									/>
								</div>
								<CardContent className="p-0 text-center flex flex-col items-center">
									<h3 className="text-lg font-bold">{member.name}</h3>
									<p className="text-sm text-primary font-medium mb-1">
										{member.designation}
									</p>
									{member.linkedin && (
										<Link
											href={member.linkedin}
											target="_blank"
											className="text-muted-foreground hover:text-blue-500 mt-2 transition-colors"
										>
											<Linkedin className="h-5 w-5" />
										</Link>
									)}
								</CardContent>
							</Card>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
