
import {
	Card,
	CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const committees = [
	{ title: "SB Excom", slug: "sb", image: "/Excom/SB.webp", hint: "team meeting" },
	{ title: "CS Excom", slug: "cs", image: "/Excom/CS.webp", hint: "people coding" },
	{ title: "IAS Excom", slug: "ias", image: "/Excom/IAS.webp", hint: "industrial machinery" },
];

export default function Page() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-0">
			<div className="lg:mx-0 lg:flex-auto">
				<div className="mx-auto sm:text-left">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Executive Committee 2025
					</h2>
					<p className="mt-2 text-lg leading-8 text-muted-foreground">
						Meet the 2025 team behind the scenes.
					</p>
				</div>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{committees.map((committee) => (
						<Link
							key={committee.slug}
							href={`/excom/2025/${committee.slug}`}
							className="block hover:scale-105 transition-transform duration-300"
						>
							<Card className="overflow-hidden">
								<div className="bg-white p-6">
									<div className="relative h-40 w-full">
										<Image
											src={committee.image}
											alt={committee.title}
											fill
											className="object-contain"
											data-ai-hint={committee.hint}
										/>
									</div>
								</div>
								<CardContent className="p-4 text-center">
									<h3 className="text-lg font-bold">{committee.title}</h3>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
