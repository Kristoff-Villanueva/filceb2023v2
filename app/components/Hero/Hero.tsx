import Link from "next/link";
import Image from "next/image";

export default function Hero() {
	return (
		<div className="text-center flex flex-col md:h-screen">
			<div className="heroImage bg-[url(/hero/hero2.png)] bg-cover bg-bottom text-white flex flex-col justify-center items-center md:h-1/2">
				<div className="md:mt-28">
					<h1 className="font-karla font-bold pt-32 text-3xl text-shadow1 md:text-5xl">
						Leaders building leaders.
					</h1>
					<p className="text-shadow1 md:text-xl">
						The home of MSME Leaders in Cebu
					</p>
					<div className="pb-7 mt-3">
						<Link
							href="/components/membership"
							className="bg-filCebColor text-black px-2 py-3 rounded-md md:text-lg"
						>
							BECOME A MEMBER
						</Link>
					</div>
				</div>
			</div>
			<div className="supportingText bg-filCebBg text-white p-5 flex flex-col justify-center md:flex-grow">
				<h2 className="text-xl italic md:text-2xl">#businessGrowthTogether</h2>
				<p className="pt-2">
					Based in Cebu, our organization is more than a business club—it's a
					vibrant platform for collaboration and growth. We unite small to
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
			<div className="marquee">
				{[...Array(10)].map((_, i) => (
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
