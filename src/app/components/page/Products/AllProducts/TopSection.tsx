import { Button } from 'src/app/components/optimized';

import { useTranslation } from 'react-i18next';
import { IoIosAddCircle } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import { nanoid } from 'nanoid';
import { getImageUrl } from 'src/app/utils';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { FaRegEdit } from 'react-icons/fa';
import { SiMicrosoftexcel } from 'react-icons/si';
import { FiUploadCloud } from 'react-icons/fi';
import ActionsComp from '../../../optimized/Buttons/ActionsComp';
import { MdDelete } from 'react-icons/md';
import PopoverComponenet from '../../../optimized/UiKits/Popover';
export default function TopSection({
	verticalCard,
	setVerticalCard,
}: {
	verticalCard: boolean;
	setVerticalCard: (e: boolean) => void;
}) {
	//  hooks
	const { t } = useTranslation();

	//  custom hook for select arrang item

	const { selectedOption, handleSelect } = useSelectBox();

	const dropdownMenu = [
		{
			id: nanoid(),
			title: 'Simple Product',
			describtion: 'You don’t need advanced options to fill',
			shipping: true,
		},
		{
			id: nanoid(),
			title: 'Configurable product',
			describtion: 'You need all options available',
			shipping: false,
		},
		{
			id: nanoid(),
			title: 'Virtual Product',
			describtion: 'Services, ebooks, Downloadable',
			shipping: false,
		},
		{
			id: nanoid(),
			title: 'Food',
			describtion: 'Food & Drinks have special way shipping',
			shipping: true,
		},
		{
			id: nanoid(),
			title: 'Bundle',
			describtion: 'Collection of related products',
			shipping: false,
		},
	];

	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
		{ id: nanoid(), text: 'SKU Ascending' },
		{ id: nanoid(), text: 'SKU Descending' },
		{ id: nanoid(), text: 'Price Low in first' },
		{ id: nanoid(), text: 'Price High in first' },
		{ id: nanoid(), text: 'Date Added' },
		{ id: nanoid(), text: 'Date modified' },
	];

	const ActionsMenus = [
		{ id: nanoid(), text: 'Bulk edit', icon: <FaRegEdit className='iconClass' /> },
		{ id: nanoid(), text: 'Export products', icon: <SiMicrosoftexcel className='iconClass' /> },
		{ id: nanoid(), text: 'Import products', icon: <FiUploadCloud className='iconClass' /> },
		{
			id: nanoid(),
			text: 'Delete all products',
			icon: <MdDelete className='text-[red]  text-[1.2rem]' />,
		},
	];

	const handelListAndGridImg = () => {
		return (
			<div className='flex-row-global gap-[.7rem]'>
				<img
					onClick={() => setVerticalCard(false)}
					src={getImageUrl(
						!verticalCard
							? 'images/AllProductsImg/listActive.svg'
							: 'images/AllProductsImg/listNotActive.svg',
					)}
					loading='lazy'
					alt='listImg'
					className='cursor-pointer'
				/>
				<img
					onClick={() => setVerticalCard(true)}
					src={getImageUrl(
						!verticalCard
							? 'images/AllProductsImg/gridNotActive.svg'
							: 'images/AllProductsImg/gridActive.svg',
					)}
					loading='lazy'
					alt='gridImg'
					className='cursor-pointer'
				/>
			</div>
		);
	};
	return (
		<div className='flex-col-top-section-pages'>
			<div className='topTable'>
				{/*  left dropdow */}

				<PopoverComponenet
					button={
						<Button variant='primary' LeftIcon={IoIosAddCircle} RightIcon={IoMdArrowDropdown}>
							{t('Add Product')}
						</Button>
					}
				>
					<div
						style={{ boxShadow: '0px 10px 16px 0px #0000000D' }}
						className='py-[.8rem] px-[.6rem] w-[20rem] h-[24rem] rounded-[.4rem] bg-white'
					>
						<div className=' flex flex-col gap-[1rem]'>
							{dropdownMenu?.map((e) => (
								<div className='flex flex-col gap-[.9rem]' key={e.id}>
									<div className='flex flex-col gap-[.2rem] cursor-pointer'>
										<div className='flex-row-global gap-[.4rem]'>
											<p className=' text-[.9rem] font-semibold'>{e.title}</p>
											{e.shipping && <img src={getImageUrl(`badges/shipped.svg`)} alt='status' />}
										</div>

										<p className='text-[.7rem]'>{e.describtion}</p>
									</div>
									<hr />
								</div>
							))}
						</div>
					</div>
				</PopoverComponenet>

				{/*  actions filter arrange,... */}
				<div className='flex-row-global  gap-[1.2rem]'>
					<ActionsComp
						filterMenus={sortMenus}
						sortMenus={sortMenus}
						ActionsMenus={ActionsMenus}
						selectedOption={selectedOption}
						handelSelect={handleSelect}
					/>

					{handelListAndGridImg()}
				</div>
			</div>
			<hr />
		</div>
	);
}
