import Image from "next/image";
import about from "./about.json";

export default function About() {
	return (
		<div className="p-5 flex flex-col gap-8">
			<h1 className="text-5xl font-bold">About Us</h1>
			<p className="italic text-2xl">
				Find a community as you run your business as a force for good!
			</p>
			<div>
				<h2 className="text-2xl font-bold mb-1">What is FilCeb</h2>
				<p>
					The{" "}
					<span className="font-bold">FilCeb Business Club, Inc (FilCeb)</span>{" "}
					is a non-government, non-profit, organization of Micro, Small and
					Medium Entrepreneurs, duly registered with the Securities and Exchange
					Commission & Bureau of Internal Revenue, its aim of bringing together
					MSME's entrepreneurs, professionals of Filipino heritage, and people
					with a business connection to Cebu, for the purpose of networking,
					learning, business development and celebrating Cebuano tradition.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold mb-1">History</h2>
				<p className="">
					On <span className="font-bold">March 6, 2008</span>, a group of Cebu
					based young entrepreneurs bonded together to form an organization, the
					FILCEB Business Club Inc., with the aim of establishing a strong MSME
					( Micro, Small, and Medium Enterprise ) in the business sector. The
					Club would tap or establish linkages with private, government and non
					government organization for whatever assistance it may avail in order
					to strengthen and broaden its operation.
				</p>
				<figure>
					<Image
						src="/about/history.jpg"
						alt="filceb history"
						width={500}
						height={300}
						className="rounded"
					/>
					<figcaption className="text-sm">
						First FilCeb induction of officers - March 2008
					</figcaption>
				</figure>
			</div>
			<div>
				<h2 className="text-2xl font-bold mb-1">Our Vision</h2>
				<p className="">
					Filceb Business Club Inc. (Filceb) envisions as one of the very
					credible and effective Micro, Small, Medium Enterprise (MSMEs)
					organizations that will catalyze Cebu’s business growth for a stronge
					Philippine economy.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold mb-1">Our Mission</h2>
				<p className="">
					Our core beliefs are deeply rooted in the empowerment and progress of
					the entrepreneurial spirit. We understand the crucial role that Micro,
					Small, Medium Entrepreneurs (MSMEs) play in our economic tapestry. Our
					missions are multifaceted and converge on the singular goal of
					fostering a thriving entrepreneurial ecosystem in Cebu and beyond:
				</p>
				<ol className="mt-2 space-y-2">
					{about.mission.map((item) => (
						<li key={item.id}>
							{item.id}. {item.description}
						</li>
					))}
				</ol>
			</div>
			<div>
				<h2 className="text-2xl font-bold mb-1">Programs and Services</h2>
				<p className="">
					Our programs here in FilCeb can be summarized by the acronym{" "}
					<span className="font-bold">WEALTH</span>:<br />
					<ul className="space-y-2 mt-2">
						{about.programs.map((item) => (
							<li key={item.id}>
								<span className="font-bold text-blue-600">
									{item.description.slice(0, 1)}
								</span>
								{item.description.slice(1)}
							</li>
						))}
					</ul>
				</p>
			</div>
		</div>
	);
}
