import { Star, Quote } from "lucide-react";

export default function Testimonials() {
	const testimonials = [
		{
			id: 1,
			name: "Sarah Johnson",
			location: "New York, USA",
			image:
				"https://images.unsplash.com/photo-1494790108755-2616b612b372?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
			rating: 5,
			text: "Our trip to Santorini was absolutely magical! The attention to detail and personalized service exceeded all our expectations. Every moment was perfectly planned.",
		},
		{
			id: 2,
			name: "Michael Chen",
			location: "London, UK",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
			rating: 5,
			text: "The Swiss Alps adventure was breathtaking! Our guide was incredibly knowledgeable and the accommodations were luxurious. Will definitely book again!",
		},
		{
			id: 3,
			name: "Emily Rodriguez",
			location: "Madrid, Spain",
			image:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
			rating: 5,
			text: "Kyoto was a dream come true! The cultural experiences were authentic and the temples were stunning. Thank you for making our honeymoon unforgettable.",
		},
	];

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						What Our Travelers Say
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Don&apos;t just take our word for it - hear from our satisfied
						customers
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
						>
							<Quote className="h-8 w-8 text-blue-600 mb-4" />

							<div className="flex items-center mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										className="h-5 w-5 text-yellow-400 fill-current"
									/>
								))}
							</div>

							<p className="text-gray-600 mb-6 leading-relaxed italic">
								&ldquo;{testimonial.text}&rdquo;
							</p>

							<div className="flex items-center">
								<div
									className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
									style={{ backgroundImage: `url(${testimonial.image})` }}
								/>
								<div>
									<h4 className="font-semibold text-gray-900">
										{testimonial.name}
									</h4>
									<p className="text-gray-500 text-sm">
										{testimonial.location}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
						<div className="flex items-center">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className="h-5 w-5 text-yellow-400 fill-current"
								/>
							))}
						</div>
						<span className="text-gray-700 font-semibold">
							4.9/5 from 2,500+ reviews
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
