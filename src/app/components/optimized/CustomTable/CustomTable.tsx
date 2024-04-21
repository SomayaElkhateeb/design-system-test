import useSortablePaginatedTable from './useSortablePaginatedTable';
import Pagination from './Pagination';
import { exportToExcel } from './exportToExcel';
import { Button } from 'src/app/components/optimized';
import { IoPrintOutline } from 'react-icons/io5';
import { RiFileExcel2Line } from 'react-icons/ri';

interface CustomTableProps<T, K extends keyof T> {
	data?: T[];
	columns?: { key: K; title: string; accessor: keyof T }[];
	initialSortColumn?: K;
	initialSortOrder?: 'asc' | 'desc';
	initialPage: number;
	initialItemsPerPage: number;
}

const CustomTable = <T, K extends keyof T>({
	data = [],
	columns,
	initialSortColumn,
	initialSortOrder,
	initialPage,
	initialItemsPerPage,
}: CustomTableProps<T, K>) => {
	const { sortedData, sortConfig, currentPage, totalPages, handleSort, handlePageChange } = useSortablePaginatedTable(
		data,
		initialSortColumn,
		initialSortOrder,
		initialPage,
		initialItemsPerPage,
	);

	const handlePrint = () => {
		window.print();
	};

	const handleExportToExcel = () => {
		exportToExcel(sortedData, 'reviews_data.xlsx');
	};

	const renderColumns = () => {
		return columns?.map((column) => (
			<th
				key={column.key.toString()}
				className={`px-5 py-3 border-b bg-white rounded-md border-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer`}
				onClick={() => handleSort(column.key)}
			>
				{column.title}
				{sortConfig.columnKey === column.key && (
					<span className='ml-1'>{sortConfig.sortOrder === 'asc' ? '▲' : '▼'}</span>
				)}
			</th>
		));
	};

	const renderRows = () => {
		return sortedData.map((row) => (
			<tr key={String(row.id)}>
				{columns?.map((column) => (
					<td
						key={String(row[column.key])}
						className={`px-5 py-5 border-b border-gray-200 bg-white text-left text-gray-800 rounded-md`}
					>
						{row[column.accessor]}
					</td>
				))}
			</tr>
		));
	};

	return (
		<div>
			<div className='mb-4 flex justify-end space-x-2'>
				<Button onClick={handlePrint} variant='secondary' LeftIcon={<IoPrintOutline />}>
					Print
				</Button>
				<Button onClick={handleExportToExcel} variant='secondary' LeftIcon={<RiFileExcel2Line />}>
					Export
				</Button>
			</div>
			<div className='print-only'>
				<table className='min-w-full leading-normal'>
					<thead>
						<tr>{renderColumns()}</tr>
					</thead>
					<tbody>{renderRows()}</tbody>
				</table>
			</div>
			<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
		</div>
	);
};

export default CustomTable;
