import Image from "next/image";
import benefits from "./benefits.json";

export default function Benefits() {
	return (
		<div className="mx-5 text-center p-5 border-2 border-gray-100 shadow-lg rounded-lg md:mx-7 my-5 text-slate-700">
			<h2 className="text-3xl font-extrabold md:text-4xl">Why Join Us?</h2>
			<p className="mb-4 mt-2 lg:text-2xl">
				Tailored Support to Inspire Growth and Foster Success in Your
				Enterprise.
			</p>
			<div className="md:grid md:grid-cols-2 md:gap-5 md:place-items-center lg:hidden">
				{benefits.map((benefit) => (
					<div
						key={benefit.title}
						className="flex flex-col items-center mb-3 lg:w-96"
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
			<div className="hidden mt-10 flex-col items-center lg:flex gap-5">
				{benefits.map((benefit) => (
					<div
						key={benefit.title}
						className={`flex ${
							benefit.id % 2 == 0 ? "flex-row-reverse" : ""
						} gap-10 justify-center mt-8`}
					>
						<Image
							src={`/benefits/${benefit.photo}`}
							width={500}
							height={500}
							alt={benefit.title}
							className="rounded-lg"
						/>
						<div
							className={`w-1/3 mt-4 ${
								benefit.id % 2 != 0 ? "text-left" : "text-right"
							}`}
						>
							<h3 className="text-2xl font-bold">{benefit.title}</h3>
							<p className="text-xl mb-3 text-slate-500">
								{benefit.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
