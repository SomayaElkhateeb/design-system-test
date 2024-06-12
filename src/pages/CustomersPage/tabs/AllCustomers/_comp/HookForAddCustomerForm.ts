export default function useCustomHookAddCustomerForm() {
	const handelDefaultValue = () => {
		return {
			humanType: 'Male',
			fullName: '',
			email: '',
			PhoneNumber: '',
			groupMeta: [],
			fullNameAddress: '',
			countryName: '',
			cityName: '',
			area: '',
			street: '',
			building: '',
			landmark: '',
			AddressPhoneNumber: '',
			emailSubescribe: false,
		};
	};
	return {
		handelDefaultValue,
	};
}
