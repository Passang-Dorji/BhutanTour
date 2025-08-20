"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="-mt-24 font-sans min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 bg-gray-50">
			<main className="max-w-4xl text-center sm:text-left space-y-6">
				<h1 className="text-4xl font-extrabold text-gray-800 border-b-4 border-gray-300 pb-2">
					About Us
				</h1>

				<div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
					<Image
						src="/paro_taktshang.jpg"
						alt="About Aster Tours"
						fill
						className="object-cover glow-on-hover"
					/>
				</div>

				<p className="text-lg text-gray-700 leading-relaxed">
					At <span className="font-bold">Aster Tours & Travel</span>, we
					specialize in creating{" "}
					<span className="italic">authentic and inspiring holidays</span> in
					the heart of Bhutan. Our team of passionate travel experts is
					dedicated to showing you the breathtaking landscapes, rich culture,
					and warm hospitality of the Land of the Thunder Dragon.
				</p>

				<p className="text-lg text-gray-700 leading-relaxed">
					Whether it’s hiking to the iconic Tiger’s Nest, exploring ancient
					fortresses, or immersing yourself in local festivals, we curate each
					experience to ensure your journey is truly unforgettable.
				</p>

				<div className="flex gap-4 pt-4 glow-on-hover">
					<Link
						href="/contact"
						className="bg-gray-800 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-gray-900 transition"
					>
						Get in Touch
					</Link>
					<Link
						href="/"
						className="border-2 border-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-800 glow-on-hover hover:text-white transition"
					>
						Back Home
					</Link>
				</div>
			</main>
		</div>
	);
}
