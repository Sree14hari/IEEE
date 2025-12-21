import Image from "next/image";

export default function Page() {
	return (
		<div className="mx-auto max-w-full px-4 sm:px-0 pt-4 pb-12 lg:pt-8 lg:pb-16">
			<div className="mx-auto max-w-7xl text-center space-y-10 lg:px-8">
				<div className="mx-auto max-w-2xl">
					<h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 font-display">
						Our Societies
					</h1>
					<p className="mt-6 text-lg leading-8 text-muted-foreground">
						Explore the various societies under our IEEE branch, each dedicated
						to advancing technology in specific fields.
					</p>
				</div>

				<div className="space-y-24">
					{/* IEEE SBCE Intro */}
					<div className="flex flex-col lg:flex-row gap-8 items-center text-left">
						<div className="relative w-full max-w-xs lg:max-w-xs flex justify-center lg:justify-start">
							<Image
								src="/logo/ieee.svg"
								alt="IEEE SBCE Logo"
								width={500}
								height={500}
								className="w-full h-auto object-contain filter-black"
							/>
						</div>
						<div className="flex flex-col gap-6 lg:w-2/3">
							<h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50 font-display">
								IEEE Student Branch CE
							</h2>
							<p className="text-sm leading-6 text-muted-foreground">
								IEEE Student Branch CE (IEEE SBCE) stands as a vibrant hub of
								innovation, learning, and technical excellence. Guided by the
								vision of “Empowering Innovation, Inspiring Excellence,” our
								branch brings together enthusiastic students who share a passion
								for technology and a drive to excel in an ever-evolving
								engineering landscape. With the continuous guidance and support
								of our dedicated faculty mentors, we strive to nurture
								curiosity, sharpen skills, and prepare our members to become
								future-ready engineers and leaders.
							</p>
							<p className="text-sm leading-6 text-muted-foreground">
								Established with the objective of promoting technical awareness
								and professional growth, IEEE SBCE provides a dynamic platform
								for students to explore emerging technologies, innovate beyond
								classrooms, and grow both academically and professionally.
								Through a wide range of initiatives—including technical
								workshops, hackathons, seminars, expert talks, and collaborative
								projects—we actively bridge the gap between theoretical learning
								and real-world applications.
							</p>
							<p className="text-sm leading-6 text-muted-foreground">
								As a leading technical student organization at our institution,
								IEEE SBCE is committed to leveraging technology, research, and
								education to create meaningful impact. By fostering a culture of
								learning, collaboration, and innovation, we aim to build an
								inclusive ecosystem where students are empowered to contribute,
								lead, and shape the future of engineering and technology.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
