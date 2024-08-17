import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { useEffect, useMemo } from 'react';
import FamilyInfo from './FamilyInfo';
import AddGroups from './AddGroups';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getAttributeShow, postAttribute, postOption, putAttribute } from 'src/app/store/slices/Attributes/Attribute/attributeAsyncThunks';
import useCustomHookAttributeFamily, { IAddAttributeFamilies } from '../_hook/HookAddAttributeFamilies';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';

const AttributeFamilyForm = () => {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	// custom hook
	const { handelDefaultValue, AttributeFamilySchema } = useCustomHookAttributeFamily();

	// redux
	const dispatch = useAppDispatch();
	const { isLoadingAddOrUpdate, attributeShow } = useAppSelector((state) => state.attributesProducts);

	const handleSubmit = (values: IAddAttributeFamilies) => {
		console.log(values)
		// id
		// 	?
		// 	dispatch(putAttribute({ data: values, id })).then((promiseResponse) => {
		// 		if ((promiseResponse.payload.code = 200)) {
		// 			navigate(-1);
		// 		}
		// 	})
		// 	:
		// 	dispatch(postAttribute(values)).then((promiseResponse) => {
		// 		if (promiseResponse.payload.code === 200) {
		// 			if (values.attribute_groups && values.attribute_groups.length > 0) {
		// 				values.attribute_groups.forEach((group) => {
		// 					const groupPayload = {
		// 						position: promiseResponse.payload.data.position,
		// 						...group,
		// 					};
		// 					dispatch(postOption(groupPayload));
		// 				});
		// 			}
		// 			navigate(-1);
		// 		}
		// 	});
	};


	const { formStore, onSubmit } = useForm({
		schema: AttributeFamilySchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	///////////////////////////////////////////////////////

	// useMemo(() => {
	// 	if (id && attributeShow) {
	// 		const setField = (fieldName, value) => {
	// 			if (value !== undefined && value !== null) {
	// 				formStore.setValue(fieldName, value);
	// 			}
	// 		};

	// 		setField('code', attributeShow.code);
	// 		setField('type', attributeShow.type);
	// 		setField('admin_name', attributeShow.admin_name);
	// 		setField('en.name', attributeShow?.en?.name);


	// 		// Handle options
	// 		if (attributeShow?.options) {
	// 			setField('options.admin_name', attributeShow.options.admin_name);
	// 			setField('options.en.label', attributeShow.options.en.label);
	// 			setField('options.ar.label', attributeShow.options.ar.label);
	// 			setField('options.swatch_value', attributeShow.options.swatch_value);
	// 			setField('options.sort_order', attributeShow.options.sort_order > 0 ? 1 : 0);
	// 		}

	// 		setField('is_required', attributeShow.is_required > 0 ? 1 : 0);

	// 	}
	// }, [id, attributeShow]);


	useEffect(() => {
		formStore.setValue('is_required', formStore.watch('is_required') ? 1 : 0);
	}, [formStore.watch('is_required')]);

	useMemo(() => {
		if (id) {
			dispatch(getAttributeShow(id));
		}
	}, [id]);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('Add Family')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate} />
				</SubHeader>
				<div className='custom_container custom-grid-parent'>
					<div className=' flex-col-global grid-left'>
						<FamilyInfo formStore={formStore} />

						<AddGroups formStore={formStore} label={t('Add Attribute')} />
					</div>
					{/* actions */}
					<div className='global-cards h-fit w-ful'>
						<h3 className='title'>{t('Quick actions')}</h3>
						<div className="flex gap-4">
							<FormSwitchField<IAddAttributeFamilies>
								formStore={formStore}
								name='attribute_groups.is_user_defined'
								enable
							/>
							<p>{t('User defined')}</p>
						</div>
					</div>
				</div>
				<div className='flex-btn-end px-5'>
					<SubHeaderMobileBtns onSubmit={onSubmit} />
				</div>
			</form>
		</Form>
	);
}

export default AttributeFamilyForm
