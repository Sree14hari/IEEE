
import Image from "next/image";
import {
	Card,
	CardContent,
} from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { Linkedin } from "lucide-react";

const members = [
	{
		name: "Prof. Ananthu Vijayakumar",
		role: "Branch Counsellor",
		image: "/Ananthu.png",
		linkedin: null,
	},
	{
		name: "NEHA SIJU",
		role: "Chairman",
		image: "/Neha.png",
		linkedin: "https://www.linkedin.com/in/nehasiju/",
	},
	{
		name: "SREYAS MOHAN",
		role: "Vice Chair",
		image: "/Sreyas.png",
		linkedin: "https://www.linkedin.com/in/sreyas-mohan-8a227027b/",
	},
	{
		name: "ANANTHAKRISHNAN S",
		role: "Secretary",
		image: "/anathakrishnan.jpeg",
		linkedin: "https://www.linkedin.com/in/ananthakrishnan-s-55b0b9275/",
	},
	{
		name: "SALWA SAINUDDIN",
		role: "Treasurer",
		image: "/Salwa.jpg",
		linkedin: "https://www.linkedin.com/in/salwa-sainuddin/",
	},
	{
		name: "AISHWARYA AMMAL S",
		role: "Joint Treasurer",
		image: "/Aishwarya_Ammal.jpg",
		linkedin: "https://www.linkedin.com/in/aishwarya-ammal-s-879147271/",
	},
	{
		name: "ANAGHA VENUGOPAL",
		role: "Documentation Lead",
		image: "/Anagha_Venugopal.jpg",
		linkedin: "https://www.linkedin.com/in/anagha-venugopal-b76a322b5/",
	},
	{
		name: "VISHNU V",
		role: "Program Coordinator",
		image: "/IMG_20250131_083411.jpg",
		linkedin: null,
	},
	{
		name: "AADIT AJAY",
		role: "MDC",
		image: "/Aadit_Ajay.jpg",
		linkedin: "https://www.linkedin.com/in/aadit-ajay-072a99350/",
	},
	{
		name: "CENJEL AJEIKA M",
		role: "LINK REPRESENTATIVE",
		image: "/Cenjel.jpg",
		linkedin: "https://www.linkedin.com/in/cenjelajeikam/",
	},
	{
		name: "ANJANA B",
		role: "Newsletter Editor",
		image: "/Anjana.JPG",
		linkedin: "https://www.linkedin.com/in/anjana-b-b0b865204/",
	},
	{
		name: "KARTHIK KAILAS",
		role: "WEBMASTER",
		image: "/Karthik.jpeg",
		linkedin: "https://www.linkedin.com/in/karthik-s-kailas/",
	},
];

export default function Page() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-0">
			<div className="lg:mx-0 lg:flex-auto">
				<div className="mx-auto sm:text-left">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						SB Excom 2024
					</h2>
					<p className="mt-2 text-lg leading-8 text-muted-foreground">
						Meet the team behind the IEEE Student Branch.
					</p>
				</div>
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{members.map((member) => (
						<Card key={member.name} className="group overflow-hidden text-center">
							<div className="relative h-64 w-full">
								<Image
									src={member.image}
									alt={`Photo of ${member.name}`}
									fill
									className="object-cover object-top"
								/>
								{member.linkedin && (
									<Link
										href={member.linkedin}
										target="_blank"
										className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
									>
										<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm">
											<Linkedin className="h-5 w-5 text-blue-600" />
										</span>
									</Link>
								)}
							</div>
							<CardContent className="p-4">
								<h3 className="text-lg font-bold">{member.name}</h3>
								<p className="text-sm text-muted-foreground">{member.role}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
