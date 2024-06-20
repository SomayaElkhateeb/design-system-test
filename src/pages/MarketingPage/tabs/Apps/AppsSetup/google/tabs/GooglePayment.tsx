import { useState } from 'react';
import { MultiChoiceChips, SetupCard } from 'src/app/components/optimized';
import PopupProceed from 'src/app/components/optimized/Popups/PopupProceed';
import { PagesIcon, PaymentIcon, PhoneIcon } from 'src/app/utils/icons';

interface PaymentMethod {
	title: string;
	description: string;
	buttonText: string;
}

interface GooglePaymentProps {
	data: {
		title: string;
		description: string;
		method?: PaymentMethod[];
	};
}

const GooglePayment: React.FC<GooglePaymentProps> = ({ data }) => {
	const [isConfirm, setIsConfirm] = useState(false);
	const theOptions = ['Business address', 'Email address', 'Phone number'];
	const [options, setOptions] = useState<string[]>([]);

	const iconMap = {
		Payment: PaymentIcon,
		Contact: PhoneIcon,
		Pages: PagesIcon,
	};

	return (
		<>
			<div className='flex flex-col justify-between'>
				<p>{data.description}</p>
				<div className='flex gap-5 mt-5'>
					{data &&
						data.method?.map((item, index) => (
							<SetupCard
								key={index}
								title={item.title}
								description={item.description}
								buttonText={item.buttonText}
								Icon={iconMap[item.title]}
								onButtonClick={() => (item.title === 'Contact' ? setIsConfirm(true) : null)}
							/>
						))}
				</div>
			</div>

			<PopupProceed
				isOpen={isConfirm}
				title='Contacts'
				subTitle='Confirm you have 2 contact methods on your online store'
				proceedButton='Confirm'
				onClose={() => setIsConfirm(false)}
				onProceed={() => console.log(false)}
			>
				<div>
					<p className='mt-5'>
						Google requires your contact information to be visible on your online store, before the
						checkout, so customers can reach you.{' '}
						<span className='cursor-pointer text-primary'>View our tutorial</span> on how to do this
					</p>
					<p className='mt-6'>Select the 2 contact methods added:</p>

					<MultiChoiceChips options={theOptions} setSelected={setOptions} selected={options} />
				</div>
			</PopupProceed>
		</>
	);
};

export default GooglePayment;
