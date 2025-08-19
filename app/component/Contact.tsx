"use client";
import React from "react";
import { useState } from "react";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Thank you for contacting us! We’ll get back to you soon.");
		// 🚨 In real app: send formData to backend/email API
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 bg-gray-50">
			<main className="max-w-2xl w-full space-y-6">
				<h1 className="text-4xl font-extrabold text-gray-800 border-b-4 border-gray-300 pb-2 text-center">
					Contact Us
				</h1>

				<p className="text-lg text-gray-700 text-center">
					We’d love to hear from you! Fill out the form below or reach us at{" "}
					<span className="font-bold">info@astertours.com</span>
				</p>

				<form
					onSubmit={handleSubmit}
					className="bg-white shadow-lg rounded-2xl p-6 space-y-4"
				>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Your Name"
						className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800"
						required
					/>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Your Email"
						className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800"
						required
					/>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						placeholder="Your Message"
						rows={5}
						className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-gray-800"
						required
					></textarea>
					<button
						type="submit"
						className="w-full bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-900 transition"
					>
						Send Message
					</button>
				</form>

				<div className="text-center text-gray-600 pt-4">
					<p>📍 Thimphu, Bhutan</p>
					<p>📞 +975 123 4567</p>
				</div>
			</main>
		</div>
	);
}
