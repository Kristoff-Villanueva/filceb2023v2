import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "FilCeb | The home of Cebu's MSME leaders.",
	description:
		"Filipino Cebuano Business Club Inc (FilCeb) | The home of Cebu's MSME leaders.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</div>
		</html>
	);
}
