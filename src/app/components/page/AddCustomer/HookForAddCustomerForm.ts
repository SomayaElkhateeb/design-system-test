export default function useCustomHookAddCustomerForm() {
	const handelDefaultValue = () => {
		return {
			humanType: 'Male',
			fullName: '',
			email: '',
			PhoneNumber: '',
			groupMeta: [],
			// fullNameAddresse: '',
			// countryName: '',
			// cityName: '',
			// area: '',
			// street: '',
			// building: '',
			// landmark: '',
			// addressePhoneNumber: '',
			emailSubescribe: false,
		};
	};
	return {
		handelDefaultValue,
	};
}
