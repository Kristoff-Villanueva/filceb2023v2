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

	function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
		console.log(e.target.files);
	}

	return (
		<div className="m-5">
			<div className="border border-gray-300 shadow-lg rounded-lg p-6 mx-auto w-full max-w-md">
				<h1 className="text-2xl text-center mb-5">
					<span className="font-bold">FilCeb Business Club, Inc </span>
					<br /> Membership
				</h1>
				<hr className="mb-5" />
				<h2 className="text-lg mb-2">About You</h2>
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
					Email<span className="text-red-400">*</span>
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
				<label htmlFor="mobileNumber" className="block mb-2">
					Mobile Number<span className="text-red-400">*</span>
				</label>
				<input
					name="mobileNumber"
					onChange={handleChange}
					id="mobileNumber"
					type="tel"
					placeholder="Type your mobile number here"
					autoComplete="off"
					className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
				/>
				<label htmlFor="dateOfBirth" className="block mb-2">
					Date of Birth<span className="text-red-400">*</span>
				</label>
				<input
					name="dateOfBirth"
					onChange={handleChange}
					id="dateOfBirth"
					type="date"
					placeholder="Select your date of birth"
					autoComplete="off"
					className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
				/>
				<label htmlFor="barangay" className="block mb-2">
					Address (Barangay)<span className="text-red-400">*</span>
				</label>
				<input
					name="barangay"
					onChange={handleChange}
					id="barangay"
					type="text"
					placeholder="Type your business name here"
					autoComplete="off"
					className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
				/>
				<label htmlFor="province" className="block mb-2">
					Province<span className="text-red-400">*</span>
				</label>
				<label htmlFor="city" className="block mb-2">
					Address (City)<span className="text-red-400">*</span>
				</label>
				<input
					name="barangay"
					onChange={handleChange}
					id="city"
					type="text"
					placeholder="Type your business name here"
					autoComplete="off"
					className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
				/>
				<label htmlFor="province" className="block mb-2">
					Province<span className="text-red-400">*</span>
				</label>
				<Select
					name="province"
					options={provincesList}
					onChange={handleSelectChange}
					defaultValue={provincesList[0]}
					id="province"
					styles={customStyles}
					className="mt-1 mb-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-filCebColor focus:ring focus:ring-filCebColor focus:ring-opacity-50"
				/>
				<hr className="mb-5" />
				<h2 className="text-lg mb-2">About Your Business</h2>
				<label htmlFor="businessName" className="block mb-2">
					Business Name<span className="text-red-400">*</span>
				</label>
				<input
					name="businessName"
					onChange={handleChange}
					id="businessName"
					type="text"
					placeholder="Type your business name here"
					autoComplete="off"
					className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
				/>
				<label htmlFor="businessPosition" className="block mb-2">
					Position<span className="text-red-400">*</span>
				</label>
				<input
					name="businessPosition"
					onChange={handleChange}
					id="businessPosition"
					type="text"
					placeholder="Type your business name here"
					autoComplete="off"
					className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
				/>
				<label htmlFor="businessAddress" className="block mb-2">
					Business Address (City)<span className="text-red-400">*</span>
				</label>
				<input
					name="businessAddress"
					onChange={handleChange}
					id="businessAddress"
					type="text"
					placeholder="Type your business name here"
					autoComplete="off"
					className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
				/>
				<label htmlFor="businessProvince" className="block mb-2">
					Province<span className="text-red-400">*</span>
				</label>
				<Select
					name="businessProvince"
					options={provincesList}
					onChange={handleSelectChange}
					defaultValue={provincesList[0]}
					id="businessProvince"
					styles={customStyles}
					className="mt-1 mb-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-filCebColor focus:ring focus:ring-filCebColor focus:ring-opacity-50"
				/>
				<label htmlFor="businessType" className="block mb-2">
					Business Type<span className="text-red-400">*</span>
				</label>
				<Select
					name="businessType"
					options={businessTypes}
					onChange={handleSelectChange}
					defaultValue={businessTypes[0]}
					id="businessType"
					styles={customStyles}
					className="mt-1 mb-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-filCebColor focus:ring focus:ring-filCebColor focus:ring-opacity-50"
				/>
				<hr className="mb-5" />
				<h2 className="text-lg ">Proof of Identity</h2>
				<p className="text-sm mb-5">Submit 2 proofs of identity</p>
				<label htmlFor="permitsUpload" className="block mb-2">
					DTI/SEC/BIR Registration/Business Permit/Cooperative Certification
					<span className="text-red-400">*</span>
				</label>
				<input
					type="file"
					id="permitsUpload"
					onChange={handleFileChange}
					accept=".jpg,.png,.jpeg"
					className="hidden"
				/>
				<label
					htmlFor="permitsUpload"
					className="px-4 py-2 mb-5 bg-blue-500 text-white rounded cursor-pointer inline-block"
				>
					Choose File
				</label>
				<label htmlFor="idUpload" className="block mb-2">
					Valid ID (Passport, Driver's License, SSS, GSIS, PRC, etc.)
					<span className="text-red-400">*</span>
				</label>
				<input
					type="file"
					id="idUpload"
					onChange={handleFileChange}
					accept=".jpg,.png,.jpeg"
					className="hidden"
				/>
				<label
					htmlFor="idUpload"
					className="px-4 py-2 mb-10 bg-blue-500 text-white rounded cursor-pointer inline-block"
				>
					Choose File
				</label>
				<button className="px-4 py-2 bg-filCebColor w-full rounded cursor-pointer inline-block">
					Submit
				</button>
			</div>
		</div>
	);
}
