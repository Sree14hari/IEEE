import { AboutCollege } from "@/components/section/about-college";
import Image from "next/image";

export default function Page() {
	return (
		<div className="mx-auto max-w-full px-4 sm:px-0 pt-4 pb-12 lg:pt-8 lg:pb-16">
			<div className="mx-auto max-w-7xl text-center space-y-16 lg:px-8">
				<AboutCollege />
				<div className="space-y-16">
					<div className="flex flex-col lg:flex-row gap-8 items-center">
						<div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
							<svg
								width="329"
								height="316"
								viewBox="0 0 329 316"
								fill="none"
								xmlns="/mission.svg"
								className="w-full h-auto max-w-[500px]"
							>
								<rect width="329" height="316" fill="url(#pattern0_6_560)" />
								<defs>
									<pattern
										id="pattern0_6_560"
										patternContentUnits="objectBoundingBox"
										width="1"
										height="1"
									>
										<use
											xlinkHref="#image0_6_560"
											transform="matrix(0.00125 0 0 0.00130142 0 0.0418987)"
										/>
									</pattern>
									<image
										id="image0_6_560"
										width="800"
										height="704"
										preserveAspectRatio="none"
										xlinkHref="/mission.svg"
									/>
								</defs>
							</svg>
						</div>
						<div className="flex flex-col items-center lg:items-start lg:w-1/2 text-left">
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 font-display">
								Our Mission
							</h2>
							<p className="mt-6 text-lg leading-8 text-muted-foreground text-left">
								The IEEE SB SBCE is a dynamic community of students committed to
								advancing technology for humanity. Affiliated with the global
								IEEE network, the world's largest technical professional
								organization, our branch fosters a culture of innovation,
								knowledge sharing, and professional growth. We bring together
								students from diverse disciplines who share a common interest in
								exploring emerging technologies and developing impactful
								solutions.
							</p>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
						<div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
							<svg
								width="329"
								height="316"
								viewBox="0 0 329 316"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-full h-auto max-w-[500px]"
							>
								<rect width="329" height="316" fill="url(#pattern1_vision)" />
								<defs>
									<pattern
										id="pattern1_vision"
										patternContentUnits="objectBoundingBox"
										width="1"
										height="1"
									>
										<use
											xlinkHref="#image1_vision"
											transform="matrix(0.00125 0 0 0.00130142 0 0.0418987)"
										/>
									</pattern>
									<image
										id="image1_vision"
										width="800"
										height="704"
										preserveAspectRatio="none"
										xlinkHref="/vision.svg"
									/>
								</defs>
							</svg>
						</div>
						<div className="flex flex-col items-center lg:items-start lg:w-1/2 text-left">
							<h3 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50 font-display">
								Our Vision
							</h3>
							<p className="mt-6 text-lg leading-8 text-muted-foreground text-left">
								To inspire and empower students to excel in the fields of
								engineering, technology, and science, while contributing to
								societal well-being through innovative and sustainable
								solutions. We strive to create a vibrant ecosystem where
								technical excellence meets social responsibility, nurturing the
								next generation of leaders who will shape the future of
								technology. Through collaborative learning and hands-on
								experience, we aim to bridge the gap between academic knowledge
								and industry demands.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
