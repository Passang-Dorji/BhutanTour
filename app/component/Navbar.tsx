"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-gray-600/50 border-gray-200 border-b-2 sticky top-0 z-10">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src="/logo.png" className="h-10 w-10 " alt="Logo" />
					<span className="self-center text-xl font-semibold whitespace-nowrap text-white">
						Himalayan Sky View Tour
					</span>
				</a>

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
					<a href="/" className="text-white hover:text-blue-300">
						Home
					</a>
					<a href="/about" className="text-white hover:text-blue-300">
						About
					</a>
					<a href="/services" className="text-white hover:text-blue-300">
						Services
					</a>
					<a href="/contact" className="text-white hover:text-blue-300">
						Contact
					</a>
				</div>
			</div>

			{/* Mobile Drawer */}
			{isOpen && (
				<div className="md:hidden bg-gray-700 text-white px-4 pb-4">
					<ul className="flex flex-col space-y-4 mt-4 font-bold text-lg">
						<li>
							<a href="/" onClick={() => setIsOpen(false)}>
								Home
							</a>
						</li>
						<li>
							<a href="/about" onClick={() => setIsOpen(false)}>
								About
							</a>
						</li>
						<li>
							<a href="/services" onClick={() => setIsOpen(false)}>
								Services
							</a>
						</li>
						<li>
							<a href="/contact" onClick={() => setIsOpen(false)}>
								Contact
							</a>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}
