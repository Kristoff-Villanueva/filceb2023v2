import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";

export default function Home() {
	return (
		<main className="">
			<Navbar />
			<Hero />
			<Benefits />
		</main>
	);
}
