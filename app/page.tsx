import React from "react";
import HomePage from "./component/HomePage";
import AboutPage from "./component/About";
import ContactPage from "./component/Contact";
export default function Home() {
	return (
		<div>
			<HomePage />
			<AboutPage />
			<ContactPage />
		</div>
	);
}
