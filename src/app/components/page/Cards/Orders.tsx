import { useState } from 'react';
import { Avatars, Button, InputRow, Menu } from 'src/app/components/optimized';
import { DownIcon, SearchIcon } from 'src/app/utils/icons';

const sortMenus = [
	{ id: '1', text: 'Today' },
	{ id: '2', text: 'Last week' },
	{ id: '3', text: 'Last month' },
];
const data: {
	id: number;
	img?: string;
	fName: string;
	lName: string;
	status: string;
	color: string;
	price: number;
	currency: string;
	date: string;
}[] = [
	{
		id: 1,
		img: 'https://stock.adobe.com/eg/images/joyful-young-redhead-woman-laughing-at-camera/302785595',
		fName: 'walied',
		lName: 'sayed',
		status: 'Awaiting Payment',
		color: '#8965742',
		price: 50,
		currency: 'SAR',
		date: '5/6/2021',
	},
	{
		id: 2,
		fName: 'Ahmed',
		lName: 'Rady',
		status: 'Canceled',
		color: '#8965742',
		price: 50,
		currency: 'SAR',
		date: '5/6/2021',
	},
	{
		id: 3,
		img: 'https://stock.adobe.com/eg/images/joyful-young-redhead-woman-laughing-at-camera/302785595',
		fName: 'walied',
		lName: 'sayed',
		status: 'Paid',
		color: '#8965742',
		price: 50,
		currency: 'SAR',
		date: '5/6/2021',
	},
	{
		id: 4,
		fName: 'Ahmed',
		lName: 'Rady',
		status: 'Awaiting Payment',
		color: '#8965742',
		price: 50,
		currency: 'SAR',
		date: '5/6/2021',
	},
	{
		id: 5,
		img: 'https://stock.adobe.com/eg/images/joyful-young-redhead-woman-laughing-at-camera/302785595',
		fName: 'walied',
		lName: 'sayed',
		status: 'Paid',
		color: '#8965742',
		price: 50,
		currency: 'SAR',
		date: '5/6/2021',
	},
];

const Orders = () => {
	const [menu, setMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Today');

	const handleSelect = (selectedOption) => {
		setSelectedOption(selectedOption);
	};
	return (
		<section className='border border-constrained bg-white rounded-xl p-4 h-[350px]'>
			<header className='flex justify-between items-center'>
				<h2 className='text-title font-semibold text-lg'>Latest Orders</h2>

				<div className='flex justify-between items-center gap-4'>
					<Button variant='link' RightIcon={DownIcon} onClick={() => setMenu(true)}>
						{selectedOption}
					</Button>
					{menu && <Menu options={sortMenus} selectedOption={selectedOption} onSelect={handleSelect} />}
					<InputRow leftIcon={<SearchIcon />} placeholder='Search' />
				</div>
			</header>

			{data.length < 1 ? (
				<div className='flex justify-center items-center h-full'>
					<p className='text-subtitle text-sm'>No orders yet</p>
				</div>
			) : (
				<section className='flex flex-col gap-4 mt-4 overflow-auto h-[16.5rem]'>
					{data.map((item) => {
						const { id, img, fName, lName, status, color, price, currency, date } = item;
						return (
							<div key={id} className='flex justify-between'>
								<div className='flex justify-between gap-4'>
									<Avatars src={img} fName={fName} lName={lName} />
									<div>
										<h4 className='text-title text-sm'>
											{fName} {lName} <span className='text-xs text-subtitle'>{color}</span>
										</h4>
										<p
											className={`text-sm text-sec-pressed ${
												status === 'Awaiting Payment' ? 'text-neutral-2' : status === 'Canceled' ? 'text-subtitle' : ''
											}`}
										>
											{status}
										</p>
									</div>
								</div>
								<div>
									<h4 className='text-right text-title text-sm font-semibold'>
										{price} {currency}
									</h4>
									<p className='text-subtitle text-xs'>{date}</p>
								</div>
							</div>
						);
					})}
				</section>
			)}
		</section>
	);
};

export default Orders;
