import { CurrentExecom } from "@/components/section/current-execom";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Execom 2026",
	description:
		"Meet the IEEE SB SBCE Executive Committee for 2026 across our societies and chapters.",
	alternates: {
		canonical: "/excom/2026",
	},
};

export default function Page() {
	return (
		<div className="py-6">
			<CurrentExecom />
		</div>
	);
}
