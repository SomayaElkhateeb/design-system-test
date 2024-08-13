import { useTranslation } from 'react-i18next';
import { Button, SubHeader } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { useEffect, useMemo, useState } from 'react';
import useCustomHookAddAttribute, { addAttributeInterface } from '../_hook/HookAddAttributes';
import AttributeInfo from './AttributeInfo';
import { AddFillIcon } from 'src/app/utils/icons';
import OptionFields from './OptionFields';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getAttributeShow, postAttribute, postOption, putAttribute } from 'src/app/store/slices/Attributes/Attribute/attributeAsyncThunks';

const AttributesForm = () => {
	//  hooks
	const [addOption, setAddOption] = useState(false);
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	// custom hook
	const { handelDefaultValue, AddAttributeSchema } = useCustomHookAddAttribute();

	// redux
	const dispatch = useAppDispatch();
	const { isLoadingAddOrUpdate, attributeShow } = useAppSelector((state) => state.attributesProducts);

	const handleSubmit = (values: addAttributeInterface) => {
		console.log(values)
		id
			?
			dispatch(putAttribute({ data: values, id })).then((promiseResponse) => {
				if ((promiseResponse.payload.code = 200)) {
					navigate(-1);
				}
			})
			:
			dispatch(postAttribute(values)).then((promiseResponse) => {
				if (promiseResponse.payload.code === 200) {
					if (values.options && values.options.length > 0) {
						values.options.forEach((option) => {
							const optionPayload = {
								attribute_id: promiseResponse.payload.data.id,
								...option,
							};
							dispatch(postOption(optionPayload));
						});
					}
					navigate(-1);
				}
			});
	};


	const { formStore, onSubmit } = useForm({
		schema: AddAttributeSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	///////////////////////////////////////////////////////

	useMemo(() => {
		if (id && attributeShow) {
			const setField = (fieldName, value) => {
				if (value !== undefined && value !== null) {
					formStore.setValue(fieldName, value);
				}
			};

			setField('code', attributeShow.code);
			setField('type', attributeShow.type);
			setField('admin_name', attributeShow.admin_name);
			setField('en.name', attributeShow?.en?.name);
			setField('ar.name', attributeShow?.ar?.name);
			setField('swatch_type', attributeShow.swatch_type);
			setField('default-null-option', attributeShow['default-null-option']);

			// Handle options
			if (attributeShow?.options) {
				setField('options.admin_name', attributeShow.options.admin_name);
				setField('options.en.label', attributeShow.options.en.label);
				setField('options.ar.label', attributeShow.options.ar.label);
				setField('options.swatch_value', attributeShow.options.swatch_value);
				setField('options.sort_order', attributeShow.options.sort_order > 0 ? 1 : 0);
			}

			// Handle boolean fields
			setField('is_required', attributeShow.is_required > 0 ? 1 : 0);
			setField('is_unique', attributeShow.is_unique > 0 ? 1 : 0);
			setField('validation', attributeShow.validation > 0 ? 1 : 0);
			setField('value_per_locale', attributeShow.value_per_locale > 0 ? 1 : 0);
			setField('value_per_channel', attributeShow.value_per_channel > 0 ? 1 : 0);
			setField('is_filterable', attributeShow.is_filterable > 0 ? 1 : 0);
			setField('is_configurable', attributeShow.is_configurable > 0 ? 1 : 0);
			setField('is_visible_on_front', attributeShow.is_visible_on_front > 0 ? 1 : 0);
			setField('use_in_flat', attributeShow.use_in_flat > 0 ? 1 : 0);
			setField('is_comparable', attributeShow.is_comparable > 0 ? 1 : 0);
		}
	}, [id, attributeShow]);


	////////////////////////////////////////  ACTIONS //////////////////////////////////
	useEffect(() => {
		formStore.setValue('is_required', formStore.watch('is_required') ? 1 : 0);
	}, [formStore.watch('is_required')]);

	useEffect(() => {
		formStore.setValue('is_unique', formStore.watch('is_unique') ? 1 : 0);
	}, [formStore.watch('is_unique')]);

	useEffect(() => {
		formStore.setValue('validation', formStore.watch('validation') ? 1 : 0);
	}, [formStore.watch('validation')]);

	useEffect(() => {
		formStore.setValue('value_per_locale', formStore.watch('value_per_locale') ? 1 : 0);
	}, [formStore.watch('value_per_locale')]);

	useEffect(() => {
		formStore.setValue('value_per_channel', formStore.watch('value_per_channel') ? 1 : 0);
	}, [formStore.watch('value_per_channel')]);
	useEffect(() => {
		formStore.setValue('is_filterable', formStore.watch('is_filterable') ? 1 : 0);
	}, [formStore.watch('is_filterable')]);
	useEffect(() => {
		formStore.setValue('is_configurable', formStore.watch('is_configurable') ? 1 : 0);
	}, [formStore.watch('is_configurable')]);
	useEffect(() => {
		formStore.setValue('is_visible_on_front', formStore.watch('is_visible_on_front') ? 1 : 0);
	}, [formStore.watch('is_visible_on_front')]);
	useEffect(() => {
		formStore.setValue('use_in_flat', formStore.watch('use_in_flat') ? 1 : 0);
	}, [formStore.watch('use_in_flat')]);

	useEffect(() => {
		formStore.setValue('is_comparable', formStore.watch('is_comparable') ? 1 : 0);
	}, [formStore.watch('is_comparable')]);



	const data: { name: path<addAttributeInterface>; label: string; enable: boolean } = [
		{
			name: 'is_required',
			label: t('Is Required'),
			enable: true,
		},
		{
			name: 'is_unique',
			label: t('Is Unique'),
			enable: true,
		},
		{
			name: 'validation',
			label: t('Validation'),
			enable: true,
		},
		{
			name: 'value_per_locale',
			label: t('Value Per Locale'),
			enable: true,
		},
		{
			name: 'value_per_channel',
			label: t('Value Per Channel'),
			enable: true,
		},
		{
			name: 'is_filterable',
			label: t('Is Filterable'),
			enable: true,
		},
		{
			name: 'is_configurable',
			label: t('Is Configuration'),
			enable: true,
		},
		{
			name: 'is_visible_on_front',
			label: t('Visible On Front'),
			enable: true,
		},
		{
			name: 'use_in_flat',
			label: t('Use On Flat'),
			enable: true,
		},
		{
			name: 'is_comparable',
			label: t('Is Comparable'),
			enable: true,
		},
	];

	useMemo(() => {
		if (id) {
			dispatch(getAttributeShow(id));
		}
	}, [id]);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('add attribute')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate} />
				</SubHeader>
				<div className='custom_container custom-grid-parent'>
					<div className=' flex-col-global grid-left'>
						<AttributeInfo formStore={formStore} />

						<OptionFields formStore={formStore} label={
							formStore.watch('options')?.length > 0
								? t('Add More Options')
								: t('Add Options')
						} />
					</div>
					{/* actions */}
					<div className='grid-right'>
						<QuickActions<addAttributeInterface>
							formStore={formStore}
							data={data}
							title={t('Quick actions')}
						/>
					</div>
				</div>
				<div className='flex-btn-end px-5'>
					<SubHeaderMobileBtns onSubmit={onSubmit} />
				</div>
			</form>
		</Form>
	);
}

export default AttributesForm
