"use client";

import type { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
	return (
		<div
			className="relative"
		>
			{children}
		</div>
	);
}