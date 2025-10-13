"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TextRoll } from "@/components/motion-primitives/text-roll";

export default function HomePage() {
	const images = [
		"/taktshang.jpeg",
		"/punadzong1.jpeg",
		"/dochula.jpg",
		"/punadzongnight.jpeg",
		"/kajichortoen.jpeg",
		"/gasa.jpeg",
	];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % images.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<div className="absolute inset-0 -z-10">
					{images.map((src, i) => (
						<Image
							key={i}
							src={src}
							alt="background"
							fill
							className={`object-cover transition-opacity duration-1000 ${
								i === index ? "opacity-100" : "opacity-0"
							}`}
							priority={i === index}
						/>
					))}
				</div>
				<ul className="font-mono text-center sm:text-left bg-gray-900/50 p-4">
					<li className="mb-2 tracking-[-.01em] text-3xl sm:text-4xl font-extrabold">
						<TextRoll>Truly Authentic & Inspiring </TextRoll>
					</li>
					<li className="mb-2 tracking-[-.01em] text-3xl sm:text-4xl font-extrabold">
						<TextRoll> Holidays</TextRoll>
					</li>
					<li className="tracking-[-.01em] border-t-4 text-2xl font-extrabold">
						<TextRoll>Explore Happiness</TextRoll>
					</li>
					<li className="tracking-[-.01em] text-2xl font-extrabold">
						<TextRoll>With Himalayan Sky</TextRoll>
					</li>
					<li className="tracking-[-.01em] text-2xl font-extrabold">
						<TextRoll>View Tours</TextRoll>
					</li>
				</ul>
				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<a
						href="mailto:drukkinley1989@gmail.com?subject=Tour%20Booking%20Request"
						className="border-4 border-gray-200 rounded-full px-6 py-3 font-bold bg-gray-600/50 hover:bg-gray-700/70 transition"
					>
						BOOK NOW
					</a>
				</div>
			</main>
		</div>
	);
}
