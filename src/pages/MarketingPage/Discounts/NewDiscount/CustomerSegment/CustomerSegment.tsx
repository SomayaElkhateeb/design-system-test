import React, { useState } from 'react';
import { customerSegmentOptions } from '../comp/data';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import CustomerSegmentOptions from './comp/CustomerSegmentOptions';
import { useTranslation } from 'react-i18next';

const CustomerSegment: React.FC = () => {
	const { t } = useTranslation();
	const [selectedSegmentType, setSelectedSegmentType] = useState<string>('');

	return (
		<div className='bg-white w-full border border-constrained rounded-md p-[1rem] flex flex-col gap-[1rem]'>
			<h3 className='text-title font-semibold mb-2'>{t('Customer segment')}</h3>
			<section>
				<SingleChoiceChips
					options={customerSegmentOptions}
					selected={selectedSegmentType}
					setSelected={(option: string) => setSelectedSegmentType(option)}
				/>

				<CustomerSegmentOptions segmentOptions={selectedSegmentType} />
			</section>
		</div>
	);
};

export default CustomerSegment;
