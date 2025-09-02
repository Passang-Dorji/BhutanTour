"use client";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="-mt-24 font-sans min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 bg-gray-50">
			<main className="max-w-4xl text-center sm:text-left space-y-6">
				<h1 className="text-4xl font-extrabold text-gray-800 border-b-4 border-gray-300 pb-2">
					About Us
				</h1>

				<div className="relative w-screen  h-[300px] lg:w-full md:w-screen rounded-2xl overflow-hidden shadow-lg ">
					{/* <Image
						src="/paro_taktshang.jpg"
						alt="About Aster Tours"
						fill
						className="object-cover glow-on-hover"
					/> */}
					<InfiniteSlider speedOnHover={20} gap={20}>
						<Image
							src="/thimphu.jpeg"
							alt="Buddha"
							width={300}
							height={300}
							className="aspect-square rounded-[4px]"
						/>
						<Image
							src="/dochula.jpg"
							alt="Dochula"
							width={300}
							height={300}
							className="aspect-square rounded-[4px]"
						/>
						<Image
							src="/kajichortoen.jpeg"
							alt="Yung Lean - Stardust"
							width={300}
							height={300}
							className="aspect-square rounded-[4px]"
						/>
						<Image
							src="/taktshang.jpeg"
							alt="paro_taktshang"
							width={300}
							height={300}
							className="aspect-square rounded-[4px]"
						/>
						<Image
							src="/punadzong1.jpeg"
							alt="punadzong"
							width={300}
							height={300}
							className="aspect-square rounded-[4px]"
						/>
						<Image
							src="/punadzongnight.jpeg"
							alt="night_view"
							width={300}
							height={300}
							className="aspect-square rounded-[4px]"
						/>
						<Image
							src="/stupa.jpeg"
							alt="stupa"
							width={300}
							height={300}
							className="aspect-square rounded-[4px]"
						/>
					</InfiniteSlider>
				</div>
				<div className="mx-auto text-left border-2 border-gray-400 rounded-lg shadow-lg hover:shadow-xl">
					<p className="text-lg text-gray-700 leading-relaxed p-3">
						Welcome to{" "}
						<span className="font-bold">Himalayan Sky View Tours</span>, where
						we craft{" "}
						<span className="italic">immersive and unforgettable journeys</span>{" "}
						through the enchanting kingdom of Bhutan. Guided by passion and
						expertise, our team is devoted to revealing the country’s majestic
						landscapes, timeless traditions, and the heartfelt warmth of its
						people.
					</p>

					<p className="text-lg text-gray-700 leading-relaxed p-3">
						From the awe-inspiring hike to the sacred Tiger’s Nest to wandering
						through centuries-old fortresses, or celebrating vibrant local
						festivals, every experience is thoughtfully curated to leave you
						with cherished memories and a deeper connection to the Land of the
						Thunder Dragon.
					</p>
				</div>

				<div className="flex gap-4 pt-4 glow-on-hover ml-2">
					<Link
						href="/contact"
						className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-blue-400 hover:text-gray-800 transition"
					>
						Get in Touch
					</Link>
					<Link
						href="/"
						className=" bg-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-400 hover:text-gray-800 transition"
					>
						Back Home
					</Link>
				</div>
			</main>
		</div>
	);
}
