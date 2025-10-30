
export default function Page() {
	return (
		<div className="mx-auto max-w-full lg:flex lg:items-start lg:gap-x-10 px-4 sm:px-0">
			<div className="lg:mx-0 lg:flex-auto">
				<div className="mx-auto text-center space-y-8">
					<div>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							About Us
						</h2>
						<p className="mt-6 text-lg leading-8 text-muted-foreground max-w-4xl mx-auto">
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
					<div>
						<h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
							Our Vision
						</h3>
						<p className="mt-4 text-lg leading-8 text-muted-foreground max-w-4xl mx-auto">
							To inspire and empower students to excel in the fields of
							engineering, technology, and science, while contributing to
							societal well-being through innovative and sustainable
							solutions.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
