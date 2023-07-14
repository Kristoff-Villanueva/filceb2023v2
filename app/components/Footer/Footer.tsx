import navbar from "../navbar/navbar.json";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Image from "next/image";

export default function Footer() {
	return (
		<div className=" bg-filCebBg text-white flex flex-col py-5 lg:flex-row-reverse lg:justify-center lg:gap-20">
			<div className="flex flex-col items-center px-8 pt-5 lg:flex-row lg:gap-10">
				{navbar.map((item) => (
					<Link href={item.link} key={item.id} className="text-sm pb-1">
						{item.name}
					</Link>
				))}
				<div className="pb-7 pt-5 flex flex-col items-center">
					<p>Let&apos;s connect:</p>
					<div className="pt-2 flex gap-3">
						<BsFacebook />
						<GrMail />
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center gap-5">
				<Image
					src="/navbar/filcebLogo.png"
					width={90}
					height={90}
					alt="FilCeb Logo"
				/>
				<div className="">
					<h3 className="text-xl">FilCeb Business Club, Inc</h3>
					<p>
						Cebu, Philippines <br />
						©2023 All Rights Reserved.
					</p>
				</div>
			</div>
		</div>
	);
}
