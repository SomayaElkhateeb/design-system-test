import { nanoid } from 'nanoid';
import CategoryButton from '../../optimized/Buttons/CategoryButton';
import PriceButton from '../../optimized/Buttons/PriceButton';
import useSelectBox from '../../optimized/Menu/useSelectBox';
import { UseLanguage } from '../../CustomHook/LanguageHook';
import { IoIosArrowForward } from 'react-icons/io';
import { BackIcon } from 'src/app/utils/icons';
import { useTranslation } from 'react-i18next';
import RatedCard from '../../optimized/Cards/RatedCard';
import { useNavigate } from 'react-router-dom';
// import RatedCard from '../../optimized/Cards/RatedCard';
export default function AllServices() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	//  dummy array
	const array = [...Array(3)];

	//  Menus
	const Menus = [
		{ id: nanoid(), text: 'Today' },
		{ id: nanoid(), text: 'Last week' },
		{ id: nanoid(), text: 'Last month' },
		{ id: nanoid(), text: 'Specify date' },
	];
	//  custom hook for select arrang item

	const { selectedOption, handleSelect } = useSelectBox();

	//  custom hooks
	const language = UseLanguage();
	return (
		<div className='flex-col-top-section-pages'>
			{/*  actions buttons */}
			<div className='flex  items-center gap-[1rem]'>
				<CategoryButton
					selectedOption={selectedOption}
					handelSelect={handleSelect}
					sortMenus={Menus}
				/>
				<PriceButton
					selectedOption={selectedOption}
					handelSelect={handleSelect}
					sortMenus={Menus}
				/>
			</div>

			{/*  services cards */}
			<div className='flex flex-col gap-[.5rem]  '>
				<div className='flex-row-global  justify-between'>
					<p className='text-[1rem] font-semibold'>{t('Popular')}</p>
					<div className='flex items-center gap-[.3rem] cursor-pointer'>
						<h2 className='text-[.8rem] font-semibold capitalize text-title'>{t('View All')}</h2>
						{language !== 'ar' ? <IoIosArrowForward /> : <BackIcon />}
					</div>
				</div>

				<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[1.1rem]'>
					{array.map((e, i) => (
						<RatedCard onClick={() => navigate('?service_id=1')} key={i} />
					))}
				</div>
			</div>
		</div>
	);
}
