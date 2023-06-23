"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import navbar from "./navbar.json";

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
					{navbar.map((item) => (
						<Link href={item.link} key={item.id} className="text-xl">
							{item.name}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
