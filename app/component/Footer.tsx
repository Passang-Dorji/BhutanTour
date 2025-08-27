"use client";
import { MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { SpinningTextBasic } from "./Wordspin";
import Link from "next/link";
export default function Footer() {
	const footerLinks = {
		company: [
			{ name: "About Us", href: "#" },
			{ name: "Our Team", href: "#" },
			{ name: "Careers", href: "#" },
			{ name: "Press", href: "#" },
		],
		destinations: [
			{ name: "Paro", href: "#" },
			{ name: "Thimphu", href: "#" },
			{ name: "Punakha", href: "#" },
			{ name: "Bumthang", href: "#" },
		],
		support: [
			{ name: "Help Center", href: "#" },
			{ name: "Safety", href: "#" },
			{ name: "Cancellation", href: "#" },
			{ name: "Contact Us", href: "#" },
		],
	};

	const socialLinks = [
		{
			icon: Facebook,
			href: "https://www.facebook.com/kinley.dorji.9461",
			name: "Facebook",
		},
		{ icon: Twitter, href: "#", name: "Twitter" },
		{
			icon: Instagram,
			href: "https://www.instagram.com/drukkinley123?igsh=MWFmN3JnYzg1MDNm",
			name: "Instagram",
		},
	];

	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
					{/* Brand */}
					<div className="lg:col-span-2">
						<div className="flex items-center space-x-2 mb-6">
							<MapPin className="h-8 w-8 text-blue-400" />
							<span className="text-2xl font-bold">Discover Paradise</span>
						</div>
						<p className="text-gray-300 mb-6 leading-relaxed max-w-md">
							Creating unforgettable travel experiences for over 15 years.
							Explore the world with confidence and discover your next
							adventure.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((social) => {
								const IconComponent = social.icon;
								return (
									<Link
										key={social.name}
										href={social.href}
										className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
										aria-label={social.name}
									>
										<IconComponent className="h-5 w-5" />
									</Link>
								);
							})}
						</div>
					</div>

					{/* Company Links */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Company</h3>
						<ul className="space-y-3">
							{footerLinks.company.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-gray-300 hover:text-white transition-colors duration-200"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Destinations Links */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Destinations</h3>
						<ul className="space-y-3">
							{footerLinks.destinations.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-gray-300 hover:text-white transition-colors duration-200"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Support Links */}
					<div>
						<h3 className="font-semibold text-lg mb-4">Support</h3>
						<ul className="space-y-3">
							{footerLinks.support.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-gray-300 hover:text-white transition-colors duration-200"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<SpinningTextBasic />
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-800 pt-8 mt-12">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm mb-4 md:mb-0">
							© 2025 Himalayan Sky view tour. All rights reserved.
						</p>
						<div className="flex space-x-6 text-sm">
							<Link
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Privacy Policy
							</Link>
							<Link
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Terms of Service
							</Link>
							<Link
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
