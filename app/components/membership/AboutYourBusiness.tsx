import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

export default function AboutYourBusiness() {
	const { register, control } = useFormContext();

	return (
		<div>
			<h2 className="text-lg mb-2">About Your Business</h2>
			<label htmlFor="businessName" className="block mb-2">
				Business Name<span className="text-red-400">*</span>
			</label>
			<input
				{...register("businessName", { required: true })}
				id="businessName"
				type="text"
				placeholder="Type your business name here"
				autoComplete="off"
				className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
			/>
			<label htmlFor="businessAddress" className="block mb-2">
				Business Address (City)<span className="text-red-400">*</span>
			</label>
			<input
				{...register("businessAddress", { required: true })}
				id="businessAddress"
				type="text"
				placeholder="Type your business name here"
				autoComplete="off"
				className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
			/>
			{/* <label htmlFor="businessProvince" className="block mb-2">
						Province<span className="text-red-400">*</span>
					</label> */}
			{/* <Select
						options={provincesList}
						defaultValue={provincesList[0]}
						id="businessProvince"
						className="mt-1 mb-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-filCebColor focus:ring focus:ring-filCebColor focus:ring-opacity-50"
					/> */}
			{/* <label htmlFor="businessType" className="block mb-2">
						Business Type<span className="text-red-400">*</span>
					</label> */}
			{/* <Select
						options={businessTypes}
						defaultValue={businessTypes[0]}
						id="businessType"
						className="mt-1 mb-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-filCebColor focus:ring focus:ring-filCebColor focus:ring-opacity-50"
					/> */}
			<label htmlFor="businessPosition" className="block mb-2">
				Your Position in the business<span className="text-red-400">*</span>
			</label>
			<input
				{...register("businessPosition", { required: true })}
				id="businessPosition"
				type="text"
				placeholder="Type your business name here"
				autoComplete="off"
				className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
			/>
			<hr className="mb-5" />
			<h2 className="text-lg ">Proof of Identity</h2>
			<p className="text-sm mb-5">Submit 2 proofs of identity</p>
			<label htmlFor="permitsUpload" className="block mb-2">
				DTI/SEC/BIR Registration/Business Permit/Cooperative Certification
				<span className="text-red-400">*</span>
			</label>
			<Controller
				name="permitsUpload"
				control={control}
				render={({ field: { onChange, onBlur, name, ref } }) => (
					<input
						type="file"
						id="permitsUpload"
						accept=".jpg,.png,.jpeg"
						className="hidden"
						onChange={onChange}
						onBlur={onBlur}
						name={name}
						ref={ref}
					/>
				)}
			/>
			<label
				htmlFor="permitsUpload"
				className="px-4 py-2 mb-5 bg-blue-500 text-white rounded cursor-pointer inline-block"
			>
				Choose File
			</label>
			<label htmlFor="idUpload" className="block mb-2">
				Valid ID (Passport, Driver&apos;s License, SSS, GSIS, PRC, etc.)
				<span className="text-red-400">*</span>
			</label>
			<Controller
				name="idUpload"
				control={control}
				render={({ field: { onChange, onBlur, name, ref } }) => (
					<input
						type="file"
						id="idUpload"
						accept=".jpg,.png,.jpeg"
						className="hidden"
						onChange={onChange}
						onBlur={onBlur}
						name={name}
						ref={ref}
					/>
				)}
			/>
			<label
				htmlFor="idUpload"
				className="px-4 py-2 mb-10 bg-blue-500 text-white rounded cursor-pointer inline-block"
			>
				Choose File
			</label>
		</div>
	);
}
