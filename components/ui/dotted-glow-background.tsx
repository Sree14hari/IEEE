
"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DottedGlowBackgroundProps {
	children?: React.ReactNode;
	className?: string;
	gap?: number;
	size?: number;
	opacity?: number;
	radius?: number;
	glowOpacity?: number;
	glowRadius?: number;
	colorLightVar?: string;
	colorDarkVar?: string;
	glowColorLightVar?: string;
	glowColorDarkVar?: string;
	backgroundOpacity?: number;
	speedMin?: number;
	speedMax?: number;
	speedScale?: number;
}

const DottedGlowBackground: React.FC<DottedGlowBackgroundProps> = ({
	children,
	className,
	gap = 10,
	size = 1,
	opacity = 0.2,
	radius = 2,
	glowOpacity = 0.04,
	glowRadius = 150,
	colorLightVar = "--color-zinc-500",
	colorDarkVar = "--color-zinc-500",
	glowColorLightVar = "--color-zinc-600",
	glowColorDarkVar = "--color-sky-800",
	backgroundOpacity = 0,
	speedMin = 0.3,
	speedMax = 0.8,
	speedScale = 1,
}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationFrameId: number;
		let dots: { x: number; y: number; vx: number; vy: number }[] = [];

		const resizeCanvas = () => {
			const dpr = window.devicePixelRatio || 1;
			const rect = canvas.getBoundingClientRect();
			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;
			ctx.scale(dpr, dpr);
			createDots();
		};

		const createDots = () => {
			dots = [];
			const rect = canvas.getBoundingClientRect();
			const width = rect.width;
			const height = rect.height;

			for (let i = 0; i < width; i += gap) {
				for (let j = 0; j < height; j += gap) {
					const speed =
						(Math.random() * (speedMax - speedMin) + speedMin) * speedScale;
					const angle = Math.random() * 2 * Math.PI;
					dots.push({
						x: i,
						y: j,
						vx: Math.cos(angle) * speed,
						vy: Math.sin(angle) * speed,
					});
				}
			}
		};

		const draw = () => {
			if (!ctx) return;
			const rect = canvas.getBoundingClientRect();

			const isDark =
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches;
			const colorVar = isDark ? colorDarkVar : colorLightVar;
			const glowColorVar = isDark ? glowColorDarkVar : glowColorLightVar;

			const colorVal = getComputedStyle(document.documentElement).getPropertyValue(colorVar).trim();
			const glowColorVal = getComputedStyle(document.documentElement).getPropertyValue(glowColorVar).trim();
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			if (backgroundOpacity > 0) {
				ctx.globalAlpha = backgroundOpacity;
				ctx.fillStyle = colorVal;
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			}

			// Create a glow effect for the entire canvas
			const gradient = ctx.createRadialGradient(
				rect.width / 2,
				rect.height / 2,
				0,
				rect.width / 2,
				rect.height / 2,
				glowRadius,
			);
			
			ctx.globalAlpha = glowOpacity;
			ctx.fillStyle = glowColorVal;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.globalAlpha = 1;


			ctx.globalAlpha = opacity;
			ctx.fillStyle = colorVal;
			dots.forEach((dot) => {
				ctx.beginPath();
				ctx.arc(dot.x, dot.y, radius, 0, 2 * Math.PI);
				ctx.fill();
			});
			ctx.globalAlpha = 1;
		};

		const update = () => {
			const rect = canvas.getBoundingClientRect();
			const width = rect.width;
			const height = rect.height;

			dots.forEach((dot) => {
				dot.x += dot.vx;
				dot.y += dot.vy;

				if (dot.x < 0) dot.x = width;
				if (dot.x > width) dot.x = 0;
				if (dot.y < 0) dot.y = height;
				if (dot.y > height) dot.y = 0;
			});
		};

		const animate = () => {
			update();
			draw();
			animationFrameId = window.requestAnimationFrame(animate);
		};

		resizeCanvas();
		animate();

		window.addEventListener("resize", resizeCanvas);

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [
		gap,
		size,
		opacity,
		radius,
		glowOpacity,
		glowRadius,
		colorLightVar,
		colorDarkVar,
		glowColorLightVar,
		glowColorDarkVar,
		backgroundOpacity,
		speedMin,
		speedMax,
		speedScale,
	]);

	return (
		<div className={cn("relative size-full", className)}>
			<canvas
				ref={canvasRef}
				className="absolute inset-0 size-full"
				style={{ zIndex: 0 }}
			/>
			<div className="relative z-10">{children}</div>
		</div>
	);
};

export default DottedGlowBackground;

