import CustomersComponenet from 'src/pages/CustomersPage/_comp/ResponsiveSmallMedia/CustomersComponent';
import { brands } from 'src/app/components/page/Products/Brands/BrandsTable';
import TopSectionCategoriesTable from 'src/app/components/page/Products/Categories/TopSectionCategoriesTable';
import { CopyIcon, AnalyticsIcon, OrdersIcon, RemoveIcon } from 'src/app/utils/icons';
import { nanoid } from 'nanoid';
export default function Categories() {
	const settingMenus = [
		{ id: nanoid(), text: 'Copy brand link', icon: <CopyIcon className='fill-subtitle' /> },
		{ id: nanoid(), text: 'brand report', icon: <AnalyticsIcon className='fill-subtitle' /> },
		{ id: nanoid(), text: 'brand products', icon: <OrdersIcon className='fill-subtitle' /> },

		{
			id: nanoid(),
			text: 'Delete brand',
			icon: <RemoveIcon className='fill-error' />,
		},
	];
	return (
		<div className='custom_container'>
			<div className='flex-col-global'>
				{/*  top section */}
				<TopSectionCategoriesTable />

				{/*  case of small media */}
				<div className='flex-col-global sm:hidden'>
					{brands?.map((e, i) => (
						<CustomersComponenet
							noAvatar
							id={e.id}
							settingMenus={settingMenus}
							key={i}
							firstName={e.title}
							email={e.describtion}
							imageUrl={e.img}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
