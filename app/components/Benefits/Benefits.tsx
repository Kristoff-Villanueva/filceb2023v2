import Image from "next/image";
import benefits from "./benefits.json";

export default function Benefits() {
	return (
		<div className="mx-5 text-center p-5 border-2 border-gray-100 shadow-lg rounded-lg md:mx-7 my-5">
			<h2 className="text-xl md:text-2xl">Why Join Us?</h2>
			<p className="mb-4">
				Tailored Support to Inspire Growth and Foster Success in Your
				Enterprise.
			</p>
			<div className="md:grid md:grid-cols-2 md:gap-5 lg:place-items-center">
				{benefits.map((benefit) => (
					<div
						key={benefit.title}
						className="flex flex-col items-center mb-3 w-96"
					>
						<Image
							src={`/benefits/${benefit.photo}`}
							width={250}
							height={250}
							alt={benefit.title}
							className="rounded-lg"
						/>
						<h3 className="text-lg font-bold">{benefit.title}</h3>
						<p className="mb-3">{benefit.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
