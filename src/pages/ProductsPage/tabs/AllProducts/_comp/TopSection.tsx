import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegEdit } from 'react-icons/fa';
import { FiUploadCloud } from 'react-icons/fi';
import { IoIosAddCircle, IoMdArrowDropdown } from 'react-icons/io';
import { SiMicrosoftexcel } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { GlobalDialog } from 'src/app/components/shared';
import { Button } from 'src/app/components/optimized';
import ActionsComp from 'src/app/components/optimized/Buttons/ActionsComp';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import PopoverComponenet from 'src/app/components/optimized/UiKits/Popover';
import FilterOrdersComponent from 'src/app/components/page/Orders/FilterOrder/FilterOrdersComponent';
import { getImageUrl } from 'src/app/utils';
import { useOpenFilterDrawer } from 'src/app/utils/hooks/CustomHookOpenDrawer';
import { LiaTrashAlt } from 'react-icons/lia';
import { SimpleProductForm } from '../../_comp';

export default function TopSection({
	verticalCard,
	setVerticalCard,
}: {
	verticalCard: boolean;
	setVerticalCard: (e: boolean) => void;
}) {
	//  hooks
	const { t } = useTranslation();

	//  custom hook
	const { HandelopenDrawer, openDrawer, HandelCloseDrawer } = useOpenFilterDrawer();
	const { selectedOption, handleSelect } = useSelectBox();
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	const handleClose = (status: boolean) => {
		setOpenDialog(status);
	};

	const dialogStyle = {
		width: { lg: '1150px', md: '600px', xs: '375px' },
		// height: { md: '500px', xs: '300px' },
	};
	const dropdownMenu = [
		{
			id: nanoid(),
			title: 'Simple Product',
			describtion: "You don't need advanced options to fill",
			shipping: true,
			to: '/products/new/simple',
		},
		{
			id: nanoid(),
			title: 'Configurable product',
			describtion: 'You need all options available',
			shipping: false,
			to: '/products/new/configurable',
		},
		{
			id: nanoid(),
			title: 'Virtual Product',
			describtion: 'Services, ebooks, Downloadable',
			shipping: false,
			to: '/products/new/virtual',
		},
		{
			id: nanoid(),
			title: 'Food',
			describtion: 'Food & Drinks have special way shipping',
			shipping: true,
			to: '/products/new/food',
		},
		{
			id: nanoid(),
			title: 'Bundle',
			describtion: 'Collection of related products',
			shipping: false,
			to: '/products/new/bundle',
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
			icon: <LiaTrashAlt size='28' className='fill-error' />,
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
		<>
			<div className='flex-col-global'>
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
									<Link
										className='flex flex-col gap-[.9rem]'
										key={e.id}
										to={e.to == '/products/new/simple' ? '' : e.to}
										onClick={e.to == '/products/new/simple' ? () => setOpenDialog(true) : () => {}}
									>
										<div className='flex flex-col gap-[.2rem] cursor-pointer'>
											<div className='flex-row-global gap-[.4rem]'>
												<p className=' text-[.9rem] font-semibold'>{e.title}</p>
												{e.shipping && <img src={getImageUrl(`badges/shipped.svg`)} alt='status' />}
											</div>

											<p className='text-[.7rem]'>{e.describtion}</p>
										</div>
										<hr />
									</Link>
								))}
							</div>
						</div>
					</PopoverComponenet>

					<GlobalDialog
						openDialog={openDialog}
						handleClose={() => handleClose(false)}
						style={dialogStyle}
					>
						<SimpleProductForm />
					</GlobalDialog>

					{/*  actions filter arrange,... */}
					<div className='flex-row-global  gap-[1.2rem]'>
						<ActionsComp
							HandelopenDrawer={HandelopenDrawer}
							filter
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

			{/* open filter drawer */}
			{openDrawer && (
				<FilterOrdersComponent openDrawer={openDrawer} HandelCloseDrawer={HandelCloseDrawer} />
			)}
		</>
	);
}
