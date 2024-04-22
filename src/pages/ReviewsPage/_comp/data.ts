import { nanoid } from 'nanoid';
import { getCurrentDate, getImageUrl } from 'src/app/utils';

export interface Response {
	reviewer: {
		firstName: string;
		lastName: string;
	};
	repliedDate: string;
	content: string;
}

export interface Review {
	id: string;
	reviewer: {
		firstName: string;
		lastName: string;
	};
	date: string;
	comment: string;
	response: Response | null;
	rating: number;
	isReplied: boolean;
	isPublished: boolean;
}

export interface AskQuery {
	id: string;
	reviewer: {
		firstName: string;
		lastName: string;
	};
	publishedDate: string;
	question: string;
	response: Response | null;
	isResponded: boolean;
}

export interface Product {
	id: string;
	name: string;
	image: string;
	reviews: Review[];
	ask_queries: AskQuery[];
}

export const products: Product[] = [
	{
		id: nanoid(),
		name: 'DJI Mavic Pro 1',
		image: getImageUrl('product/product.png'),
		reviews: [
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Walied',
					lastName: 'Sayed',
				},
				date: getCurrentDate(),
				comment: 'This product is awesome! I highly recommend it',
				rating: 3,
				response: null,
				isReplied: false,
				isPublished: false,
			},
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Walied',
					lastName: 'Sayed',
				},
				date: getCurrentDate(),
				comment: 'This product is awesome! I highly recommend it',
				rating: 2,
				response: {
					reviewer: {
						firstName: 'Walied',
						lastName: 'Sayed',
					},
					content: 'Thanks for letting us know.',
					repliedDate: getCurrentDate(),
				},
				isReplied: true,
				isPublished: false,
			},
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Walied',
					lastName: 'Sayed',
				},
				date: getCurrentDate(),
				comment: 'This product is awesome! I highly recommend it',
				rating: 5,
				response: {
					reviewer: {
						firstName: 'Walied',
						lastName: 'Sayed',
					},
					content: 'Thanks for letting us know.',
					repliedDate: getCurrentDate(),
				},
				isReplied: true,
				isPublished: true,
			},
		],
		ask_queries: [
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Walied',
					lastName: 'Sayed',
				},
				publishedDate: getCurrentDate(),
				question: 'Does it come with a cable?',
				response: null,
				isResponded: false,
			},
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Ahmed',
					lastName: 'Sayed',
				},
				publishedDate: getCurrentDate(),
				question: 'Does it come with a cable?',
				response: null,
				isResponded: false,
			},
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Muhammed',
					lastName: 'Abdelhalkeem',
				},
				publishedDate: getCurrentDate(),
				question: 'Does it come with a cable?',
				response: {
					reviewer: {
						firstName: 'Walied',
						lastName: 'Sayed',
					},
					content: 'Yes, this product has a cable',
					repliedDate: getCurrentDate(),
				},
				isResponded: true,
			},
		],
	},
	{
		id: nanoid(),
		name: 'DJI Mavic Pro 2',
		image: getImageUrl('product/product.png'),
		reviews: [
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Walied',
					lastName: 'Sayed',
				},
				date: getCurrentDate(),
				comment: 'This product is awesome! I highly recommend it',
				rating: 3,
				response: null,
				isReplied: false,
				isPublished: false,
			},
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Walied',
					lastName: 'Sayed',
				},
				date: getCurrentDate(),
				comment: 'This product is awesome! I highly recommend it',
				rating: 2,
				response: {
					reviewer: {
						firstName: 'Walied',
						lastName: 'Sayed',
					},
					content: 'Thanks for letting us know.',
					repliedDate: getCurrentDate(),
				},
				isReplied: true,
				isPublished: false,
			},
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Walied',
					lastName: 'Sayed',
				},
				date: getCurrentDate(),
				comment: 'This product is awesome! I highly recommend it',
				rating: 5,
				response: {
					reviewer: {
						firstName: 'Walied',
						lastName: 'Sayed',
					},
					content: 'Thanks for letting us know.',
					repliedDate: getCurrentDate(),
				},
				isReplied: true,
				isPublished: true,
			},
		],
		ask_queries: [
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Walied',
					lastName: 'Sayed',
				},
				publishedDate: getCurrentDate(),
				question: 'Does it come with a cable?',
				response: null,
				isResponded: false,
			},
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Ahmed',
					lastName: 'Sayed',
				},
				publishedDate: getCurrentDate(),
				question: 'Does it come with a cable?',
				response: null,
				isResponded: false,
			},
			{
				id: nanoid(),
				reviewer: {
					firstName: 'Muhammed',
					lastName: 'Abdelhalkeem',
				},
				publishedDate: getCurrentDate(),
				question: 'Does it come with a cable?',
				response: {
					reviewer: {
						firstName: 'Walied',
						lastName: 'Sayed',
					},
					content: 'Yes, this product has a cable',
					repliedDate: getCurrentDate(),
				},
				isResponded: true,
			},
		],
	},
];

export const sortMenus = [
	{ id: 'published', text: 'Date published' },
	{ id: 'replied', text: 'Date replied' },
];
