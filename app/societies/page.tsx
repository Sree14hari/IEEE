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

					{/* IEEE IAS Intro */}
					<div className="flex flex-col lg:flex-row-reverse gap-8 items-center text-left">
						<div className="relative w-full max-w-xs lg:max-w-xs flex justify-center lg:justify-end">
							<Image
								src="/logo/ias.svg"
								alt="IEEE IAS Logo"
								width={500}
								height={500}
								className="w-full h-auto object-contain filter-black"
							/>
						</div>
						<div className="flex flex-col gap-6 lg:w-2/3">
							<h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50 font-display">
								IEEE Industry Applications Society (IEEE IAS)
							</h2>
							<p className="text-sm leading-6 text-muted-foreground">
								The IEEE Industry Applications Society (IAS) is a global
								professional community dedicated to advancing the theory and
								practice of electrical and electronic engineering in industrial
								and commercial applications. IEEE IAS bridges the gap between
								academic knowledge and real-world industry needs, empowering
								students and professionals to design, develop, and deploy
								practical, reliable, and sustainable technological solutions.
							</p>
							<p className="text-sm leading-6 text-muted-foreground">
								At the student level, IEEE IAS provides a unique platform for
								aspiring engineers to gain industry-oriented exposure beyond
								traditional classroom learning. Through technical workshops,
								industrial visits, expert talks, hands-on projects, and
								competitions, IAS equips members with practical skills,
								professional insights, and a deep understanding of real-world
								engineering challenges.
							</p>
							<p className="text-sm leading-6 text-muted-foreground">
								IEEE IAS emphasizes innovation in areas such as power systems,
								industrial automation, renewable energy, smart grids, electric
								vehicles, manufacturing technologies, and safety standards. By
								encouraging interdisciplinary learning and applied research, the
								society helps students stay aligned with current industry trends
								and emerging technologies.
							</p>
							<p className="text-sm leading-6 text-muted-foreground">
								The mission of IEEE IAS is to foster professional development,
								technical excellence, and ethical responsibility among its
								members. By connecting students with industry experts,
								researchers, and global IEEE resources, IEEE IAS nurtures future
								engineers who are industry-ready, socially responsible, and
								capable of driving technological progress with real-world
								impact.
							</p>
						</div>
					</div>

					{/* IEEE CS Intro */}
					<div className="flex flex-col lg:flex-row gap-8 items-center text-left">
						<div className="relative w-full max-w-xs lg:max-w-xs flex justify-center lg:justify-start">
							<Image
								src="/logo/cs.svg"
								alt="IEEE CS Logo"
								width={500}
								height={500}
								className="w-full h-auto object-contain filter-black"
							/>
						</div>
						<div className="flex flex-col gap-6 lg:w-2/3">
							<h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50 font-display">
								IEEE Computer Society
							</h2>
							<p className="text-sm leading-6 text-muted-foreground">
								The IEEE Computer Society (IEEE CS) is the world’s leading
								professional organization dedicated to advancing computing and
								information technology. It brings together students,
								researchers, and industry professionals who are passionate about
								shaping the future of computer science, software engineering,
								artificial intelligence, data science, cybersecurity, and
								emerging digital technologies.
							</p>
							<p className="text-sm leading-6 text-muted-foreground">
								At the student chapter level, IEEE Computer Society provides a
								dynamic platform for learners to explore cutting-edge
								advancements in computing beyond the academic curriculum.
								Through technical workshops, coding competitions, hackathons,
								expert talks, seminars, and collaborative projects, IEEE CS
								empowers students with strong technical foundations and
								real-world problem-solving skills.
							</p>
							<p className="text-sm leading-6 text-muted-foreground">
								IEEE CS actively promotes innovation and research in domains
								such as algorithms, machine learning, cloud computing, computer
								vision, human–computer interaction, and software systems. By
								connecting members with global IEEE resources, conferences,
								publications, and professional networks, the society helps
								students stay aligned with industry trends and research
								frontiers.
							</p>
							<p className="text-sm leading-6 text-muted-foreground">
								The mission of IEEE Computer Society is to foster technical
								excellence, lifelong learning, and professional growth while
								encouraging ethical and responsible computing practices. By
								nurturing curiosity, collaboration, and leadership, IEEE CS
								prepares students to become skilled technologists, innovators,
								and leaders capable of driving meaningful impact in the digital
								era.
							</p>
						</div>
					</div>

					{/* IEEE SPS Intro */}
					<div className="flex flex-col lg:flex-row-reverse gap-8 items-center text-left">
						<div className="relative w-full max-w-xs lg:max-w-xs flex justify-center lg:justify-end">
							<Image
								src="/logo/SPS_Logo_KO_RGB.webp"
								alt="IEEE SPS Logo"
								width={500}
								height={500}
								className="w-full h-auto object-contain filter-black"
							/>
						</div>
						<div className="flex flex-col gap-6 lg:w-2/3">
							<h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-zinc-900 dark:text-zinc-50 font-display">
								IEEE Signal Processing Society (IEEE SPS)
							</h2>
							<p className="text-sm leading-6 text-muted-foreground">
								The IEEE Signal Processing Society (SPS) is a global
								professional society dedicated to the advancement of signal
								processing theory, algorithms, and applications. It focuses on
								the analysis, processing, interpretation, and understanding of
								signals arising from diverse domains such as audio, speech,
								images, video, biomedical systems, communications, radar, and
								machine learning.
							</p>
							<p className="text-sm leading-6 text-muted-foreground">
								At the student chapter level, IEEE SPS provides an enriching
								platform for students to explore both the theoretical
								foundations and real-world applications of signal processing.
								Through technical workshops, hands-on sessions, seminars, expert
								talks, research discussions, and competitions, the society
								enables students to gain practical skills and industry-relevant
								knowledge beyond the classroom.
							</p>
							<p className="text-sm leading-6 text-muted-foreground">
								IEEE SPS actively promotes innovation and research in areas
								including digital signal processing, computer vision, speech and
								audio processing, image and video analytics, biomedical signal
								processing, pattern recognition, and AI-driven signal analysis.
								By engaging with global IEEE resources, conferences, and
								publications, students remain aligned with cutting-edge research
								and emerging technologies.
							</p>
							<p className="text-sm leading-6 text-muted-foreground">
								The mission of the IEEE Signal Processing Society is to foster
								technical excellence, research-driven learning, and professional
								growth while encouraging collaboration and ethical engineering
								practices. By nurturing analytical thinking, innovation, and
								interdisciplinary learning, IEEE SPS empowers students to become
								skilled engineers and researchers capable of addressing complex
								real-world challenges through signal processing technologies.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
