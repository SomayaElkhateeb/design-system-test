import { useState } from 'react';

interface SortConfig<T> {
	columnKey: keyof T;
	sortOrder: 'asc' | 'desc';
}

interface PaginationConfig {
	currentPage: number;
	itemsPerPage: number;
}

interface TableSettings<T> {
	sortedData: T[];
	sortConfig: SortConfig<T>;
	currentPage: number;
	totalPages: number;
	totalItems: number;
	handleSort: (columnKey: keyof T) => void;
	handlePageChange: (page: number) => void;
}

const useSortablePaginatedTable = <T,>(
	initialData: T[],
	initialSortColumn: keyof T,
	initialSortOrder: 'asc' | 'desc',
	initialPage: number,
	initialItemsPerPage: number,
): TableSettings<T> => {
	const [sortConfig, setSortConfig] = useState<SortConfig<T>>({
		columnKey: initialSortColumn,
		sortOrder: initialSortOrder,
	});
	const [paginationConfig, setPaginationConfig] = useState<PaginationConfig>({
		currentPage: initialPage,
		itemsPerPage: initialItemsPerPage,
	});

	const totalItems = initialData.length;

	const sortedData = initialData.slice().sort((a, b) => {
		const aValue = a[sortConfig.columnKey];
		const bValue = b[sortConfig.columnKey];
		return sortConfig.sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
	});

	const handleSort = (columnKey: keyof T) => {
		setSortConfig((prevConfig) => ({
			columnKey,
			sortOrder: prevConfig.columnKey === columnKey ? (prevConfig.sortOrder === 'asc' ? 'desc' : 'asc') : 'asc',
		}));
	};

	const handlePageChange = (page: number) => {
		setPaginationConfig((prevConfig) => ({ ...prevConfig, currentPage: page }));
	};

	const totalPages = Math.ceil(totalItems / paginationConfig.itemsPerPage);

	return {
		sortedData: sortedData.slice(
			(paginationConfig.currentPage - 1) * paginationConfig.itemsPerPage,
			paginationConfig.currentPage * paginationConfig.itemsPerPage,
		),
		sortConfig,
		currentPage: paginationConfig.currentPage,
		totalPages,
		totalItems,
		handleSort,
		handlePageChange,
	};
};

export default useSortablePaginatedTable;
