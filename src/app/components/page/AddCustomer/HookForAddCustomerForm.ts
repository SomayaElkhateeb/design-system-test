export default function useCustomHookAddCustomerForm() {
	const handelDefaultValue = () => {
		return {
			humanType: 'Male',
			fullName: '',
			email: '',
			PhoneNumber: '',
			groupMeta: [],

			emailSubescribe: false,
		};
	};
	return {
		handelDefaultValue,
	};
}
