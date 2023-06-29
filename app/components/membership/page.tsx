"use client";

import { type } from "os";
import { useEffect, useState } from "react";
import Select from "react-select";

type Province = {
	code: string;
	name: string;
};

export default function Membership() {
	const [provinces, setProvinces] = useState<Province[]>([]);
	const options = provinces
		.sort((a, b) => a.name.localeCompare(b.name))
		.map((province) => ({
			label: province.name,
			value: province.code,
		}));

	useEffect(() => {
		fetch("https://psgc.gitlab.io/api/provinces.json")
			.then((res) => res.json())
			.then((data) => {
				setProvinces(data);
				console.log(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			borderColor: state.isFocused ? "RGB(251, 236, 26)" : provided.borderColor,
			boxShadow: state.isFocused ? 0 : 0,
			"&:hover": {
				borderColor: state.isFocused
					? "RGB(251, 236, 26)"
					: provided.borderColor,
			},
		}),
	};

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		console.log(e.target.value);
	}

	function handleSelectChange(selectedOption: any) {
		console.log(selectedOption);
	}

	return (
		<div className="m-5">
			<div className="border border-gray-300 shadow-lg rounded-lg p-6 mx-auto w-full max-w-md">
				<h1 className="text-2xl text-center mb-5">
					<span className="font-bold">FilCeb Business Club, Inc </span>
					<br /> Membership
				</h1>
				<hr className="mb-5" />
				<label htmlFor="firstName" className="block mb-2">
					First Name<span className="text-red-400">*</span>
				</label>
				<input
					name="firstName"
					onChange={handleChange}
					id="firstName"
					type="text"
					placeholder="Type your first name here"
					autoComplete="off"
					className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
				/>
				<label htmlFor="lastName" className="block mb-2">
					Last Name<span className="text-red-400">*</span>
				</label>
				<input
					name="lastName"
					onChange={handleChange}
					id="lastName"
					type="text"
					placeholder="Type your last name here"
					autoComplete="off"
					className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
				/>
				<label htmlFor="lastName" className="block mb-2">
					Last Name<span className="text-red-400">*</span>
				</label>
				<input
					name="email"
					onChange={handleChange}
					id="email"
					type="email"
					placeholder="Type your email here"
					autoComplete="off"
					className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
				/>
				<label htmlFor="province" className="block mb-2">
					Province<span className="text-red-400">*</span>
				</label>
				<Select
					name="province"
					options={options}
					onChange={handleSelectChange}
					defaultValue={options[0]}
					id="province"
					styles={customStyles}
					className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-filCebColor focus:ring focus:ring-filCebColor focus:ring-opacity-50"
				/>
			</div>
		</div>
	);
}
