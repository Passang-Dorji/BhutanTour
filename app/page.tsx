import React from "react";
import HomePage from "./component/HomePage";
import AboutPage from "./component/About";
import ContactPage from "./component/Contact";
import SmokeCursor from "./component/Effect";
export default function Home() {
	return (
		<div>
			<HomePage />
			<AboutPage />
			<ContactPage />
			<SmokeCursor />
		</div>
	);
}
