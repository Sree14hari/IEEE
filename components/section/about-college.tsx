import { Strong } from "@/components/ui/text";
import Image from "next/image";

export function AboutCollege() {
	return (
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
			<div className="space-y-8 text-left">
				<h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl font-display">
					About <span className="text-primary">SBCE</span>
				</h2>
				<div className="space-y-6 text-lg leading-8 text-muted-foreground">
					<p>
						<Strong>Sree Buddha College of Engineering</Strong>, affiliated to
						APJ Abdul Kalam Technological University, has been par excellence in
						technical education. The sermons of Lord Buddha gave us a lead to be
						the flowers of exaltation.
					</p>
					<p>
						The primary objective is to promote education and research in the
						field of technology and to replenish the skills that get lurked in
						the budding technocrats. All the members of SBCE push themselves to
						set the institution as an example to the world.
					</p>
					<p>
						The institution is now accredited by{" "}
						<Strong>National Board of Accreditation</Strong> for 4 Undergraduate
						Programmes and re-accredited with <Strong>NAAC</Strong> with effect
						from Nov 2019. Also the college has been conferred{" "}
						<Strong>Autonomy</Strong> by the UGC from 2024-25 Academic Year
						onwards.
					</p>
				</div>
			</div>
			<div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl lg:aspect-auto lg:h-full min-h-[300px]">
				<Image
					src="https://sbce.ac.in/assets/images/profile_pic.png"
					alt="Sree Buddha College of Engineering"
					fill
					className="object-cover"
				/>
			</div>
		</div>
	);
}
