
"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";

export function Gallery() {
  return <ParallaxScroll images={images} />;
}

const images = [
    { src: "/Gallery/ieee.jpg", hint: "event photo" },
    { src: "/Gallery/ieee2.jpg", hint: "event photo" },
    { src: "/Gallery/ieee3.jpg", hint: "event photo" },
    { src: "/Events/AI Insight.jpg", hint: "AI workshop" },
    { src: "/Events/Brush and Blush.jpg", hint: "networking event" },
    { src: "/Events/Cine Show.jpg", hint: "hackathon code" },
    { src: "/Events/Drone Workshop.jpg", hint: "student meetup" },
    { src: "/Events/Poster Designing Competition.jpg", hint: "tech conference" },
    { src: "/Events/Quiz Competition.jpg", hint: "lecture hall" },
    { src: "/Gallery/ieee.jpg", hint: "event photo" },
    { src: "/Gallery/ieee2.jpg", hint: "event photo" },
    { src: "/Gallery/ieee3.jpg", hint: "event photo" },
    { src: "/Events/AI Insight.jpg", hint: "AI workshop" },
    { src: "/Events/Brush and Blush.jpg", hint: "networking event" },
    { src: "/Events/Cine Show.jpg", hint: "hackathon code" },
];
