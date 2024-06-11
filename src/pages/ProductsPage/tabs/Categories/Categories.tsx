import { nanoid } from 'nanoid';
import { AnalyticsIcon, CopyIcon, OrdersIcon, RemoveIcon } from 'src/app/utils/icons';
import CustomersComponenet from 'src/pages/CustomersPage/_comp/ResponsiveSmallMedia/CustomersComponent';
import { brands } from 'src/pages/ProductsPage/tabs/Barnds/_comp/BrandsTable';
import TopSectionCategoriesTable from './_comp/TopSectionCategoriesTable';
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
			<div className='flex-col-top-section-pages'>
				{/*  top section */}
				<TopSectionCategoriesTable />

				{/*  case of small media */}
				<div className='flex-col-top-section-pages sm:hidden'>
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
