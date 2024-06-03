import { nanoid } from 'nanoid';
import CustomersComponenet from 'src/app/components/page/Customers/ResponsiveSmallMedia/CustomersComponent';
import BrandsTable, { brands } from 'src/app/components/page/Products/Brands/BrandsTable';
import TopSectionBrandsTable from 'src/app/components/page/Products/Brands/TopSectionBrandsTable';
import { CopyIcon, AnalyticsIcon, OrdersIcon, RemoveIcon } from 'src/app/utils/icons';
export default function Barnds() {
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
			<div className='flex-col-top-section-pages '>
				{/*  top section */}
				<TopSectionBrandsTable />

				{/*  table  */}
				<BrandsTable settingMenus={settingMenus} />

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
