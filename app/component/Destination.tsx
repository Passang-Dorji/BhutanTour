"use client";
import { Star, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
export default function Destinations() {
	const destinations = [
		{
			id: 1,
			name: "Taktshang, Paro ",
			image: "/taktshang1.jpeg",
			// price: "From $1,299",
			duration: "1 Days",
			rating: 4.9,
			description:
				"A place where myth meets majesty – Paro Taktsang is Bhutan’s crown jewel waiting for you",
		},
		{
			id: 2,
			name: "Punakha Dzong",
			image: "punadzong1.jpeg",
			// price: "From $899",
			duration: "2 Days",
			rating: 4.8,
			description: "Stunning fortress built at the confluence of two rivers",
		},
		{
			id: 3,
			name: "Thimphu",
			image: "/thimphu.jpeg",
			// price: "From $1,899",
			duration: "1 Days",
			rating: 4.9,
			description:
				"Perfect for blending modern Bhutanese life with tradition.The only capital city without traffic lights!",
		},
		{
			id: 4,
			name: "Dochula Pass",
			image: "/dochula.jpg",
			// price: "From $1,599",
			duration: "1 Days",
			rating: 4.7,
			description:
				"A high mountain pass with 360° views of the Himalayas.Features the 108 Druk Wangyal Chortens (stupas)",
		},
		{
			id: 5,
			name: "Bumthang",
			image: "kajichortoen.jpeg",
			// price: "From $1,199",
			duration: "2 Days",
			rating: 4.8,
			description:
				"Known as the spiritual heartland of Bhutan.Stunning valleys, traditional villages, and local festivals",
		},
		{
			id: 6,
			name: "Phobjikha",
			image: "phobjikha.jpg",
			// price: "From $2,299",
			duration: "2 Days",
			rating: 4.9,
			description:
				"A beautiful glacial valley.Famous for black-necked cranes migrating here in winter.",
		},
		{
			id: 7,
			name: "Kabisa, Punakha",
			image: "kajichortoen.jpeg",
			// price: "From $2,299",
			duration: "2 Days",
			rating: 4.9,
			description:
				"A beautiful glacial valley.Famous for black-necked cranes migrating here in winter.",
		},
		{
			id: 8,
			name: "Gasa",
			image: "/gasa.jpeg",
			// price: "From $2,299",
			duration: "2 Days",
			rating: 4.9,
			description:
				"Set in a stunning glacial valley, Gasa is famed for its therapeutic hot springs, vibrant Tshechu festival, and as the starting point of the legendary Snowman Trek—one of the world’s most challenging Himalayan adventures.",
		},
	];
	const INITIAL_VISIBLE = 3;
	const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
	const isAllVisible = visibleCount >= destinations.length;

	const handleToggle = () => {
		if (isAllVisible) {
			setVisibleCount(INITIAL_VISIBLE);
		} else {
			setVisibleCount((prev) => Math.min(prev + 3, destinations.length));
		}
	};
	return (
		<section
			id="destinations"
			className="py-20 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-2xl md:text-5xl lg:text-4xl font-bold text-gray-900 mb-4">
						Popular Destinations
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Discover our most sought-after destinations that offer unforgettable
						experiences
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{destinations.slice(0, visibleCount).map((destination) => (
						<div
							key={destination.id}
							className="group cursor-pointer bg-white/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
						>
							<div className="relative overflow-hidden">
								<div
									className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
									style={{ backgroundImage: `url(${destination.image})` }}
								/>
								<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
									<div className="flex items-center space-x-1">
										<Star className="h-4 w-4 text-yellow-400 fill-current" />
										<span className="text-sm font-semibold">
											{destination.rating}
										</span>
									</div>
								</div>
								{/* <div className="absolute bottom-4 left-4 bg-[#1f455d] text-white px-4 py-2 rounded-full font-semibold">
									{destination.price}
								</div> */}
							</div>

							<div className="p-6">
								<div className="flex items-center space-x-2 mb-2">
									<MapPin className="h-4 w-4 text-blue-600" />
									<h3 className="text-xl font-semibold text-gray-900">
										{destination.name}
									</h3>
								</div>

								<div className="flex items-center space-x-2 mb-4">
									<Calendar className="h-4 w-4 text-gray-500" />
									<span className="text-gray-500">{destination.duration}</span>
								</div>

								<p className="text-gray-600 mb-4 leading-relaxed">
									{destination.description}
								</p>

								<button className="w-full bg-[#1f455d]  text-white py-3 rounded-full font-semibold hover:bg-[#5a8894] hover:text-black transition-colors duration-200">
									Learn More
								</button>
							</div>
						</div>
					))}
				</div>
				{destinations.length > INITIAL_VISIBLE && (
					<div className="text-center mt-12">
						<button
							onClick={handleToggle}
							className="bg-[#1f455d] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#5a8894] hover:text-black transition-colors duration-200"
						>
							{isAllVisible ? "View Less" : "View More Destinations"}
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
