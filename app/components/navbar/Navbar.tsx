"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function Navabar() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleClick = () => {
		setNavbarOpen(!navbarOpen);
	};

	return (
		<div>
			<div className="flex items-center m-3 relative">
				<div className="flex items-center">
					<Image
						src="/navbar/filcebLogo.png"
						width={80}
						height={80}
						alt="FilCeb Logo"
					/>
					<p className="text-filCebColor text-6xl">|</p>
					<div className="text-xl">
						<p>FilCeb</p>
						<p>Business</p>
						<p>Club</p>
					</div>
				</div>
				<div className="flex ms-auto items-center gap-4">
					<div className="bg-filCebColor py-2 px-3 rounded-md">
						<Link href="/about" className="text-xl">
							JOIN
						</Link>
					</div>
					<div className="text-5xl" onClick={handleClick}>
						<BiMenu />
					</div>
				</div>
			</div>
			{navbarOpen && (
				<div className="menu flex flex-col gap-4 items-end absolute p-3 right-0 w-full bg-gradient-to-r from-[rgba(255,255,255,0.3)] to-white">
					<Link href="/about" className="text-xl">
						ABOUT US
					</Link>
					<Link href="/membership" className="text-xl">
						OUR IMPACT
					</Link>
					<Link href="/events" className="text-xl">
						PARTNER WITH US
					</Link>
					<Link href="/resources" className="text-xl">
						LEARNING AREA
					</Link>
					<Link href="/contact" className="text-xl">
						LOGIN
					</Link>
				</div>
			)}
		</div>
	);
}