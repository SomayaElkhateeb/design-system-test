import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import NewOwner from './NewOwner';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { PostNewOwner } from 'src/app/store/slices/settingsPage/users/usersAsyncThunks';
import { useNavigate } from 'react-router-dom';
import { AddOwnerSchema } from 'src/app/schema/settings/AddOwnerSchema';
import { useEffect } from 'react';

export interface addOwnerInterface {
	name: string;
	email: string;
	password?: string;
	password_confirmation?: string;
	role_id: string;
	status?: number;
}

export const newOwnerValue = () => {
	return {
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
		role_id: '',
		status: 0,
	};
};

export default function TransferOwnership() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	// redux
	const dispatch = useAppDispatch();

	const { isLoadingAddOrUpdate, newOwner } = useAppSelector(
		(state) => state.usersSettings,
	);



	const { formStore, onSubmit } = useForm({
		schema: AddOwnerSchema,
		handleSubmit: (values: addOwnerInterface) => {
			const formData = new FormData();

			formData.append('name', values.name);
			formData.append('email', values.email);
			formData.append('password', values.password);
			formData.append('password_confirmation', values.password_confirmation);
			formData.append('role_id', values.role_id);
			formData.append('status', values.status);

			console.log("values", values)
			dispatch(PostNewOwner(formData)).then((promiseResponse) => {
				if ((promiseResponse.payload.code = 200)) {
					navigate(-1);
				}
			});

		},
		defaultValues: newOwnerValue(),
	});

	useEffect(() => {
		formStore.setValue('status', formStore.watch('status') ? 1 : 0);
	}, [formStore.watch('status')]);

	
	useEffect(() => {
		if (newOwner) {
			formStore.setValue('name', newOwner.name);
			formStore.setValue('email', newOwner.email);
			formStore.setValue('password', newOwner.password);
			formStore.setValue('password_confirmation', newOwner.password_confirmation);
			formStore.setValue('role_id', newOwner.role_id);
			newOwner?.status > 0 ? formStore.setValue('status', 1) : formStore.setValue('status', 0);
		}
	}, [newOwner, formStore]);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global gap-5 h-screen'>
				<SubHeader title={t('Transfer Ownership')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} />
				</SubHeader>
				<div className='custom-grid-parent custom_container'>
					<div className=' flex-col-global gap-5 grid-left'>
						<NewOwner formStore={formStore} />
						<SubHeaderMobileBtns onSubmit={onSubmit} />
					</div>
				</div>
			</form>
		</Form>
	);
}
