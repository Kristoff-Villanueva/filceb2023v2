import Marquee from "react-fast-marquee";
import Image from "next/image";
import companies from "./companies.json";

export default function Companies() {
	return (
		<div className="text-center p-5">
			<h2 className="text-xl">Our Member Companies</h2>
			<Marquee>
				{companies.map((company) => (
					<div
						className="p-5 flex items-center h-28 grayscale"
						key={company.id}
					>
						<Image
							src={`/companies/${company.photo}`}
							alt={company.photo}
							width={100}
							height={100}
						/>
					</div>
				))}
			</Marquee>
		</div>
	);
}
