export default function useCustomHookAddCustomerGroupForm() {

	// ////////////////////////
	const handelDefaultValue = () => {
		return {
			code:'',
			name: '',
			description: '',
			status: false,
			customers: [],
		};
	};

	return {

		handelDefaultValue
	}
}