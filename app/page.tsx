import Image from "next/image";

import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";

import Companies from "./components/Companies/Companies";
import CallToAction from "./components/CallToAction/CallToAction";

export default function Home() {
	return (
		<main className="">
			<Hero />
			<Benefits />
			<Companies />
			<CallToAction />
		</main>
	);
}
