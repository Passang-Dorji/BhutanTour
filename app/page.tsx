import React from "react";
import HomePage from "./component/HomePage";
import AboutPage from "./component/About";
import Destinations from "./component/Destination";
import Features from "./component/Features";
import Testimonials from "./component/Review";
import ContactPage from "./component/Contact";
export default function Home() {
	return (
		<div>
			<HomePage />
			<AboutPage />
			<Destinations />
			<Features />
			<Testimonials />
			<ContactPage />
		</div>
	);
}
