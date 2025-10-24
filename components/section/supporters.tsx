import Image from "next/image";

export function Supporters() {
	return (
		<div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-y-10 sm:gap-x-20">
			<Image
				src="https://www.ieeesbsbce.in/assests/frond-page/ieee.svg"
				alt="IEEE Society Logo"
				width={150}
				height={60}
				className="filter-black transition-transform duration-300 hover:scale-110"
			/>
			<Image
				src="https://www.ieeesbsbce.in/assests/frond-page/ias.svg"
				alt="IAS Society Logo"
				width={150}
				height={60}
				className="filter-black transition-transform duration-300 hover:scale-110"
			/>
			<Image
				src="https://www.ieeesbsbce.in/assests/frond-page/cs.svg"
				alt="CS Society Logo"
				width={150}
				height={60}
				className="filter-black transition-transform duration-300 hover:scale-110"
			/>
			<Image
				src="https://www.ieeesbsbce.in/assests/frond-page/SPS_Logo_KO_RGB.png"
				alt="SPS Society Logo"
				width={150}
				height={60}
				className="filter-black transition-transform duration-300 hover:scale-110"
			/>
		</div>
	);
}
