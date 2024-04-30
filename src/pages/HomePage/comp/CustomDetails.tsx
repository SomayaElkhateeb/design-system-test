import { DownIcon, SearchIcon } from 'src/app/utils/icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatars, Button, InputRow } from 'src/app/components/optimized';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import MenuOption from 'src/app/components/optimized/Menu/MenuOption';

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
	btn: any;
}

const CustomDetails: React.FC<Props> = (props) => {
	const { t } = useTranslation();
	const language = UseLanguage();
	const [menu, setMenu] = useState(false);
	const [selectedOption, setSelectedOption] = useState(language === 'ar' ? 'اليوم' : 'Today');
	const [searchValue, setSearchValue] = useState('');
	const sortMenus = [
		{ id: 1, text: t('Today') },
		{ id: 2, text: t('Last week') },
		{ id: 3, text: t('Last month') },
	];
	const handleSelect = (selectedOption: string) => {
		setSelectedOption(selectedOption);
		setMenu(false);
	};

	const filteredData = props.data.filter(
		(item) =>
			`${item.fName} ${item.lName}`.toLowerCase().includes(searchValue.toLowerCase()) ||
			item.status.toLowerCase().includes(searchValue.toLowerCase()),
	);
	return (
		<section className='border border-constrained bg-white rounded-xl p-4 h-96 '>
			<header className='flex justify-between items-center'>
				<h2 className='text-title font-semibold text-lg'>{props.text}</h2>

				<div className='flex justify-between items-center gap-4'>
					{props.btn ? (
						<div className='relative'>
							<Button variant='link' RightIcon={DownIcon} onClick={() => setMenu(true)}>
								{selectedOption}
							</Button>
							{menu && (
								<MenuOption
									options={sortMenus}
									selectedOption={selectedOption}
									onSelect={handleSelect}
								/>
							)}
						</div>
					) : null}
					<InputRow
						leftIcon={<SearchIcon />}
						placeholder={t('Search')}
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</div>
			</header>
			<div>
				{filteredData.length < 1 ? (
					<div className='flex justify-center items-center h-full'>
						<p className='text-subtitle text-sm'>
							{t('No')} {props.text} {t('yet')}
						</p>
					</div>
				) : (
					<section className='flex flex-col gap-4 mt-4 overflow-auto h-[16.5rem]'>
						{filteredData.map((item) => {
							const { id, img, fName, lName, status, color, price, currency, date } = item;

							let statusClass;
							switch (status) {
								case 'Awaiting Payment':
								case 'في انتظار الدفع':
									statusClass = 'text-neutral-2';
									break;
								case 'Canceled':
								case 'ألغيت':
									statusClass = 'text-subtitle';
									break;
								case 'Paid':
								case 'مدفوع':
									statusClass = 'text-sec-pressed';
									break;
							}

							return (
								<div key={id} className='flex justify-between'>
									<div className='flex justify-between gap-4'>
										<Avatars src={img} fName={fName} lName={lName} />
										<div>
											<h4 className='text-title text-sm'>
												{fName} {lName} <span className='text-xs text-subtitle'>{color}</span>
											</h4>
											<p className={statusClass}>{status}</p>
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
