import { useTranslation } from 'react-i18next';
import { CiUser } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';
import { FiEdit, FiPhoneCall } from 'react-icons/fi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoIosAddCircle } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderSettings } from 'src/app/components/optimized';
import EditButtonMobile from 'src/app/components/optimized/Buttons/EditButtonMobile';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import CustomerData from './CustomerData';

export default function CustomerInfo() {
	// hooks
	const { id } = useParams();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { xs } = useResponsive();
	const array = [...Array(2)];

	const customerData = [
		{
			data: 'Mohamed Hasan',
			icon: <CiUser className='text-hint' />,
		},
		{
			data: 'web@artisan.com.sa (has active email subscribtion)',
			icon: <MdOutlineEmail className='text-hint' />,
		},
		{
			data: '966502466733',
			icon: <FiPhoneCall className='text-hint' />,
		},
	];

	const handelNavigateEdit = () => {
		navigate(`/customers/addCustomer?id=${id}`);
	};
	return (
		<div >
			<div className='gap-[1.6rem] flex-col-top-section-pages'>
				{/*  top section */}
				<HeaderSettings variant='customerInfowithIcons' title={t('Customer Info')}>
					<div className=' flex  items-center gap-[.8rem] '>
						{!xs && <FaRegEdit className='cursor-pointer' onClick={handelNavigateEdit} />}
						<HiOutlineDotsHorizontal className='cursor-pointer' />
					</div>
				</HeaderSettings>

				{/*  customer section */}
				<div className='custom_container gap-[1.6rem] flex-col-top-section-pages'>
					<div className='customer-border  gap-[0.8rem]'>
						<p className='title px-[1.2rem]'>{t('Customer')}</p>
						<hr />
						<div className=' flex-col-top-section-pages gap-[.6rem] px-[1.2rem]'>
							{customerData?.map((el, i) => (
								<CustomerData key={i} data={el.data} icon={el.icon} />
							))}
						</div>
					</div>

					{/*  addresse section */}

					<div className='customer-border gap-[0.8rem]'>
						<div className='flex-row-global justify-between px-[1.2rem]'>
							<p className='title'>{t('Addresses')}</p>
							<div
								onClick={() => navigate('addNewAddresse')}
								className='flex-row-global gap-[.4rem] cursor-pointer'
							>
								<IoIosAddCircle />
								<p className='title'>{t('Add new address')}</p>
							</div>
						</div>

						<hr />

						<div className='w-[97%] mx-auto customer-border '>
							<div className='flex-row-global-items-start justify-between   px-[1.2rem]'>
								<p className='text-[0.7rem]'>
									Meed Market, 15 Haroon Al Rashied st.
									<br />
									Al Jazera, Riyadh <br />
									<span className='opacity-60'>Saudi Arabia</span>
									<br />
									+96841564566
								</p>
								<div className='flex-col-top-section-pages items-end gap-[2rem]'>
									<div className='flex-row-global gap-[1.2rem]'>
										<RiDeleteBin6Line className='cursor-pointer' />
										<FiEdit className='cursor-pointer' />
									</div>
									<div className='flex-row-global gap-[.4rem] cursor-pointer'>
										<IoLocationOutline />
										<p className='title'>{t('Show on map')}</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/*  orders section */}

					<div className='customer-border gap-[0.8rem]'>
						<div className='flex-row-global justify-between px-[1.2rem]'>
							<p className='title '>{t('Orders')}</p>
							<div className='flex-row-global gap-[.4rem] cursor-pointer'>
								<IoIosAddCircle />
								<p onClick={() => navigate('/order/addOrder')} className='title'>
									{t('Add new order')}
								</p>
							</div>
						</div>

						<hr />
						<div className='flex flex-col gap-[1rem]'>
							{array?.map((e, i) => (
								<div className='flex flex-col gap-[1rem]' key={i}>
									<div className='flex-row-global-items-start justify-between   px-[1.2rem]'>
										<div className='flex flex-col gap-[0.5rem]'>
											<p className='text-[0.8rem]  font-semibold text-title'>
												#8965742 <span className='font-normal'>Processing</span>
											</p>
											<p className='text-[.7rem] opacity-60' dir='ltr'>
												6 Apr 2020
											</p>
										</div>
										<div className='flex flex-col items-end gap-[0.5rem]'>
											<HiOutlineDotsHorizontal />
											<p className='text-[0.8rem] '>SAR 1000</p>
										</div>
									</div>
									<hr />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<EditButtonMobile onClick={handelNavigateEdit} />
		</div>
	);
}
