import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/Footer";
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
