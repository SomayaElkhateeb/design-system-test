import { Button, CheckBox, PaymentMethodAccordion } from 'src/app/components/optimized';
import usePayment from './usePayment';
import PaymentForm from './PaymentForm';

const checkboxLable = (
	<span className='flex'>
		I agree to&nbsp;
		<Button
			variant='linkBtn'
			//  onClick={}
		>
			Terms and Conditions
		</Button>
		,&nbsp;
		<Button
			variant='linkBtn'
			//  onClick={}
		>
			Privacy Policy
		</Button>
		, and&nbsp;
		<Button
			variant='linkBtn'
			//  onClick={}
		>
			Selling policy
		</Button>
		.
	</span>
);
const PaymentContainer = () => {
	// Payment Custom Hook
	const {
		errors,
		paymentData,
		agreeToTerms,
		isButtonDisabled,
		selectedPaymentMethod,
		paymentDataHandler,
		handleTermsCheckbox,
		handlePaymentMethodChange,
	} = usePayment();

	const onConfirmPurchase = (e) => {
		e.preventDefault();
		// if validatation is Ok
		// make the payment logic
		console.log(paymentData);
	};

	// Payment Methods Array
	const paymentMethods = [
		{ title: 'Credit/Debit Card', name: 'credit' },
		{ title: 'Apple Pay', name: 'applePay' },
		{ title: 'STC Pay', name: 'stcPay' },
	];

	return (
		<form className='bg-white border border-border-color rounded-lg px-4 py-6 w-[718px]'>
			<h2 className='mb-4 text-lg font-bold title'>Select payment method</h2>
			{/* Mapping on Payment Methods */}
			<div className='mb-4 space-y-4'>
				{paymentMethods.map((item, index) => (
					<PaymentMethodAccordion
						key={index}
						title={item.title}
						isOpen={selectedPaymentMethod === item.name}
						onToggle={() => handlePaymentMethodChange(item.name)}
					>
						<PaymentForm data={paymentData} onDataChange={paymentDataHandler} errors={errors} />
					</PaymentMethodAccordion>
				))}
			</div>
			{/*Terms and Conditions checkBox*/}
			<CheckBox label={checkboxLable} handleOnChange={handleTermsCheckbox} checked={agreeToTerms} />
			{/*Confirm Button*/}
			<div className='flex justify-end mt-4'>
				<Button onClick={onConfirmPurchase} disabled={isButtonDisabled} type='submit'>
					Confirm Purchase (SAR 50)
				</Button>
			</div>
		</form>
	);
};

export default PaymentContainer;
