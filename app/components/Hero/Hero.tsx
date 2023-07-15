import Link from "next/link";
import Image from "next/image";

export default function Hero() {
	return (
		<div className="text-center flex flex-col">
			<hr className="shadow-lg" />
			<div className="heroImage bg-cover bg-bottom text-white flex flex-col justify-center items-center md:h-1/2 lg:h-2/3 lg:grid lg:grid-cols-7">
				<div className="md:mt-28 lg:text-left lg:ms-10 lg:mt-0 lg:text-slate-800 lg:col-span-3">
					<h1 className="font-karla font-bold pt-32 text-3xl drop-shadow-md md:text-5xl lg:drop-shadow-none lg:pt-0 lg:text-6xl">
						Leaders building leaders.
					</h1>
					<p className="drop-shadow-md md:text-xl lg:drop-shadow-none lg:mt-2 lg:text-2xl">
						The home of MSME Leaders in Cebu
					</p>
					<div className="pb-7 mt-5 ">
						<Link
							href="/components/membership"
							className="bg-filCebColor font-bold text-slate-700 px-3 py-4 rounded-md md:text-lg shadow-lg transform transition duration-500 hover:scale-105"
						>
							BECOME A MEMBER
						</Link>
					</div>
				</div>
				<div className="hidden lg:flex lg:ms-auto lg:col-span-4 ">
					<Image
						src="/hero/hero4.png"
						width={1500}
						height={1000}
						alt="FilCeb"
						className="lg:w-full"
					/>
				</div>
			</div>
			<div className="bg-filCebBg text-white p-5 flex flex-col justify-center md:flex-grow  lg:py-24">
				<h2 className="text-2xl italic md:text-4xl">#businessGrowthTogether</h2>
				<p className="pt-2 lg:text-lg lg:px-52">
					Based in Cebu, our organization is more than a business club—it&apos;s
					a vibrant platform for collaboration and growth. We unite small to
					medium enterprises (SMEs), fueling a powerful force for economic
					development. Our mission is to empower these local businesses by
					providing resources and fostering an environment where experiences are
					shared, and learning is mutual.
				</p>
			</div>
			<div className="marquee">
				{[...Array(5)].map((_, i) => (
					<div className="lg:hidden" key={i}>
						<Image
							src={`/hero/marquee/${i + 1}.png`}
							width={200}
							height={200}
							alt="FilCeb Photos"
							key={i + 1}
						/>
					</div>
				))}
			</div>
			<div className="marquee flex justify-center">
				{[...Array(13)].map((_, i) => (
					<div className="hidden lg:block" key={i}>
						<Image
							src={`/hero/marquee/${i + 1}.png`}
							width={200}
							height={200}
							alt="FilCeb Photos"
							key={i + 1}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
