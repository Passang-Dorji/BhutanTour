import { Globe, Shield, Heart, Award, Compass, Camera } from "lucide-react";

export default function Features() {
	const features = [
		{
			icon: Globe,
			title: "Global Destinations",
			description:
				"Explore over 50 handpicked destinations across 6 continents with our expert local guides.",
		},
		{
			icon: Shield,
			title: "Safe & Secure",
			description:
				"Travel with confidence knowing all our tours are fully insured and follow strict safety protocols.",
		},
		{
			icon: Heart,
			title: "Personalized Experience",
			description:
				"Customized itineraries tailored to your preferences for a truly unique travel experience.",
		},
		{
			icon: Award,
			title: "Award Winning",
			description:
				"Recognized as the #1 tourism company for 3 consecutive years by Travel Excellence Awards.",
		},
		{
			icon: Compass,
			title: "Expert Guides",
			description:
				"Professional local guides with deep knowledge of history, culture, and hidden gems.",
		},
		{
			icon: Camera,
			title: "Memorable Moments",
			description:
				"Capture stunning photos and create lasting memories with our photography-focused tours.",
		},
	];

	return (
		<section className="py-20 bg-gray-50">
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
								<div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
									<IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
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
