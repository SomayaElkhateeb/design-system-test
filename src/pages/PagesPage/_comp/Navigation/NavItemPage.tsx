import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';
import { Button, SubHeader } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { EditIcon, RemoveIcon } from 'src/app/utils/icons';

import AddNavItemDialog from './_comp/AddNavItemDialog';
import LegalPageParentCard from '../PagesSection/LegalPageParentCard';

export default function NavItemPage() {
	//  hooks
	const [openDialog, setOpenDialog] = useState(false);
	const { t } = useTranslation();

	//  dummy array
	const array = [...Array(2)];

	const handelclose = () => {
		setOpenDialog(false);
	};

	//   style of dialog
	const style = {
		height: { md: '21.5rem', xs: '15.5rem' },

		width: { md: '35.5rem', xs: '20.8rem' },
	};

	return (
		<>
			<div className='flex-col-top-section-pages gap-[2rem]'>
				{/*  top setion */}
				<SubHeader title={t('Main menu')}>
					<Button onClick={() => setOpenDialog(true)} variant='primary' LeftIcon={IoIosAddCircle}>
						{t('Add new item')}
					</Button>
				</SubHeader>
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
											<RemoveIcon className='fill-error' />,
										</div>
									</div>
								))}
							</div>
						</LegalPageParentCard>
					</div>
				</div>
			</div>

			{/*  add nav dialog */}
			<AddNavItemDialog openDialog={openDialog} handelclose={handelclose} style={style} />
		</>
	);
}
