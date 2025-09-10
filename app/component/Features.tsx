import {
	Shield,
	Heart,
	MapPinIcon,
	Compass,
	Camera,
	CalendarCheck,
} from "lucide-react";

export default function Features() {
	const features = [
		{
			icon: CalendarCheck,
			title: "Well-planned and flexible tours",
			description:
				"Himalayan Sky View Tours provides well-organized trips, but also offers the flexibility to customize itineraries based on your interests, pace, and circumstances. This allows for both pre-planned adventures and the ability to make changes when needed and also  unique experiences that allow for deeper cultural immersion.",
		},
		{
			icon: Shield,
			title: "Safe & Secure",
			description:
				"Travel with confidence knowing all our tours are fully insured and follow strict safety protocols.",
		},
		{
			icon: Heart,
			title: "Focus on traveler satisfactions",
			description:
				"Himalayan Sky View Tours is dedicated to creating memorable experiences while ensuring client satisfaction and minimizing the impact on local communities and the environment.",
		},
		{
			icon: MapPinIcon,
			title: "Cultural tours and homestays",
			description:
				"You can choose from city tours, safari trips, and unique village homestay experiences with local families to gain insight into authentic Bhutanese lifestyle.The company also facilitates spritual and meditation activities as per guest interest with our Buddhist Monks",
		},
		{
			icon: Compass,
			title: "Expert Guides",
			description:
				"Expert and caring guides: The company's guides are consistently praised for being knowledgeable, professional, and friendly. They are noted for prioritizing guest safety and well-being, even adapting itineraries on the fly to handle altitude sickness or other unexpected issues.",
		},
		{
			icon: Camera,
			title: "Memorable Moments",
			description:
				"Capture stunning photos and create lasting memories with our photography-focused tours.",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Why Choose Us?
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						We&apos;re committed to providing exceptional tourism experiences
						that exceed your expectations
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => {
						const IconComponent = feature.icon;
						return (
							<div
								key={index}
								className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
							>
								<div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#5a8894] transition-colors duration-300">
									<IconComponent className="h-8 w-8 text-[#1f455d] group-hover:text-white transition-colors duration-300" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">
									{feature.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">
									{feature.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
