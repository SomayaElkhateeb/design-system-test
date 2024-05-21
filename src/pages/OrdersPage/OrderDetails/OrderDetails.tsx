import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import ContactCard from 'src/app/components/optimized/Cards/ContactCard';
import { CustomerNote, OrderHistory, OrderItems, OrderNo } from 'src/app/components/page';
import { contact } from 'src/pages/SettingsPage/data';
import { address, info } from './data';

export default function OrderDetails() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<div>
			<HeaderSettings
				variant='settingOrder'
				title='Order Details'
				onClick={() => navigate(-1)}
				btn1={{ onClick: () => console.log('Update Status') }}
				btn2={{ onClick: () => console.log('Print Invoice') }}
				btn3={{ onClick: () => console.log('More Options') }}
				btn4={{
					onClickPrev: () => console.log('Previous'),
					onClickNext: () => console.log('Next'),
				}}
			/>

			<div className='grid gap-5 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 p-5'>
				<div className='col-span-2'>
					{/* order No */}
					<OrderNo />
					{/* order items */}
					<OrderItems />
					{/* customer note */}
					<CustomerNote />
					{/* order history */}
					<OrderHistory />
				</div>
				<div className='col-span-1'>
					{/* customer */}
					<ContactCard title='Customer' data={contact} contacts={true} id={0} isEdit={true} />
					{/* address */}
					<ContactCard
						title='Address'
						data={address}
						contacts={false}
						id={0}
						isEdit={true}
						isLocation
					/>
					{/* checkout */}

					{/* info */}
					<ContactCard title='Additional Info' data={info} contacts={false} id={0} />
					{/* update order */}
				</div>
			</div>
		</div>
	);
}
