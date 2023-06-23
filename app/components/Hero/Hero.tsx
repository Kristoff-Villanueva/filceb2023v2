import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Hero() {
	return (
		<div className="text-center">
			<div className="heroImage bg-[url(/hero/hero2.png)] bg-cover bg-bottom text-white">
				<h1 className="pt-32 text-3xl text-shadow1">
					Leaders building leaders.
				</h1>
				<p className="text-shadow1">
					The home for MSME leaders looking for mentorship, connections,
					collaborative opportunities and leadership mastery.
				</p>
				<div className="pb-5 mt-3">
					<Link
						href="/membership"
						className="bg-filCebColor text-black px-1 py-2 rounded-md"
					>
						BECOME A MEMBER
					</Link>
				</div>
			</div>
			<div className="supportingText bg-filCebBg text-white p-5">
				<h2 className="text-xl italic">#businessGrowthTogether</h2>
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
				<Marquee>
					{[...Array(10)].map((_, i) => (
						<div className="marqueeItem grayscale" key={i}>
							<Image
								src={`/hero/marquee/${i + 1}.png`}
								width={200}
								height={200}
								alt="FilCeb Photos"
								key={i + 1}
							/>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	);
}
