"use client";
import { TextRoll } from "@/components/motion-primitives/text-roll";

export default function About() {
	return (
		<div className="flex justify-center -mt-30 h-60 mb-16">
			<div className="font-sans bg-white grid grid-rows-[20px_1fr_20px] rounded-t-full items-center justify-items-center p-8 pb-20 sm:p-20 ">
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
			</div>
		</div>
	);
}
