"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<nav className="bg-gray-600/50 border-gray-200 border-b-2 sticky top-0 z-10">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<Link
					href="/"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img src="/logo.png" className="h-10 w-10 " alt="Logo" />
					<span className="self-center text-xl font-semibold whitespace-nowrap text-white">
						Himalayan Sky View Tour
					</span>
				</Link>

				<div className="flex md:order-2">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-lg text-gray-200 hover:bg-gray-700 focus:outline-none"
					>
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center space-x-8 font-bold text-lg">
					<button
						onClick={() => scrollToSection("home")}
						className="hover:text-blue-300 text-white"
					>
						Home
					</button>
					<button
						onClick={() => scrollToSection("about")}
						className="hover:text-blue-300 text-white"
					>
						About
					</button>

					<button
						onClick={() => scrollToSection("destinations")}
						className="hover:text-blue-300 text-white"
					>
						Destinations
					</button>

					<button
						onClick={() => scrollToSection("features")}
						className="hover:text-blue-300 text-white"
					>
						Features
					</button>

					<button
						onClick={() => scrollToSection("testimonials")}
						className="hover:text-blue-300 text-white"
					>
						Testimonials
					</button>
					<button
						onClick={() => scrollToSection("contact")}
						className="hover:text-blue-300 text-white"
					>
						Contact
					</button>
				</div>
			</div>
			{/* Mobile Drawer */}
			{isOpen && (
				<div className="md:hidden bg-gray-700/50 text-white px-4 pb-4">
					<ul className="flex flex-col space-y-4 mt-4 font-bold text-lg">
						{[
							{ name: "Home", id: "home" },
							{ name: "About", id: "about" },
							{ name: "Destinations", id: "destinations" },
							{ name: "Features", id: "features" },
							{ name: "Testimonials", id: "testimonials" },
							{ name: "Contact", id: "contact" },
						].map(({ name, id }) => (
							<li key={id} className="hover:bg-blue-500/50 rounded-md p-2">
								<button
									onClick={() => {
										const section = document.getElementById(id);
										if (section) section.scrollIntoView({ behavior: "smooth" });
										setIsOpen(false);
									}}
									className="w-full text-left"
								>
									{name}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
}
