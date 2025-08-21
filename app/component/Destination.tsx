import { Star, MapPin, Calendar } from "lucide-react";

export default function Destinations() {
	const destinations = [
		{
			id: 1,
			name: "Santorini, Greece",
			image:
				"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3",
			price: "From $1,299",
			duration: "7 Days",
			rating: 4.9,
			description:
				"Experience the magic of white-washed buildings and stunning sunsets over the Aegean Sea.",
		},
		{
			id: 2,
			name: "Bali, Indonesia",
			image:
				"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3",
			price: "From $899",
			duration: "10 Days",
			rating: 4.8,
			description:
				"Discover tropical paradise with ancient temples, lush rice terraces, and pristine beaches.",
		},
		{
			id: 3,
			name: "Swiss Alps, Switzerland",
			image:
				"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3",
			price: "From $1,899",
			duration: "8 Days",
			rating: 4.9,
			description:
				"Breathtaking mountain vistas, charming villages, and world-class skiing adventures.",
		},
		{
			id: 4,
			name: "Kyoto, Japan",
			image:
				"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3",
			price: "From $1,599",
			duration: "9 Days",
			rating: 4.7,
			description:
				"Immerse yourself in ancient traditions, beautiful temples, and serene bamboo forests.",
		},
		{
			id: 5,
			name: "Machu Picchu, Peru",
			image:
				"https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3",
			price: "From $1,199",
			duration: "6 Days",
			rating: 4.8,
			description:
				"Trek through the Andes to discover the lost city of the Incas and ancient mysteries.",
		},
		{
			id: 6,
			name: "Maldives",
			image:
				"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3",
			price: "From $2,299",
			duration: "5 Days",
			rating: 4.9,
			description:
				"Luxury overwater bungalows, crystal-clear waters, and world-class diving experiences.",
		},
	];

	return (
		<section id="destinations" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Popular Destinations
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Discover our most sought-after destinations that offer unforgettable
						experiences
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{destinations.map((destination) => (
						<div
							key={destination.id}
							className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
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
								<div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
									{destination.price}
								</div>
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

								<button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
									Learn More
								</button>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-200">
						View All Destinations
					</button>
				</div>
			</div>
		</section>
	);
}
