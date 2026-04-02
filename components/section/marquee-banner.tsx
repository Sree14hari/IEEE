const row1 = ["Opportunity", "Innovation", "Networks", "Resources", "Leadership", "Growth", "Community", "Excellence"];
const row2 = ["Workshops", "IEEE Members", "Tech Talks", "Conferences", "Research", "Collaboration", "Awards", "Mentorship"];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
	return (
		<div className="flex overflow-hidden w-full">
			<div
				className="flex w-max items-center gap-0"
				style={{ animation: `${reverse ? "marquee-reverse" : "marquee"} 28s linear infinite` }}
			>
				{[0, 1].map((i) => (
					<div key={i} className="flex items-center">
						{items.map((item, j) => (
							<div key={`${i}-${j}`} className="flex items-center">
								<span className="text-sm sm:text-base font-semibold uppercase tracking-widest text-zinc-900 px-6 sm:px-8 whitespace-nowrap">
									{item}
								</span>
								<span className="text-zinc-300 text-lg select-none">✦</span>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export function MarqueeBanner() {
	return (
		<div className="relative bg-white overflow-hidden border-y border-zinc-100">
			{/* Row 1 — left to right */}
			<div className="py-3 sm:py-4 border-b border-zinc-100">
				<MarqueeRow items={row1} />
			</div>

			{/* Row 2 — right to left */}
			<div className="py-3 sm:py-4">
				<MarqueeRow items={row2} reverse />
			</div>

			<style>{`
				@keyframes marquee {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}
				@keyframes marquee-reverse {
					0% { transform: translateX(-50%); }
					100% { transform: translateX(0); }
				}
			`}</style>
		</div>
	);
}
