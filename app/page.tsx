import Image from "next/image";

import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";

import Companies from "./components/Companies/Companies";

export default function Home() {
	return (
		<main className="">
			<Hero />
			<Benefits />
			<Companies />
		</main>
	);
}
