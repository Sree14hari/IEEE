import Image from "next/image";

export function Supporters() {
	return (
		<div className="mt-10 grid grid-cols-2 sm:flex sm:flex-row justify-items-center items-center gap-10 sm:gap-x-20 sm:justify-center">
			<Image
				src="/logo/ieee.svg"
				alt="IEEE Society Logo"
				width={150}
				height={60}
				className="filter-black transition-transform duration-300 hover:scale-110"
			/>
			<Image
				src="/logo/ias.svg"
				alt="IAS Society Logo"
				width={150}
				height={60}
				className="filter-black transition-transform duration-300 hover:scale-110"
			/>
			<Image
				src="/logo/cs.svg"
				alt="CS Society Logo"
				width={150}
				height={60}
				className="filter-black transition-transform duration-300 hover:scale-110"
			/>
			<Image
				src="/logo/SPS_Logo_KO_RGB.webp"
				alt="SPS Society Logo"
				width={150}
				height={60}
				className="filter-black transition-transform duration-300 hover:scale-110"
			/>
			<Image
				src="/logo/23-TA-99-008-IEEE-Solid-State-Circuits-Society-FExD-Logo-Color-RGB_NoTagline.png"
				alt="SPS Society Logo"
				width={150}
				height={60}
				className="filter-black transition-transform duration-300 hover:scale-110"
			/>
			<Image
				src="/logo/IEEE Sensors Council Logo.png"
				alt="SPS Society Logo"
				width={150}
				height={60}
				className="filter-black transition-transform duration-300 hover:scale-110"
			/>
		</div>
	);
}
