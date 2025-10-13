"use client";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="-mt-24 font-sans min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100">
			<main className="max-w-4xl text-center sm:text-left space-y-6">
				<h1 className="text-4xl font-extrabold text-gray-800 border-b-4 border-gray-300 pb-2">
					About Us
				</h1>

				<div className="relative w-screen  h-[300px] lg:w-full md:w-screen rounded-2xl overflow-hidden shadow-lg ">
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
				<div className="mx-auto text-left bg-gradient-to-b from-sky-300/20 via-sky-200/20 to-sky-100/20 rounded-lg shadow-lg hover:shadow-xl relative overflow-hidden">
					<p className="text-lg text-gray-700 leading-relaxed p-5">
						<span className="font-bold">Himalayan Sky View Tours</span> offers
						tours to witness the majestic Himalayan mountains, focusing on their
						soaring peaks, diverse landscapes, and rich alpine environments,
						providing an unforgettable experience of the region&apos;s natural
						beauty and cultural heritage
					</p>
					<h1 className="text-gray-700 font-bold p-3 text-lg">
						Key Features & Offerings
					</h1>
					<p className="text-lg text-gray-700 leading-relaxed p-5">
						<span className="font-bold">Spectacular Views:</span>
						<br />
						The tours focus on providing breathtaking views of the Himalayas,
						including their towering with view of snow-capped peaks, deep
						valleys, and other stunning geographical features and unique
						cultural attractions, respectively
					</p>
					<div className="absolute top-40 right-20 w-56 h-28 bg-white rounded-full blur-3xl opacity-60" />
					<p className="text-lg text-gray-700 leading-relaxed p-5">
						<span className="font-bold">Cultural Immersion:</span>
						<br />
						Tours also offer opportunities to experience the unique Bhutanese
						culture, and potentially other local Himalayan cultures, within
						breathtaking landscapes.
					</p>
					<p className="text-lg text-gray-700 leading-relaxed p-5">
						<span className="font-bold">Scenic Destinations</span>
						<br />
						Locations such as the Paro Valley, Thimphu (capital city of Bhutan),
						Punakha valley,Wangdue phordang including Phobjikha valley and
						Bumthang valley known for their spectacular mountain views, are
						likely featured in their itineraries. 
					</p>
					<p className="text-lg text-gray-700 leading-relaxed p-5">
						Choosing a tour with Himalayan Sky View Tours is recommended for
						their expert, friendly guides, well-organized and adaptable
						itineraries, and broad range of authentic experiences
					</p>
				</div>

				<div className="flex gap-4 pt-4 glow-on-hover ml-2">
					<Link
						href="/contact"
						className="bg-[#1f455d] text-white px-6 py-3 rounded-full font-bold shadow hover:bg-[#5a8894] hover:text-gray-800 transition"
					>
						Get in Touch
					</Link>
					<Link
						href="/"
						className=" bg-[#1f455d] px-6 py-3 rounded-full font-bold hover:bg-[#5a8894] hover:text-gray-800 transition"
					>
						Back Home
					</Link>
				</div>
			</main>
		</div>
	);
}
