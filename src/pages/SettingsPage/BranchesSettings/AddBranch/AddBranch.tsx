import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import BranchAppointments from './BranchAppointments';
import BranchInfo from './BranchInfo';
import useAddBranchForm, { BranchesType } from './_hook/useAddBranchForm';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getBranchesShow, postBranch, putBranch } from 'src/app/store/slices/settingsPage/branches/branchesAsyncThunks';

export default function AddBranch() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	// redux
	const dispatch = useAppDispatch();
	const { isLoadingAddOrUpdate, branch } = useAppSelector((state) => state.branchSettings);

	const handleSubmit = (values: BranchesType) => {
		console.log(values);
		id
			?
			dispatch(putBranch({ data: values, id })).then((promiseResponse) => {
				if ((promiseResponse.payload.code = 200)) {
					navigate(-1);
				}
			})
			:
			dispatch(postBranch(values)).then((promiseResponse) => {
				if ((promiseResponse.payload.code = 200)) {
					navigate(-1);
				}
			});
	};

	// custom hook
	const { branchSettingsSchema, handelDefaultValue } = useAddBranchForm();

	const { formStore, onSubmit } = useForm({
		schema: branchSettingsSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	useMemo(() => {
		if (id) {
			dispatch(getBranchesShow(id));
		}
	}, [id]);

	const data: { name: Path<BranchesType>; label: string; enable: boolean }[] = [
		{
			name: 'main_branch',
			label: t('Assign as main location'),
			enable: true,
		},
		{
			name: 'show_in_footer',
			label: t('Show on footer'),
			enable: true,
		},
		{
			name: 'pick_up',
			label: t('Available for pickup'),
			enable: true,
		},
	];

	useMemo(() => {
		if (id && branch) {
			formStore.setValue('en.name', branch.en?.name || '');
			formStore.setValue('en.address', branch.en?.address || '');
			formStore.setValue('en.street', branch.en?.street || '');
			formStore.setValue('en.area', branch.en?.area || '');
			formStore.setValue('en.city', branch.en?.city || '');
			formStore.setValue('en.state', branch.en?.state || '');
			formStore.setValue('en.country', branch.en?.country || '');
			formStore.setValue('en.building', branch.en?.building || '');
			formStore.setValue('en.landmark', branch.en?.landmark || '');

			formStore.setValue('ar.name', branch.ar?.name || '');
			formStore.setValue('ar.address', branch.ar?.address || '');
			formStore.setValue('ar.street', branch.ar?.street || '');
			formStore.setValue('ar.area', branch.ar?.area || '');
			formStore.setValue('ar.city', branch.ar?.city || '');
			formStore.setValue('ar.state', branch.ar?.state || '');
			formStore.setValue('ar.country', branch.ar?.country || '');
			formStore.setValue('ar.building', branch.ar?.building || '');
			formStore.setValue('ar.landmark', branch.ar?.landmark || '');

			formStore.setValue('type', branch.type || '');
			formStore.setValue('code', branch.code || '');
			formStore.setValue('phone', branch.phone || '');
			formStore.setValue('latitude', branch.latitude || '');
			formStore.setValue('longitude', branch.longitude || '');
			formStore.setValue('work_time', branch.work_time || 0);
			formStore.setValue('opening_days', branch.opening_days || []);

			formStore.setValue('main_branch', branch.main_branch ? 1 : 0);
			formStore.setValue('show_in_footer', branch.show_in_footer ? 1 : 0);
			formStore.setValue('pick_up', branch.pick_up ? 1 : 0);
		}
	}, [id, branch]);



	// actions
	useEffect(() => {
		formStore.setValue(
			'main_branch',
			formStore.watch('main_branch') ? 1 : 0,
		);
	}, [formStore.watch('main_branch')]);
	useEffect(() => {
		formStore.setValue(
			'show_in_footer',
			formStore.watch('show_in_footer') ? 1 : 0,
		);
	}, [formStore.watch('show_in_footer')]);
	useEffect(() => {
		formStore.setValue(
			'pick_up',
			formStore.watch('pick_up') ? 1 : 0,
		);
	}, [formStore.watch('pick_up')]);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('Add Branch')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate} />
				</SubHeader>
				<div className='custom_container pb-3 custom-grid-parent'>
					<div className='grid-left'>
						<div className='flex flex-col gap-4'>
							<BranchInfo formStore={formStore} />
							<BranchAppointments formStore={formStore} />
						</div>
					</div>

					<div className='grid-right'>
						<QuickActions<BranchesType>
							formStore={formStore}
							data={data}
							title={t('Quick actions')}
						/>
					</div>
				</div>
				<SubHeaderMobileBtns onSubmit={onSubmit} />
			</form>
		</Form>
	);
}
