"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		alert("Thank you for your message! We will get back to you soon.");
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section id="contact" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Let&apos;s Plan Your Journey
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Ready to embark on your next adventure? Get in touch with our travel
						experts
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div className="bg-gray-50 p-8 rounded-2xl">
						<h3 className="text-2xl font-semibold text-gray-900 mb-6">
							Send us a Message
						</h3>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Full Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
									placeholder="Your full name"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
									placeholder="your@email.com"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows={5}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
									placeholder="Tell us about your dream destination..."
									required
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
							>
								<Send className="h-5 w-5" />
								<span>Send Message</span>
							</button>
						</form>
					</div>

					{/* Contact Information */}
					<div className="space-y-8">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">
								Get in Touch
							</h3>
							<p className="text-gray-600 leading-relaxed mb-8">
								Our travel experts are here to help you plan the perfect trip.
								Whether you&apos;re looking for adventure, relaxation, or
								cultural experiences, we&apos;ll create a personalized itinerary
								just for you.
							</p>
						</div>

						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="bg-blue-100 p-3 rounded-lg">
									<Phone className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
									<p className="text-gray-600">+1 (555) 123-4567</p>
									<p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM EST</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="bg-blue-100 p-3 rounded-lg">
									<Mail className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 mb-1">Email</h4>
									<p className="text-gray-600">hello@discoverparadise.com</p>
									<p className="text-gray-500 text-sm">
										We&apos;ll respond within 24 hours
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="bg-blue-100 p-3 rounded-lg">
									<MapPin className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 mb-1">Office</h4>
									<p className="text-gray-600">123 Travel Street</p>
									<p className="text-gray-600">Adventure City, AC 12345</p>
								</div>
							</div>
						</div>

						<div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white">
							<h4 className="font-semibold mb-2">Special Offer!</h4>
							<p className="text-blue-100 mb-4">
								Book your next adventure within the next 30 days and get 15% off
								your entire trip!
							</p>
							<button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
								Claim Offer
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
