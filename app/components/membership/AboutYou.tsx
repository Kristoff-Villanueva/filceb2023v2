import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";
import { getMaxDate } from "./controller";
import { useEffect, useRef, useState } from "react";

type AboutYouProps = {
	provincesList: { label: string; value: string }[];
	formReset: boolean;
};

const AboutYou: React.FC<AboutYouProps> = ({ provincesList, formReset }) => {
	const { register, control, setValue, reset } = useFormContext();
	const maxDate = getMaxDate();
	const [province, setProvince] = useState("");

	useEffect(() => {
		if (formReset) {
			setProvince("");
		}
	});

	return (
		<div>
			<h2 className="text-lg mb-2">About You</h2>

			<label htmlFor="firstName" className="block mb-2">
				First Name<span className="text-red-400">*</span>
			</label>
			<input
				{...register("firstName", { required: true, maxLength: 30 })}
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
				{...register("lastName", { required: true, maxLength: 30 })}
				id="lastName"
				type="text"
				placeholder="Type your last name here"
				autoComplete="off"
				className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
			/>
			{/* <label htmlFor="email" className="block mb-2">
				Email<span className="text-red-400">*</span>
			</label>
			<input
				{...register("email", { required: true, maxLength: 30 })}
				type="email"
				placeholder="Type your email here"
				autoComplete="off"
				className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
			/>
			<label htmlFor="mobileNumber" className="block mb-2">
				Mobile Number<span className="text-red-400">*</span>
			</label>
			<input
				{...register("mobileNumber", { required: true, maxLength: 30 })}
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
				{...register("dateOfBirth", { required: true })}
				id="dateOfBirth"
				type="date"
				placeholder="Select your date of birth"
				autoComplete="off"
				className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
				max={maxDate}
			/>
			<label htmlFor="barangay" className="block mb-2">
				Address (Barangay)<span className="text-red-400">*</span>
			</label>
			<input
				{...register("barangay", { required: true, maxLength: 30 })}
				id="barangay"
				type="text"
				placeholder="Type your business name here"
				autoComplete="off"
				className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
			/>
			<label htmlFor="city" className="block mb-2">
				Address (City)<span className="text-red-400">*</span>
			</label>
			<input
				{...register("city", { required: true, maxLength: 30 })}
				id="city"
				type="text"
				placeholder="Type your business name here"
				autoComplete="off"
				className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
			/>
			<label htmlFor="province" className="block mb-2">
				Province<span className="text-red-400">*</span>
			</label>
			<Controller
				name="province"
				control={control}
				defaultValue=""
				render={({ field }) => (
					<Select
						id="province"
						value={
							province
								? provincesList.find((option) => option.label === province)
								: null
						}
						options={provincesList}
						onChange={(option) => {
							if (option) {
								field.onChange(option.label);
								setProvince(option.label);
							} else {
								field.onChange("");
								setProvince("");
							}
						}}
					/>
				)}
			/> */}
		</div>
	);
};

export default AboutYou;
