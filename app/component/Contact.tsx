"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircleMoreIcon } from "lucide-react";

export default function Contact() {
	const ownerEmail = "drukkinley1989@gmail.com";
	const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSend = (e: React.FormEvent) => {
		e.preventDefault();
		if (isMobile) {
			const mailtoUrl = `mailto:${ownerEmail}?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(message)}`;
			window.open(mailtoUrl, "_blank");
		} else {
			const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
				ownerEmail
			)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
			window.open(gmailUrl, "_blank");
		}
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
					<div className="bg-gray-50 p-8 rounded-2xl">
						<h3 className="text-2xl font-semibold text-gray-900 mb-6 ml-12">
							Send us a Message
						</h3>

						<form
							onSubmit={handleSend}
							className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-4"
						>
							<h2 className="text-xl font-bold text-gray-800">
								Send a Message
							</h2>

							<div>
								<label className="block text-sm font-medium text-gray-700">
									To
								</label>
								<input
									type="email"
									value={ownerEmail}
									disabled
									className="w-full mt-1 p-2 border rounded-md bg-gray-100 text-gray-600"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700">
									Subject
								</label>
								<input
									type="text"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
									required
									className="w-full mt-1 p-2 border rounded-md text-black pl-2"
									placeholder="Book Tour"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700">
									Message
								</label>
								<textarea
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									required
									className="w-full mt-1 p-2 border rounded-md text-black pl-2"
									rows={4}
									placeholder="Write your message here..."
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
							>
								Send Message
							</button>
						</form>
					</div>

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
									<p className="text-gray-600">+ 975 17478414</p>
									<p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM GMT+6</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="bg-blue-100 p-3 rounded-lg">
									<Mail className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 mb-1">Email</h4>
									<p className="text-gray-600">drukkinley1989@gmail.com</p>
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
									<p className="text-gray-600">Thimphu</p>
									<p className="text-gray-600">Changlam Plaza</p>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<Link
									href="https://wa.me/+97517478414 "
									className="bg-blue-100 p-3 rounded-lg"
								>
									<MessageCircleMoreIcon className="h-6 w-6 text-green-600" />
								</Link>
								<div>
									<h4 className="font-semibold text-gray-900 mb-1">whatsapp</h4>
									<p className="text-gray-600">Thimphu</p>
									<p className="text-gray-600">Changlam Plaza</p>
								</div>
							</div>
						</div>

						{/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white">
							<h4 className="font-semibold mb-2">Special Offer!</h4>
							<p className="text-blue-100 mb-4">
								Book your next adventure within the next 30 days and get 15% off
								your entire trip!
							</p>
							<button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
								Claim Offer
							</button>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
