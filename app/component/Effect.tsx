"use client";
import { useEffect, useRef } from "react";

export default function SmokeCursor() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!containerRef.current) return;

			const smoke = document.createElement("div");
			smoke.className = "smoke-puff";
			smoke.style.left = `${e.clientX}px`;
			smoke.style.top = `${e.clientY}px`;
			containerRef.current.appendChild(smoke);

			smoke.animate(
				[
					{ transform: "scale(1)", opacity: 0.9 },
					{ transform: "scale(6)", opacity: 0 },
				],
				{
					duration: 2000,
					easing: "ease-out",
					fill: "forwards",
				}
			);

			// Remove after animation ends
			setTimeout(() => smoke.remove(), 2000);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return <div ref={containerRef} className="smoke-container" />;
}
