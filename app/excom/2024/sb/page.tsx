
import Image from "next/image";
import {
	Card,
	CardContent,
} from "@/components/ui/card";
import { Link } from "@/components/ui/link";

const branchCounsellor = {
	name: "Prof. Ananthu Vijayakumar",
	role: "Branch Counsellor",
	image: "/Excom/excom2024sb/Ananthu.webp",
	linkedin: null,
};

const otherMembers = [
	{
		name: "NEHA SIJU",
		role: "Chairman",
		image: "/Excom/excom2024sb/Neha.webp",
		linkedin: "https://www.linkedin.com/in/nehasiju/",
	},
	{
		name: "SREYAS MOHAN",
		role: "Vice Chair",
		image: "/Excom/excom2024sb/Sreyas.webp",
		linkedin: "https://www.linkedin.com/in/sreyas-mohan-8a227027b/",
	},
	{
		name: "ANANTHAKRISHNAN S",
		role: "Secretary",
		image: "/Excom/excom2024sb/anathakrishnan.webp",
		linkedin: "https://www.linkedin.com/in/ananthakrishnan-s-55b0b9275/",
	},
	{
		name: "SALWA SAINUDDIN",
		role: "Treasurer",
		image: "/Excom/excom2024sb/Salwa.webp",
		linkedin: "https://www.linkedin.com/in/salwa-sainuddin/",
	},
	{
		name: "AISHWARYA AMMAL S",
		role: "Joint Treasurer",
		image: "/Excom/excom2024sb/Aishwarya_Ammal.webp",
		linkedin: "https://www.linkedin.com/in/aishwarya-ammal-s-879147271/",
	},
	{
		name: "ANAGHA VENUGOPAL",
		role: "Documentation Lead",
		image: "/Excom/excom2024sb/AnaghaVenugopal.webp",
		linkedin: "https://www.linkedin.com/in/anagha-venugopal-b76a322b5/",
	},
	{
		name: "VISHNU V",
		role: "Program Coordinator",
		image: "/Excom/excom2024sb/vishnu.webp",
		linkedin: null,
	},
	{
		name: "AADIT AJAY",
		role: "MDC",
		image: "/Excom/excom2024sb/Aadit.webp",
		linkedin: "https://www.linkedin.com/in/aadit-ajay-072a99350/",
	},
	{
		name: "CENJEL AJEIKA M",
		role: "LINK REPRESENTATIVE",
		image: "/Excom/excom2024sb/Cenjel.webp",
		linkedin: "https://www.linkedin.com/in/cenjelajeikam/",
	},
	{
		name: "ANJANA B",
		role: "Newsletter Editor",
		image: "/Excom/excom2024sb/Anjana.webp",
		linkedin: "https://www.linkedin.com/in/anjana-b-b0b865204/",
	},
	{
		name: "KARTHIK KAILAS",
		role: "WEBMASTER",
		image: "/Excom/excom2024sb/Karthik.webp",
		linkedin: "https://www.linkedin.com/in/karthik-s-kailas/",
	},
];

const MemberCard = ({ name, role, image, linkedin }: { name: string, role: string, image: string, linkedin: string | null }) => {
	const cardContent = (
		<Card className="group h-full overflow-hidden text-center transition-transform duration-300 hover:scale-105">
			<div className="pt-8 pb-4 flex justify-center">
				<div className="relative size-32">
					<Image
						src={image}
						alt={`Photo of ${name}`}
						fill
						className="rounded-full object-cover object-top"
						data-ai-hint="person portrait"
					/>
				</div>
			</div>
			<CardContent className="p-4">
				<h3 className="text-lg font-bold">{name}</h3>
				<p className="text-sm text-muted-foreground">{role}</p>
			</CardContent>
		</Card>
	);

	if (linkedin) {
		return (
			<Link href={linkedin} target="_blank" className="block h-full">
				{cardContent}
			</Link>
		);
	}

	return <div className="h-full">{cardContent}</div>;
};


export default function Page() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-0">
			<div className="lg:mx-0 lg:flex-auto">
				<div className="mx-auto text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						SB Excom 2024
					</h2>
					<p className="mt-2 text-lg leading-8 text-muted-foreground">
						Meet the team behind the IEEE Student Branch.
					</p>
				</div>
                <div className="mt-12 flex justify-center">
                    <div className="w-full max-w-sm">
						<MemberCard {...branchCounsellor} />
                    </div>
                </div>

				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{otherMembers.map((member) => (
						<MemberCard key={member.name} {...member} />
					))}
				</div>
			</div>
		</div>
	);
}
