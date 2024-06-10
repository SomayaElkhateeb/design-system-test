import { Address } from '../../..';

export default function AddressForm({ handleAddressForm }: { handleAddressForm: boolean }) {
	return (
		<div className='flex-col-top-section-pages gap-4 '>
			<div className='flex-col-top-section-pages gap-4'>
				<Address details={true} backBtn={handleAddressForm} />
			</div>
		</div>
	);
}
