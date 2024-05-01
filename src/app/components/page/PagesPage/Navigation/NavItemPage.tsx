import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';

import { Button, HeaderSettings } from 'src/app/components/optimized';
import LegalPageParentCard from '../PagesSection/LegalPageParentCard';
import { EditIcon } from 'src/app/utils/icons';
import { MdDelete } from 'react-icons/md';
import { getImageUrl } from 'src/app/utils';

export default function NavItemPage() {
	//  hooks
	const { t } = useTranslation();

	//  dummy array
	const array = [...Array(2)];

	return (
		<div className='flex-col-top-section-pages gap-[2rem]'>
			{/*  top setion */}
			<HeaderSettings title='Main menu' variant='customerInfowithIcons'>
				<Button variant='primary' LeftIcon={IoIosAddCircle}>
					{t('Add new item')}
				</Button>
			</HeaderSettings>
			{/*  bottom Section */}
			<div className='container mx-auto'>
				<div className='w-[60%]'>
					<LegalPageParentCard title={t('Items')}>
						<div className='flex-col-top-section-pages'>
							{array?.map((e, i) => (
								<div
									key={i}
									className='rounded  border  w-ful flex  justify-between  p-[.8rem] bg-white'
								>
									<div className='flex-row-global gap-[.6rem]'>
										<img loading='lazy' alt='img' src={getImageUrl('pagesPage/navitem.svg')} />
										<p className='text-[.8rem] text-pri-dark'>About</p>
									</div>
									<div className='flex-row-global gap-[1rem]'>
										<EditIcon className='fill-subtitle cursor-pointer' />
										<MdDelete className='text-[red] text-[1.2rem] cursor-pointer' />
									</div>
								</div>
							))}
						</div>
					</LegalPageParentCard>
				</div>
			</div>
		</div>
	);
}
