import Image from "next/image";

const logos = [
	{ src: "/logo/ieee.svg", alt: "IEEE Society Logo" },
	{ src: "/logo/ias.svg", alt: "IAS Society Logo" },
	{ src: "/logo/cs.svg", alt: "CS Society Logo" },
	{ src: "/logo/SPS_Logo_KO_RGB.webp", alt: "SPS Society Logo" },
	{
		src: "/logo/23-TA-99-008-IEEE-Solid-State-Circuits-Society-FExD-Logo-Color-RGB_NoTagline.png",
		alt: "SSCS Society Logo",
	},
	{ src: "/logo/IEEE Sensors Council Logo.png", alt: "Sensors Council Logo" },
];

export function Supporters() {
	return (
		<div className="mt-10 overflow-hidden w-full relative">
			{/* Fade edges */}
			<div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-white dark:from-zinc-900 to-transparent" />

			{/* Marquee — all screen sizes */}
			<div className="flex w-max items-center animate-marquee">
				{[0, 1].map((i) => (
					<div key={i} className="flex items-center gap-12 sm:gap-20 px-6 sm:px-10">
						{logos.map((logo, index) => (
							<div
								key={`logo-${i}-${index}`}
								className="flex-shrink-0 flex justify-center items-center"
							>
								<Image
									src={logo.src}
									alt={logo.alt}
									width={170}
									height={60}
									className="filter-black object-contain max-h-10 sm:max-h-14 max-w-[120px] sm:max-w-[170px] w-auto h-auto"
								/>
							</div>
						))}
					</div>
				))}
			</div>

			<style>{`
				@keyframes marquee {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}
				.animate-marquee {
					animation: marquee 30s linear infinite;
				}
				.animate-marquee:hover {
					animation-play-state: paused;
				}
			`}</style>
		</div>
	);
}
