import { clsx } from 'clsx';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import * as XLSX from 'xlsx';

/**
 * @param  {...import("clsx").ClassValue} inputs */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const truncateString = (str: string, maxLength: number) => {
	if (str.length <= maxLength) {
		return str;
	} else {
		return str.slice(0, maxLength - 3) + '...';
	}
};

export const capitalizeFirstLetter = (inputString: string) => {
	if (!inputString) {
		return inputString;
	}

	return inputString.charAt(0).toUpperCase() + inputString.slice(1);
};

export const getImageUrl = (name: string) => {
	return new URL(`../assets/${name}`, import.meta.url).href;
};

export function formatLikes(num: number) {
	if (num < 1000) {
		return num.toString();
	} else if (num < 1000000) {
		const formatted = (num / 1000).toFixed(1);
		return formatted.replace(/\.0$/, '') + 'K';
	} else if (num < 1000000000) {
		const formatted = (num / 1000000).toFixed(1);
		return formatted.replace(/\.0$/, '') + 'M';
	} else {
		const formatted = (num / 1000000000).toFixed(1);
		return formatted.replace(/\.0$/, '') + 'B';
	}
}

export function getInitialDate() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, '0');
	const day = String(today.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}
export const getCurrentDate = () => {
	const currentDate = new Date();

	const formattedDate = currentDate.toLocaleDateString(undefined, {
		month: '2-digit',
		day: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	});

	return formattedDate;
};

// Function to calculate the average rating
export const calculateAverageRating = (reviews: { rating: number }[]): string => {
	if (reviews.length === 0) {
		return '0'; // Return '0' if there are no reviews
	}
	const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
	return (totalRating / reviews.length).toFixed(2);
};

export const randomColor = Math.floor(Math.random() * 16777215).toString(16);

export const getNumericValue = (str: string) => parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;
export const parseDate = (dateString: string) => new Date(dateString);

export const exportToExcel = (data: any[], filename: string) => {
	// Convert data to worksheet
	const ws = XLSX.utils.json_to_sheet(data);

	// Create workbook
	const wb: XLSX.WorkBook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

	// Save to file
	XLSX.writeFile(wb, filename);
};

/**
 * Hook that listens for clicks outside of a specified element identified by its ID.
 * @param id - The ID of the element to track clicks outside of.
 * @param onClickOutside - The function to call when a click outside of the element occurs.
 */
export const useClickOutsideWithId = (id: string, onClickOutside: () => void) => {
	useEffect(() => {
		/**
		 * Event handler that checks if a click event occurs outside of the specified element.
		 * @param event - The mouse event object.
		 */
		const handleClickOutside = (event: MouseEvent) => {
			const card = document.getElementById(id);
			if (card && !card.contains(event.target as Node)) {
				onClickOutside();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [id, onClickOutside]);
};
