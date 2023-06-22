import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";

export default function Home() {
	return (
		<main className="">
			<Navbar />
			<Hero />
		</main>
	);
}
