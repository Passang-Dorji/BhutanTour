import React from "react";
import HomePage from "./component/HomePage";
import AboutPage from "./component/About";
import Destinations from "./component/Destination";
import Features from "./component/Features";
import Testimonials from "./component/Review";
import ContactPage from "./component/Contact";
export default function Home() {
	// return (
	// 	<div>
	// 		<HomePage />
	// 		<AboutPage />
	// 		<Destinations />
	// 		<Features />
	// 		<Testimonials />
	// 		<ContactPage />
	// 	</div>
	// );
	return (
		<div>
			<section id="home">
				<HomePage />
			</section>
			<section id="about">
				<AboutPage />
			</section>
			<section id="destinations">
				<Destinations />
			</section>
			<section id="features">
				<Features />
			</section>
			<section id="testimonials">
				<Testimonials />
			</section>
			<section id="contact">
				<ContactPage />
			</section>
		</div>
	);
}
