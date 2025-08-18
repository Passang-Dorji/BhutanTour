"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TextRoll } from "@/components/motion-primitives/text-roll";

const images = ["/paro_taktshang.jpg", "/puna_dzong.jpg", "/trongsa_dzong.jpg"];
export default function HomePage() {
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
				{/* <Image
					className="object-cover -z-2"
					src="/paro_taktshang.jpg"
					alt="paro taktshang"å
					fill
					priority
				/> */}
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
					<li className="mb-2 tracking-[-.01em] text-4xl font-extrabold">
						<TextRoll>Truly Authentic & Inspiring Holidays</TextRoll>
					</li>
					<li className="tracking-[-.01em] border-t-4 text-2xl font-extrabold">
						<TextRoll>Explore Happiness With Aster Tours & Travel</TextRoll>
					</li>
				</ul>
				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<button className=" border-4 border-gray-200 rounded-full px-4 py-2 font-bold bg-gray-600/50">
						BOOK NOW
					</button>
					<button className=" border-b-4 border-gray-200 px-4 py-2 font-bold ">
						More
					</button>
				</div>
			</main>
		</div>
	);
}
