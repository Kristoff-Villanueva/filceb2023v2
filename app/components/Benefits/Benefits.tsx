import Image from "next/image";
import benefits from "./benefits.json";

export default function Benefits() {
	return (
		<div className="text-center p-5">
			<h2 className="text-xl">Why Join Us?</h2>
			<p className="mb-4">
				Tailored Support to Inspire Growth and Foster Success in Your
				Enterprise.
			</p>
			{benefits.map((benefit) => (
				<div key={benefit.title} className="flex flex-col items-center">
					<Image
						src={`/benefits/${benefit.photo}`}
						width={250}
						height={250}
						alt={benefit.title}
						className="rounded-lg"
					/>
					<h3 className="text-lg">{benefit.title}</h3>
					<p className="mb-3">{benefit.description}</p>
				</div>
			))}
		</div>
	);
}
