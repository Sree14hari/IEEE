import {
	IconAward,
	IconBooks,
	IconCoins,
	IconUsers,
} from "@tabler/icons-react";

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
		<div className="bg-white py-12 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base font-medium leading-7 text-blue-500">
						Membership
					</h2>
					<p className="mt-2 text-3xl font-medium tracking-tight sm:text-4xl">
						Why Join Us?
					</p>
					<p className="mt-6 text-lg leading-8 text-muted-foreground text-balance">
						Joining our IEEE student branch opens the door to a world of
						opportunities, resources, and connections that will enrich your
						academic and professional journey.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16 transition-transform duration-300 hover:scale-105">
								<dt className="text-lg font-medium leading-7 text-zinc-950">
									<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
										<feature.icon
											aria-hidden="true"
											className="h-6 w-6 text-blue-950"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base leading-7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
