"use client";

import { useEffect, useState, useRef } from "react";
import { useProvinces } from "./controller";
import { useForm, Controller, FormProvider } from "react-hook-form";
import AboutYou from "./AboutYou";
import AboutYourBusiness from "./AboutYourBusiness";
import ReCAPTCHA from "react-google-recaptcha";

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
	fax: string;
}

export default function Membership() {
	const methods = useForm<FormData>({ mode: "all" });
	const [recaptchaSolved, setRecaptchaSolved] = useState(false);
	const { handleSubmit, formState, reset } = methods;
	const provincesList = useProvinces();
	const [formReset, setFormReset] = useState(false);
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

	const onChange = (value: any) => {
		setRecaptchaSolved(true);
		setRecaptchaToken(value);
	};

	const defaultValues = {
		firstName: "",
		lastName: "",
		email: "",
		mobileNumber: "",
		dateOfBirth: "",
		barangay: "",
		city: "",
		province: "",
		businessName: "",
		businessAddress: "",
		businessProvince: "",
		businessType: "",
		businessPosition: "",
		permitsUpload: null,
		idUpload: null,
		fax: "",
	};

	const onSubmit = (data: FormData) => {
		const combinedData = { ...data, recaptchaToken };
		console.log(combinedData);
		reset(defaultValues);
		recaptchaRef.current?.reset();
		setFormReset(true);
	};

	return (
		<FormProvider {...methods}>
			<div className="m-5">
				<div className="border border-gray-300 shadow-lg rounded-lg p-6 mx-auto w-full max-w-md">
					<h1 className="text-2xl text-center mb-5">
						<span className="font-bold">FilCeb Business Club, Inc </span>
						<br /> Membership
					</h1>
					<hr className="mb-5" />
					<form onSubmit={handleSubmit(onSubmit)}>
						<AboutYou provincesList={provincesList} formReset={formReset} />
						<hr className="mb-5" />
						<AboutYourBusiness
							provincesList={provincesList}
							formReset={formReset}
						/>
						<div className="mb-3">
							<ReCAPTCHA
								sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
								onChange={onChange}
								ref={recaptchaRef}
							/>
						</div>
						<button
							className={`px-4 py-2 bg-filCebColor w-full rounded cursor-pointer inline-block
							${
								!formState.isValid || !recaptchaSolved
									? "pointer-events-none bg-slate-500 opacity-50"
									: ""
							}`}
							type="submit"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</FormProvider>
	);
}
