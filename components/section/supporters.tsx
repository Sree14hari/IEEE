import Image from "next/image";

export function Supporters() {
	return (
		<div className="mt-10 flex justify-center items-center gap-x-20">
			<Image
				src="https://www.ieeesbsbce.in/assests/frond-page/ieee.svg"
				alt="IEEE Society Logo"
				width={150}
				height={60}
				className="filter-black"
			/>
			<Image
				src="https://www.ieeesbsbce.in/assests/frond-page/ias.svg"
				alt="IAS Society Logo"
				width={150}
				height={60}
				className="filter-black"
			/>
			<Image
				src="https://www.ieeesbsbce.in/assests/frond-page/cs.svg"
				alt="CS Society Logo"
				width={150}
				height={60}
				className="filter-black"
			/>
			<Image
				src="https://www.ieeesbsbce.in/assests/frond-page/SPS_Logo_KO_RGB.png"
				alt="SPS Society Logo"
				width={150}
				height={60}
				className="filter-black"
			/>
		</div>
	);
}
