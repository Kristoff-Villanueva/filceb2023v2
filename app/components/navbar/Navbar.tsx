import Image from "next/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function Navabar() {
	return (
		<div className="flex items-center m-3">
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
				<div className="text-5xl">
					<BiMenu />
				</div>
			</div>
		</div>
	);
}
