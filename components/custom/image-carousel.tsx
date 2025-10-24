'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const images = [
	{
		src: '/Gallery/ieee.jpg',
		alt: 'Carousel image 1',
		hint: 'event photo',
	},
	{
		src: '/Gallery/ieee2.jpg',
		alt: 'Carousel image 2',
		hint: 'event photo',
	},
	{
		src: '/Gallery/ieee3.jpg',
		alt: 'Carousel image 3',
		hint: 'event photo',
	},
	{
		src: '/Gallery/ieee2.jpg',
		alt: 'Carousel image 6',
		hint: 'event photo',
	},
	{
		src: '/Gallery/ieee.jpg',
		alt: 'Carousel image 5',
		hint: 'event photo',
	},
	{
		src: '/Gallery/ieee3.jpg',
		alt: 'Carousel image 7',
		hint: 'event photo',
	},
	
	
	
];

export function ImageCarousel() {
	const [[page, direction], setPage] = useState([0, 0]);
	const [imagesPerPage, setImagesPerPage] = useState(3);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (!isClient) return;

		const handleResize = () => {
			if (window.innerWidth < 640) { // sm breakpoint
				setImagesPerPage(1);
			} else if (window.innerWidth < 768) { // md breakpoint
				setImagesPerPage(2);
			} else {
				setImagesPerPage(3);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [isClient]);

	if (!isClient) {
		return null; // Render nothing on the server
	}


	const numPages = Math.ceil(images.length / imagesPerPage);
	const pageIndex = (page % numPages + numPages) % numPages;

	const paginate = (newDirection: number) => {
		setPage([(page + newDirection) % numPages, newDirection]);
	};

	const getImagesForPage = (p: number) => {
		const start = p * imagesPerPage;
		const end = start + imagesPerPage;
		return images.slice(start, end);
	};

	return (
		<div className="relative mt-10 w-full flex flex-col items-center justify-center">
			<div className="relative w-full overflow-hidden h-64">
				<div
					key={page}
					className="absolute w-full h-full flex gap-4 px-4 transition-opacity duration-500"
				>
					{getImagesForPage(pageIndex).map((image) => (
						<div key={image.src} className="relative h-full w-full">
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="rounded-xl object-cover"
								data-ai-hint={image.hint}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-center items-center gap-4 mt-4">
				<Button
					plain
					onClick={() => paginate(-1)}
					className="rounded-full !p-2 bg-white/50 hover:bg-white/80"
				>
					<IconChevronLeft className="size-6" />
				</Button>
				<Button
					plain
					onClick={() => paginate(1)}
					className="rounded-full !p-2 bg-white/50 hover:bg-white/80"
				>
					<IconChevronRight className="size-6" />
				</Button>
			</div>
		</div>
	);
}
