import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @param  {...import("clsx").ClassValue} inputs */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const truncateString = (str, maxLength) => {
	if (str.length <= maxLength) {
		return str;
	} else {
		return str.slice(0, maxLength - 3) + '...';
	}
};

export const capitalizeFirstLetter = (inputString) => {
	if (!inputString) {
		return inputString;
	}

	return inputString.charAt(0).toUpperCase() + inputString.slice(1);
};

export const getImageUrl = (name) => {
	return new URL(`../assets/${name}`, import.meta.url).href;
};

export function formatLikes(num) {
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

export const getNumericValue = (str) => parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;
export const parseDate = (dateString) => new Date(dateString);

