import { useState, useMemo } from 'react';

export interface Branch {
	id: number;
	name: string;
	city: string;
	phone: string;
	country: string;
	address: string;
	isMain?: boolean;
	branchType?: string;
}

export const branchesData: Branch[] = [
	{
		id: 1,
		name: 'Branch 1',
		address: '123 Main St',
		city: 'City 1',
		country: 'Country 1',
		phone: '123-456-7890',
		isMain: true,
		branchType: 'warehouse',
	},
	{
		id: 2,
		name: 'Branch 2',
		address: '456 Elm St',
		city: 'City 2',
		country: 'Country 2',
		phone: '987-654-3210',
		isMain: false,
		branchType: 'commercialBranch',
	},
];

export default function useBranch(initialData: Branch[]) {
	const [filter, setFilter] = useState<string>('all');

	const handleFilterChange = (type: string) => {
		setFilter(type);
	};

	const filteredData = useMemo(() => {
		if (filter === 'all') return initialData;
		return initialData.filter((branch) => branch.branchType === filter);
	}, [filter, initialData]);

	return {
		filter,
		filteredData,
		handleFilterChange,
	};
}
