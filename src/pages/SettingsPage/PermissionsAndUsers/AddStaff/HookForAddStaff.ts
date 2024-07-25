
export interface addStaffInterface {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
	role_id: string;
	status: number;
}

export default function useCustomHookAddStaff() {
	const handelDefaultValue = () => {
		return {
			name: '',
			email: '',
			password: '',
			password_confirmation: '',
			role_id: '',
			status: 0,
		};
	};

	return {
		handelDefaultValue,
	};
}
