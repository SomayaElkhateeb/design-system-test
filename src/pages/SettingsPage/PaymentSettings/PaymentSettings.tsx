import { useTranslation } from 'react-i18next';
import { Button, SubHeader } from 'src/app/components/optimized';
// import DookanPay from './_comp/DookanPay';
import ManualPayment from './_comp/ManualPayment';
import PaymentProvidersCard from './_comp/PaymentProvidersCard';
import PaymentTable from './PaymentProviders/PaymentTable/PaymentTable';
import { IoIosAddCircle } from 'react-icons/io';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import { useNavigate } from 'react-router-dom';
import useResponsive from 'src/app/utils/hooks/useResponsive';

export default function PaymentSettings() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { xs } = useResponsive();

	return (
		<div className='flex-col-global'>
			<SubHeader title={t('Payment')} />
			<div className='custom_container flex-col-global gap-5 mt-2'>
				<div className='topTable '>
					{/* add customers button */}
					{!xs && (
						<Button
							variant='primary'
							LeftIcon={IoIosAddCircle}
							onClick={() => {
								navigate('add-Payment-Method');
							}}
						>
							{t('Add New Payment Method')}
						</Button>
					)}
				</div>
				<hr />

				
				{/* <div className='col-span-2 lg:col-span-1'>
				
				</div>
				<div className='col-span-2 lg:col-span-1'>
					<DookanPay />
				</div>
				<div className='col-span-2'>
					{/* <ManualPayment /> */}
				{/* </div>  */}
				{/* <SubHeader title={t('Third party payment providers')} /> */}

				<PaymentTable />
				{xs && <AddButtonMobile path='add-Payment-Method' />}
			</div>
		</div>
	);
}
