
"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useIsPresent,
  useMotionValue,
  type MotionValue,
} from "motion/react";
import React, { useState } from "react";
import { Link } from "./link";

interface FloatingDockProps {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
  className?: string;
  mobileClassName?: string;
}

export const FloatingDock = ({
  items,
  className,
  mobileClassName,
}: FloatingDockProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const mouseX = useMotionValue<number>(0);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(e.nativeEvent.x);
  };
  return (
    <>
      <div
        onMouseMove={onMouseMove}
        className={cn(
          "hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 items-end justify-center gap-2 rounded-2xl border border-neutral-200 bg-white/40 p-1.5 backdrop-blur-md dark:border-neutral-800 dark:bg-black/40",
          className,
        )}
      >
        {items.map((item, idx) => (
          <DockItem
            key={`dock-item-${idx}`}
            item={item}
            onHover={() => setHovered(idx)}
            isHovered={hovered === idx}
            mouseX={mouseX}
          />
        ))}
      </div>
      <div
        className={cn(
          "fixed bottom-0 inset-x-0 w-full p-2 z-50 md:hidden",
          mobileClassName,
        )}
      >
        <div className="flex justify-around items-center w-full bg-white/40 dark:bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-neutral-200 dark:border-neutral-800">
          {items.map((item, idx) => (
            <Link
              href={item.href}
              key={`mobile-dock-item-${idx}`}
              className="flex flex-col items-center justify-center gap-1 text-neutral-500 dark:text-neutral-400"
            >
              {item.icon}
              <span className="text-xs">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const DockItem = ({
  item,
  onHover,
  isHovered,
  mouseX,
}: {
  item: {
    title: string;
    icon: React.ReactNode;
    href: string;
  };
  onHover: () => void;
  isHovered: boolean;
  mouseX: MotionValue<number>;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isPresent = useIsPresent();

  const distance = useMotionValue(0);
  React.useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const distanceValue = Math.abs(mouseX.get() - centerX);
      distance.set(distanceValue);
    }
  }, [mouseX]);

  const scale = useMotionValue(1);
  React.useLayoutEffect(() => {
    const unsub = distance.on("change", (val) => {
      const newScale = 1 - val * 0.005;
      scale.set(Math.max(0.5, newScale));
    });

    return () => unsub();
  }, [distance]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={onHover}
      style={{
        scale,
      }}
      className="relative flex h-12 w-12 cursor-pointer items-center justify-center"
    >
      <Link href={item.href} className="flex h-full w-full items-center justify-center">
        {item.icon}
      </Link>
      <AnimatePresence>
        {isHovered && isPresent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-2 flex justify-center"
          >
            <div className="rounded-md bg-white px-2 py-1 text-xs text-black shadow-lg dark:bg-black dark:text-white">
              {item.title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
