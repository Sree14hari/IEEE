
import { Gallery } from "@/components/section/gallery";

export default function Page() {
	return (
		<div className="mx-auto max-w-full">
			<div className="mx-auto text-center space-y-4">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
					Gallery
				</h2>
				<p className="text-lg leading-8 text-muted-foreground">
					A glimpse into our events and activities.
				</p>
			</div>
			<div className="mt-8">
				<Gallery />
			</div>
		</div>
	);
}
