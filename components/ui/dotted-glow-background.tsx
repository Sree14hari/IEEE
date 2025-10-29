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
			const dpr = window.devicePixelRatio || 1;
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

			const isDark =
				window.matchMedia &&
				window.matchMedia("(prefers-color-scheme: dark)").matches;
			const color = getComputedStyle(document.documentElement)
				.getPropertyValue(isDark ? colorDarkVar : colorLightVar)
				.trim();
			const glowColor = getComputedStyle(document.documentElement)
				.getPropertyValue(isDark ? glowColorDarkVar : glowColorLightVar)
				.trim();

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			if (backgroundOpacity > 0) {
				ctx.fillStyle = `hsla(${color}, ${backgroundOpacity})`;
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			}

			// Create a glow effect for the entire canvas
			const gradient = ctx.createRadialGradient(
				canvas.width / window.devicePixelRatio / 2,
				canvas.height / window.devicePixelRatio / 2,
				0,
				canvas.width / window.devicePixelRatio / 2,
				canvas.height / window.devicePixelRatio / 2,
				glowRadius,
			);
			gradient.addColorStop(0, `hsla(${glowColor} / ${glowOpacity})`);
			gradient.addColorStop(1, `hsla(${glowColor} / 0)`);
			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle = `hsla(${color} / ${opacity})`;
			dots.forEach((dot) => {
				ctx.beginPath();
				ctx.arc(dot.x, dot.y, radius, 0, 2 * Math.PI);
				ctx.fill();
			});
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
