// import { useTranslation } from 'react-i18next';
// import { SubHeader } from 'src/app/components/optimized';
// import { Form } from 'src/app/components/ui/form';
// import { useForm } from 'src/app/utils/hooks/form';
// import {
// 	SubHeaderDefaultBtns,
// 	SubHeaderMobileBtns,
// } from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
// import { useEffect, useMemo, useState } from 'react';
// import FamilyInfo from './FamilyInfo';
// import AddGroups from './AddGroups';

// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from 'src/app/store';
// import useCustomHookAttributeFamily, { IAddAttributeFamilies } from '../_hook/HookAddAttributeFamilies';
// import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
// import { getAttributeFamiliesShow, postAttributeFamilies, putAttributeFamilies } from 'src/app/store/slices/Attributes/AttributeFamilies/attributeFamiliesAsyncThunks';
// import CustomizedDialogs from './CustomAttributes';

// const AttributeFamilyForm = () => {
// 	//  hooks
// 	const [initialGroup, setInitialGroup] = useState({});
// 	const { t } = useTranslation();
// 	const navigate = useNavigate();
// 	const [searchParams] = useSearchParams();
// 	const id = searchParams.get('id');

// 	// custom hook
// 	const { handelDefaultValue, AttributeFamilySchema } = useCustomHookAttributeFamily();

// 	// redux
// 	const dispatch = useAppDispatch();
// 	const { isLoadingAddOrUpdate, attributeFamiliesShow } = useAppSelector((state) => state.attributesFamilies);

// 	const handleSubmit = (values: IAddAttributeFamilies) => {
// 		console.log(values)
// 		const groupsFormatted = values.attribute_groups.reduce((acc: any, option: any, index: number) => {
// 			acc[`group_${(index += 1)}`] = option;
// 			return acc;
// 		}, {});
// 		let SendingData = { ...values, attribute_groups: groupsFormatted };


// 		id
// 			? dispatch(putAttributeFamilies({ data: SendingData, id })).then((promiseResponse) => {
// 				if ((promiseResponse.payload.code = 200)) {
// 					navigate(-1);
// 				}
// 			})
// 			:
// 			dispatch(postAttributeFamilies(SendingData)).then((promiseResponse) => {
// 				if ((promiseResponse.payload.code = 200)) {
// 					navigate(-1);
// 				}
// 			})
// 	};


// 	const { formStore, onSubmit } = useForm({
// 		schema: AttributeFamilySchema,
// 		handleSubmit: handleSubmit,
// 		defaultValues: handelDefaultValue(),
// 	});
// 	///////////////////////////////////////////////////////

// 	useMemo(() => {
// 		if (id) {
// 			formStore.setValue('code', attributeFamiliesShow?.code); 
// 			formStore.setValue('name', attributeFamiliesShow?.name);

// 			if (attributeFamiliesShow?.attribute_groups) {
// 				const updatedGroups = attributeFamiliesShow.attribute_groups.reduce((acc, opt, index) => {
// 					acc[`group_${index}`] = {
// 						name: opt.name,
// 						position: opt.position,
// 						is_user_defined: opt.is_user_defined > 0 ? 1 : 0,
// 						custom_attributes: opt.custom_attributes,
// 					};
// 					return acc;
// 				}, {});
// 				setInitialGroup(updatedGroups);
// 			}
// 		}
// 	}, [id, attributeFamiliesShow]);


// 	useEffect(() => {
// 		formStore.setValue('attribute_groups.is_user_defined', formStore.watch('attribute_groups.is_user_defined') ? 1 : 0);
// 	}, [formStore.watch('attribute_groups.is_user_defined')]);

// 	useMemo(() => {
// 		if (id) {
// 			dispatch(getAttributeFamiliesShow(id));
// 		}
// 	}, [id]);

// 	return (
// 		<Form {...formStore}>
// 			<form onSubmit={onSubmit} className='flex-col-global'>
// 				<SubHeader title={t('Add Family')}>
// 					<SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate} />
// 				</SubHeader>
// 				<div className='custom_container custom-grid-parent'>
// 					<div className=' flex-col-global grid-left'>
// 						<FamilyInfo formStore={formStore} />

// 						<AddGroups formStore={formStore} 
// 						label={
// 								formStore.watch('attribute_groups')?.length > 0 ? t('Add More Group') : t('Add Group')
// 							}/>
// 					</div>
// 					{/* actions */}
// 					<div className='global-cards h-fit w-ful'>
// 						<h3 className='title'>{t('Quick actions')}</h3>
// 						<div className="flex gap-4">
// 							<FormSwitchField<IAddAttributeFamilies>
// 								formStore={formStore}
// 								name='attribute_groups.is_user_defined'
// 								enable
// 							/>
// 							<p>{t('User defined')}</p>
// 						</div>
// 					</div>
// 				</div>
// 				<div className='flex-btn-end px-5'>
// 					<SubHeaderMobileBtns onSubmit={onSubmit} />
// 				</div>
// 			</form>
// 		</Form>
// 	);
// }

// export default AttributeFamilyForm;



import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import {
    SubHeaderDefaultBtns,
    SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { useEffect, useMemo, useState } from 'react';
import FamilyInfo from './FamilyInfo';
import AddGroups from './AddGroups';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import useCustomHookAttributeFamily, { IAddAttributeFamilies } from '../_hook/HookAddAttributeFamilies';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import { getAttributeFamiliesShow, postAttributeFamilies, putAttributeFamilies } from 'src/app/store/slices/Attributes/AttributeFamilies/attributeFamiliesAsyncThunks';
import CustomizedDialogs from './CustomAttributes';

const AttributeFamilyForm = () => {
    // Hooks
    const [initialGroup, setInitialGroup] = useState<any>({}); // Ensure type is correct
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    // Custom hook
    const { handelDefaultValue, AttributeFamilySchema } = useCustomHookAttributeFamily();

    // Redux
    const dispatch = useAppDispatch();
    const { isLoadingAddOrUpdate, attributeFamiliesShow } = useAppSelector((state) => state.attributesFamilies);

    const handleSubmit = (values: IAddAttributeFamilies) => {
        console.log(values);
        const groupsFormatted = values.attribute_groups?.reduce((acc: any, option: any, index: number) => {
            acc[`group_${(index += 1)}`] = option;
            return acc;
        }, {});
        let SendingData = { ...values, attribute_groups: groupsFormatted };

        id
            ? dispatch(putAttributeFamilies({ data: SendingData, id })).then((promiseResponse) => {
                if (promiseResponse.payload.code === 200) { // Use === for comparison
                    navigate(-1);
                }
            })
            : dispatch(postAttributeFamilies(SendingData)).then((promiseResponse) => {
                if (promiseResponse.payload.code === 200) { // Use === for comparison
                    navigate(-1);
                }
            });
    };

    const { formStore, onSubmit } = useForm({
        schema: AttributeFamilySchema,
        handleSubmit: handleSubmit,
        defaultValues: handelDefaultValue(),
    });

    useMemo(() => {
        if (id) {
            formStore.setValue('code', attributeFamiliesShow?.code); 
            formStore.setValue('name', attributeFamiliesShow?.name);

            if (attributeFamiliesShow?.attribute_groups) {
                const updatedGroups = attributeFamiliesShow.attribute_groups.reduce((acc: any, opt, index) => {
                    acc[`group_${index}`] = {
                        name: opt.name,
                        position: opt.position,
                        is_user_defined: opt.is_user_defined > 0 ? 1 : 0,
                        custom_attributes: opt.custom_attributes,
                    };
                    return acc;
                }, {});
                setInitialGroup(updatedGroups);
            }
        }
    }, [id, attributeFamiliesShow, formStore]);

    useEffect(() => {
        formStore.setValue('attribute_groups.is_user_defined', formStore.watch('attribute_groups.is_user_defined') ? 1 : 0);
    }, [formStore.watch('attribute_groups.is_user_defined')]);

    useMemo(() => {
        if (id) {
            dispatch(getAttributeFamiliesShow(id));
        }
    }, [id, dispatch]);

    return (
        <Form {...formStore}>
            <form onSubmit={onSubmit} className='flex-col-global'>
                <SubHeader title={t('Add Family')}>
                    <SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate} />
                </SubHeader>
                <div className='custom_container custom-grid-parent'>
                    <div className=' flex-col-global grid-left'>
                        <FamilyInfo formStore={formStore} />
                        <AddGroups 
                            formStore={formStore}
                            label={formStore.watch('attribute_groups')?.length > 0 ? t('Add More Group') : t('Add Group')}
                        />
                    </div>
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

export default AttributeFamilyForm;

