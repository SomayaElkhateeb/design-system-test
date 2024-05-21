import { nanoid } from 'nanoid';

const address = [
	{ id: nanoid(), name: 'Country', value: 'Saudi Arabia' },
	{ id: nanoid(), name: 'City', value: 'Riyadh' },
	{ id: nanoid(), name: 'Area', value: 'Al Jazera' },
	{ id: nanoid(), name: 'Street', value: 'Haroon Al Rashied' },
	{ id: nanoid(), name: 'Building No', value: 15 },
	{ id: nanoid(), name: 'Landmark', value: 'Meed Market' },
];

const info = [
	{ id: nanoid(), name: 'IP Address: ', value: '213.156.160.96' },
	{ id: nanoid(), name: 'Accepts email marketing:', value: 'No' },
];
export { address, info };
