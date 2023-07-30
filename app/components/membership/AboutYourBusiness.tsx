import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";
import { useEffect, useState } from "react";
import { businessTypes } from "./controller";

type AboutYourBusinessProps = {
	provincesList: { label: string; value: string }[];
	formReset: boolean;
};

const AboutYourBusiness: React.FC<AboutYourBusinessProps> = ({
	provincesList,
	formReset,
}) => {
	const { register, control } = useFormContext();
	const [idUploadFile, setIdUploadFile] = useState<File | null>(null);
	const [permitsUploadFile, setPermitsUploadFile] = useState<File | null>(null);
	const [businessType, setBusinessType] = useState("");
	const [province, setProvince] = useState("");

	const handleIdUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setIdUploadFile(event.target.files[0]);
		}
	};

	const handlePermitsUploadChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.files && event.target.files[0]) {
			setPermitsUploadFile(event.target.files[0]);
		}
	};

	useEffect(() => {
		if (formReset) {
			setIdUploadFile(null);
			setPermitsUploadFile(null);
			setBusinessType("");
			setProvince("");
		}
	});

	return (
		<div>
			{/* <h2 className="text-lg mb-2">About Your Business</h2>
			<label htmlFor="businessName" className="block mb-2">
				Business Name<span className="text-red-400">*</span>
			</label>
			<input
				{...register("businessName", { required: true, maxLength: 30 })}
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
				{...register("businessAddress", { required: true, maxLength: 30 })}
				id="businessAddress"
				type="text"
				placeholder="Type your business name here"
				autoComplete="off"
				className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
			/>
			<label htmlFor="businessProvince" className="block mb-2">
				Province<span className="text-red-400">*</span>
			</label>
			<Controller
				control={control}
				name="businessProvince"
				rules={{ required: true }}
				defaultValue=""
				render={({ field: { onChange, onBlur, name, ref } }) => (
					<Select
						options={provincesList}
						defaultValue={provincesList[0]}
						value={
							province
								? provincesList.find((option) => option.label === province)
								: null
						}
						id="businessProvince"
						className="mt-1 mb-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-filCebColor focus:ring focus:ring-filCebColor focus:ring-opacity-50"
						onChange={(option) => {
							if (option) {
								onChange(option.label);
								setProvince(option.label);
							} else {
								onChange("");
								setProvince("");
							}
						}}
					/>
				)}
			/>

			<label htmlFor="businessType" className="block mb-2">
				Business Type<span className="text-red-400">*</span>
			</label>
			<Controller
				control={control}
				name="businessType"
				rules={{ required: true }}
				defaultValue=""
				render={({ field: { onChange, onBlur, name, ref } }) => (
					<Select
						options={businessTypes}
						id="businessType"
						className="mt-1 mb-5 block w-full rounded-md border-gray-300 shadow-sm focus:border-filCebColor focus:ring focus:ring-filCebColor focus:ring-opacity-50"
						value={
							businessType
								? businessTypes.find((option) => option.label === businessType)
								: null
						}
						onChange={(option) => {
							if (option) {
								onChange(option.label);
								setBusinessType(option.label);
							} else {
								onChange("");
								setBusinessType("");
							}
						}}
					/>
				)}
			/>
			<label htmlFor="businessPosition" className="block mb-2">
				Your Position in the business<span className="text-red-400">*</span>
			</label>
			<input
				{...register("businessPosition", { required: true, maxLength: 30 })}
				id="businessPosition"
				type="text"
				placeholder="Type your business name here"
				autoComplete="off"
				className="w-full mb-5 border border-gray-200 rounded h-12 placeholder:gray-400 placeholder:italic px-3 focus:outline-none focus:ring-2 focus:ring-filCebColor focus:border-transparent shadow-sm"
			/>
			<hr className="mb-5" /> */}
			<h2 className="text-lg">Proof of Identity</h2>
			<p className="text-sm mb-5">Submit 2 proofs of identity</p>
			<label htmlFor="permitsUpload" className="block mb-2">
				DTI/SEC/BIR Registration/Business Permit/Cooperative Certification
				<span className="text-red-400">*</span>
			</label>
			<Controller
				name="permitsUpload"
				control={control}
				rules={{ required: true }}
				defaultValue=""
				render={({ field: { onChange, onBlur, name, ref } }) => (
					<input
						type="file"
						id="permitsUpload"
						accept=".jpeg, .jpg,.png,.jpeg"
						className="hidden"
						onChange={(e) => {
							const file = e.target.files?.[0];
							if (file) {
								const maxAllowedSize = 10 * 1024 * 1024;
								if (file.size <= maxAllowedSize) {
									onChange(file);
									setPermitsUploadFile(file);
								} else {
									alert("File too large. Maximum file size is 10MB.");
								}
							}
						}}
						onBlur={onBlur}
						name={name}
						ref={ref}
					/>
				)}
			/>
			<label
				htmlFor="permitsUpload"
				className={`px-4 py-2 mb-10 bg-blue-500 text-white rounded cursor-pointer inline-block ${
					permitsUploadFile ? "pointer-events-none bg-slate-500 opacity-50" : ""
				}`}
			>
				{permitsUploadFile ? "Uploaded" : "Choose File"}
			</label>
			{permitsUploadFile && (
				<span className="ms-2">{permitsUploadFile.name} ✅</span>
			)}

			<label htmlFor="idUpload" className="block mb-2">
				Valid ID (Passport, Driver&apos;s License, SSS, GSIS, PRC, etc.)
				<span className="text-red-400">*</span>
			</label>
			<Controller
				name="idUpload"
				control={control}
				rules={{ required: true }}
				defaultValue=""
				render={({ field: { onChange, onBlur, name, ref } }) => (
					<input
						type="file"
						id="idUpload"
						accept=".jpg,.png,.jpeg"
						className="hidden"
						onChange={(e) => {
							const file = e.target.files?.[0];
							if (file) {
								const maxAllowedSize = 10 * 1024 * 1024;
								if (file.size <= maxAllowedSize) {
									onChange(file);
									setIdUploadFile(file);
								} else {
									alert("File too large. Maximum file size is 10MB.");
								}
							}
						}}
						onBlur={onBlur}
						name={name}
						ref={ref}
					/>
				)}
			/>
			<label
				htmlFor="idUpload"
				className={`px-4 py-2 mb-10 bg-blue-500 text-white rounded cursor-pointer inline-block ${
					idUploadFile ? "pointer-events-none bg-slate-500 opacity-50" : ""
				}`}
			>
				{idUploadFile ? "Uploaded" : "Choose File"}
			</label>
			{idUploadFile && <span className="ms-2">{idUploadFile.name} ✅</span>}
			<label htmlFor="faxNumber" className="hidden">
				Fax Number
			</label>
			<input
				{...register("faxNumber")}
				id="faxNumber"
				type="text"
				autoComplete="off"
				className="hidden"
			/>
		</div>
	);
};

export default AboutYourBusiness;
