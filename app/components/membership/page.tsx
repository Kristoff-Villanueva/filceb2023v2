"use client";

import { useEffect, useState } from "react";

import { useForm, Controller, FormProvider } from "react-hook-form";
import AboutYou from "./AboutYou";
import AboutYourBusiness from "./AboutYourBusiness";

type Province = {
	code: string;
	name: string;
};
interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	mobileNumber: string;
	dateOfBirth: string;
	barangay: string;
	city: string;
	province: string;
	businessName: string;
	businessAddress: string;
	businessProvince: string;
	businessType: string;
	businessPosition: string;
	permitsUpload: File | null;
	idUpload: File | null;
}

export default function Membership() {
	const { register, handleSubmit, control } = useForm<FormData>();
	const [provinces, setProvinces] = useState<Province[]>([]);

	const provincesList = provinces
		.sort((a, b) => a.name.localeCompare(b.name))
		.map((province) => ({
			label: province.name,
			value: province.code,
		}));

	const businessTypes = [
		{ label: "Sole Proprietorship", value: "SP" },
		{ label: "Partnership", value: "P" },
		{ label: "Corporation", value: "C" },
		{ label: "Cooperative", value: "CO" },
		{ label: "Others", value: "O" },
	];

	useEffect(() => {
		fetch("https://psgc.gitlab.io/api/provinces.json")
			.then((res) => res.json())
			.then((data) => {
				setProvinces(data);
				console.log(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	const methods = useForm<FormData>();

	return (
		<FormProvider {...methods}>
			<div className="m-5">
				<div className="border border-gray-300 shadow-lg rounded-lg p-6 mx-auto w-full max-w-md">
					<h1 className="text-2xl text-center mb-5">
						<span className="font-bold">FilCeb Business Club, Inc </span>
						<br /> Membership
					</h1>
					<hr className="mb-5" />
					<AboutYou />
					<hr className="mb-5" />
					<AboutYourBusiness />
					<button
						className="px-4 py-2 bg-filCebColor w-full rounded cursor-pointer inline-block"
						type="submit"
					>
						Submit
					</button>
				</div>
			</div>
		</FormProvider>
	);
}
