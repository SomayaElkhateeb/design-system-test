import React from 'react';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
	const handlePageChange = (page: number) => {
		onPageChange(page);
	};

	return (
		<div className='flex justify-start mt-4'>
			<div className='flex'>
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className='px-3 py-1 bg-gray-100 text-gray-700 rounded-l hover:bg-gray-300 focus:outline-none focus:bg-gray-300'
				>
					Previous
				</button>
				{[...Array(totalPages).keys()].map((index) => (
					<button
						key={index}
						onClick={() => handlePageChange(index + 1)}
						className={`px-3 py-1 ${
							currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
						} hover:bg-gray-300 focus:outline-none focus:bg-gray-300`}
					>
						{index + 1}
					</button>
				))}
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className='px-3 py-1 bg-gray-100 text-gray-700 rounded-r hover:bg-gray-300 focus:outline-none focus:bg-gray-300'
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Pagination;
