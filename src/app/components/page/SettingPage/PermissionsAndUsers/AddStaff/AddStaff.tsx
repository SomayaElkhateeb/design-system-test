import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import useCustomHookAddStuff, { addStaffInterface } from './HookForAddStaff';
import Password from './Password';
import Staff from './Staff';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { AddUserSchema } from 'src/app/schema/settings/AddUserSchema';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useEffect } from 'react';
import { postNewUser, updateUser } from 'src/app/store/slices/settingsPage/users/usersAsyncThunks';
import { useNavigate } from 'react-router-dom';

export default function AddStuff() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	// custom hook
	const { handelDefaultValue } = useCustomHookAddStuff();

	// redux
	const dispatch = useAppDispatch();
	const { isLoadingAddOrUpdate, isLoading, error } = useAppSelector((state) => state.usersSettings);

	const handleSubmit = (values: addStaffInterface) => {
		console.log(values);

		
		const sendingData: addStaffInterface = { ...values };
		password
			? dispatch(postNewUser(sendingData)).then((promiseResponse) => {
					if ((promiseResponse.payload.code = 200)) {
						Navigate(-1);
					}
			  })
			: dispatch(updateUser(sendingData)).then((promiseResponse) => {
					if ((promiseResponse.payload.code = 200)) {
						navigate(-1);
					}
			  });
	};

	const { formStore, onSubmit } = useForm({
		// resolver: zodResolver(AddUserSchema),
		schema: AddUserSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const data = [{ id: 1, title: t('Activated') }];

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('add staff')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate}/>
				</SubHeader>
				<div className='custom_container custom-grid-parent'>
					<div className=' flex-col-global grid-left'>
						<Staff formStore={formStore} />
						<Password formStore={formStore} />
					</div>
					<div className='grid-right'>
						<QuickActions data={data} />
					</div>
				</div>
				<div className='flex-btn-end px-5'>
					<SubHeaderMobileBtns onSubmit={onSubmit} />
				</div>
			</form>
		</Form>
	);
}
