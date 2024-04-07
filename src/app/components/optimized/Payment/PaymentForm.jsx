// Done refactoring to type
import { TooltipIcon } from 'src/app/utils/icons';
import { InputRow } from '..';
import { getImageUrl } from 'src/app/utils';

/**
 * @param {{
 *  data: {
 *   quantity: string;
 *   expiryDate: string;
 *   cvv: string;
 *  };
 *  onDataChange: (fieldName: string, value: string) => void;
 *  errors: {
 *   quantity?: string;
 *   expiryDate?: string;
 *   cvv?: string;
 *  };
 * }} props
 */
export default function PaymentForm({ data, onDataChange, errors }) {
	/**
	 * @param {string} fieldName
	 * @param {string} value
	 */
	function handleInputChange(fieldName, value) {
		onDataChange(fieldName, value); // Call the callback function with field name and value
	}

	return (
		<section>
			<div className='grid grid-cols-4 gap-6'>
				<div className='col-span-2'>
					<InputRow
						label={QuantityLabel}
						error={errors.quantity}
						// value={data.quantity}
						handleOnChange={(value) => handleInputChange('quantity', value)}
					/>
				</div>
				<div className='col-span-1'>
					<InputRow
						label='Expiry date'
						error={errors.expiryDate}
						// value={data.expiryDate}
						handleOnChange={(value) => handleInputChange('expiryDate', value)}
					/>
				</div>
				<div className='col-span-1'>
					<InputRow
						label={CvvLabel}
						error={errors.cvv}
						// value={data.cvv}
						handleOnChange={(value) => handleInputChange('cvv', value)}
					/>
				</div>
			</div>
		</section>
	);
}

function CreditTransactions() {
	return (
		<div className='flex gap-1'>
			<img src={getImageUrl('companies/mada.svg')} className='w-5 h-4' />
			<img src={getImageUrl('companies/visa.svg')} className='w-5 h-4' />
			<img src={getImageUrl('companies/amex.svg')} className='w-5 h-4' />
			<img src={getImageUrl('companies/masterCard.svg')} className='w-5 h-4' />
		</div>
	);
}

const CvvLabel = (
	<span className='flex'>
		CVV&nbsp;
		<TooltipIcon className='fill-secondary' />
	</span>
);

const QuantityLabel = (
	<span className='flex justify-between'>
		<p>Quantity</p>
		<CreditTransactions />
	</span>
);
