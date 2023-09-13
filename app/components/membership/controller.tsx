import { useState, useEffect } from "react";

type Province = {
	code: string;
	name: string;
};

export const useProvinces = () => {
	const [provinces, setProvinces] = useState<Province[]>([]);

	useEffect(() => {
		fetch("https://psgc.gitlab.io/api/provinces.json")
			.then((res) => res.json())
			.then((data) => {
				setProvinces(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const provincesList = provinces
		.sort((a, b) => a.name.localeCompare(b.name))
		.map((province) => ({
			label: province.name,
			value: province.code,
		}));

	return provincesList;
};

export const getMaxDate = () => {
	const currentDate = new Date();
	const maxDate = `${currentDate.getFullYear()}-${(
		"0" +
		(currentDate.getMonth() + 1)
	).slice(-2)}-${("0" + currentDate.getDate()).slice(-2)}`;

	return maxDate;
};

export const businessTypes = [
	{ label: "Sole Proprietorship", value: "SP" },
	{ label: "Partnership", value: "P" },
	{ label: "Corporation", value: "C" },
	{ label: "Cooperative", value: "CO" },
	{ label: "Others", value: "O" },
];
