import Marquee from "react-fast-marquee";
import Image from "next/image";
import companies from "./companies.json";

export default function Companies() {
	return (
		<div className="text-center pt-5 mx-5 border-2 border-gray-100 shadow-lg rounded-lg md:mx-7 mb-5">
			<h2 className="text-xl mb-2 md:text-2xl">Our Member Companies</h2>
			<Marquee speed={30}>
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
