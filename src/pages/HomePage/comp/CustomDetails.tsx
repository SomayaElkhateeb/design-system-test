import { DownIcon, SearchIcon } from 'src/app/utils/icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Avatars, Button, InputRow } from 'src/app/components/optimized';

interface ItemData {
	id: number;
	img: string;
	fName: string;
	lName: string;
	status: string;
	color: string;
	price: number;
	currency: string;
	date: string;
}

interface Props {
	data: ItemData[];
	text: string;
	sortMenus: [];
}

const CustomDetails: React.FC<Props> = (props) => {
	const { t } = useTranslation();
	const [menu, setMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Today');

	const handleSelect = (selectedOption) => {
		setSelectedOption(selectedOption);
	};
	return (
		<section className='border border-constrained bg-white rounded-xl p-4 h-96 '>
			<header className='flex justify-between items-center'>
				<h2 className='text-title font-semibold text-lg'>{props.text}</h2>

				<div className='flex justify-between items-center gap-4'>
					<Button variant='link' RightIcon={DownIcon} onClick={() => setMenu(true)}>
						{selectedOption}
					</Button>
					{menu && <Menu options={props.sortMenus} selectedOption={selectedOption} onSelect={handleSelect} />}
					<InputRow leftIcon={<SearchIcon />} placeholder={t('Search')} />
				</div>
			</header>
			<div>
				{props.data.length < 1 ? (
					<div className='flex justify-center items-center h-full'>
						<p className='text-subtitle text-sm'>No {props.text} yet</p>
					</div>
				) : (
					<section className='flex flex-col gap-4 mt-4 overflow-auto h-[16.5rem]'>
						{props.data.map((item) => {
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
												className={`text-sm ${
													status === 'Awaiting Payment'
														? 'text-neutral-2'
														: status === 'Canceled'
														? 'text-subtitle'
														: 'text-sec-pressed'
												}`}
											>
												{status}
											</p>
										</div>
									</div>

									<div>
										<h4 className='text-right text-title text-sm font-semibold mb-2'>
											{price} {currency}
										</h4>
										<p className='text-subtitle text-xs'>{date}</p>
									</div>
								</div>
							);
						})}
					</section>
				)}
			</div>
		</section>
	);
};

export default CustomDetails;
