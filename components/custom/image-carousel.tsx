'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';

import { Button } from '@/components/ui/button';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const images = [
	{
		src: 'https://picsum.photos/seed/1/800/600',
		alt: 'Carousel image 1',
		hint: 'event photo',
	},
	{
		src: 'https://picsum.photos/seed/2/800/600',
		alt: 'Carousel image 2',
		hint: 'event photo',
	},
	{
		src: 'https://picsum.photos/seed/3/800/600',
		alt: 'Carousel image 3',
		hint: 'event photo',
	},
	{
		src: 'https://picsum.photos/seed/4/800/600',
		alt: 'Carousel image 4',
		hint: 'event photo',
	},
	{
		src: 'https://picsum.photos/seed/5/800/600',
		alt: 'Carousel image 5',
		hint: 'event photo',
	},
	{
		src: 'https://picsum.photos/seed/6/800/600',
		alt: 'Carousel image 6',
		hint: 'event photo',
	},
];

const variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? '100%' : '-100%',
		opacity: 0,
	}),
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => ({
		zIndex: 0,
		x: direction < 0 ? '100%' : '-100%',
		opacity: 0,
	}),
};


export function ImageCarousel() {
	const [[page, direction], setPage] = useState([0, 0]);
	const { width } = useWindowSize();
    const [imagesPerPage, setImagesPerPage] = useState(3);

    useEffect(() => {
        if (width < 640) { // sm breakpoint
            setImagesPerPage(1);
        } else if (width < 1024) { // md breakpoint
            setImagesPerPage(2);
        } else {
            setImagesPerPage(3);
        }
    }, [width]);


	const numPages = Math.ceil(images.length / imagesPerPage);
	const pageIndex = (page % numPages + numPages) % numPages;

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	const getImagesForPage = (p: number) => {
		const start = p * imagesPerPage;
		const end = start + imagesPerPage;
		return images.slice(start, end);
	};

	return (
		<div className="relative mt-10 w-full overflow-hidden h-64 flex items-center justify-center">
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={page}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={cn(
						"absolute w-full h-full grid gap-4 px-4 sm:px-12",
						`grid-cols-${imagesPerPage}`
					)}
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
				</motion.div>
			</AnimatePresence>
			<div className="absolute top-1/2 left-2 sm:left-4 z-20 -translate-y-1/2">
				<Button
					plain
					onClick={() => paginate(-1)}
					className="rounded-full !p-2 bg-white/50 hover:bg-white/80"
				>
					<IconChevronLeft className="size-6" />
				</Button>
			</div>
			<div className="absolute top-1/2 right-2 sm:right-4 z-20 -translate-y-1/2">
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
