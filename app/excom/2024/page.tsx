
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const committees = [
	{ title: "SB Excom", slug: "sb", image: "https://picsum.photos/seed/sb2024/600/400", hint: "team meeting" },
	{ title: "CS Excom", slug: "cs", image: "https://picsum.photos/seed/cs2024/600/400", hint: "people coding" },
	{ title: "IAS Excom", slug: "ias", image: "https://picsum.photos/seed/ias2024/600/400", hint: "industrial machinery" },
];

export default function Page() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-0">
			<div className="lg:mx-0 lg:flex-auto">
				<div className="mx-auto sm:text-left">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Executive Committee 2024
					</h2>
					<p className="mt-2 text-lg leading-8 text-muted-foreground">
						Meet the 2024 team behind the scenes.
					</p>
				</div>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{committees.map((committee) => (
						<Link
							key={committee.slug}
							href={`/excom/2024/${committee.slug}`}
							className="block hover:scale-105 transition-transform duration-300"
						>
							<Card className="overflow-hidden">
								<div className="relative h-48 w-full">
									<Image
										src={committee.image}
										alt={committee.title}
										fill
										className="object-cover"
										data-ai-hint={committee.hint}
									/>
								</div>
								<CardHeader>
									<CardTitle>{committee.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">
										Click to see member details.
									</p>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
