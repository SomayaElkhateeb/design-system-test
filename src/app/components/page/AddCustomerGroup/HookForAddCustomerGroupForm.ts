export default function useCustomHookAddCustomerGroupForm() {

	// ////////////////////////
	const handelDefaultValue = () => {
		return {
			groupName: '',
			description: '',
			active: false,
			Customers: [],
		};
	};
	
	return {
		
		handelDefaultValue
	}
}