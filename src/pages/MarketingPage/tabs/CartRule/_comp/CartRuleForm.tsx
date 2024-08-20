import { useTranslation } from 'react-i18next';
import { SubHeader } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import {
    SubHeaderDefaultBtns,
    SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import useCustomHookCartRule, { CartRuleInterface } from '../_hook/HookCartRuleForm';
import { postCartRule, putCartRule } from 'src/app/store/slices/marketingPage/cartRule/cartRuleAsyncThunks';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useEffect, useMemo, useState } from 'react';

const CartRuleForm = () => {
    const [conditions, setConditions] = useState({});
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    // custom hook
    const { handelDefaultValue, cartRuleSchema } = useCustomHookCartRule();

    // redux
    const dispatch = useAppDispatch();
    const { isLoadingAddOrUpdate, cartRuleShow } = useAppSelector(
        (state) => state.cartRule,
    );


    const handleSubmit = (values: CartRuleInterface) => {
        console.log(values)
        id
            ? dispatch(putCartRule({ data: values, id })).then((promiseResponse) => {
                if ((promiseResponse.payload.code = 200)) {
                    navigate(-1);
                }
            })
            : dispatch(postCartRule(values)).then((promiseResponse) => {
                if ((promiseResponse.payload.code = 200)) {
                    navigate(-1);
                }
            });
    };



    const { formStore, onSubmit } = useForm({
        schema: cartRuleSchema,
        handleSubmit: handleSubmit,
        defaultValues: handelDefaultValue(),
    });

    useMemo(() => {
		if (id) {
			formStore.setValue('name', cartRuleShow?.name);
			formStore.setValue('description', cartRuleShow?.description); 
			formStore.setValue('customer_groups', cartRuleShow?.customer_groups); 
			formStore.setValue('coupon_code', cartRuleShow?.coupon_code); 
			formStore.setValue('usage_per_customer', cartRuleShow?.usage_per_customer); 
			formStore.setValue('starts_from', cartRuleShow?.starts_from); 
			formStore.setValue('ends_till', cartRuleShow?.ends_till); 
			formStore.setValue('action_type', cartRuleShow?.action_type); 

            if (cartRuleShow?.conditions) {
				const updatedCondition = cartRuleShow.conditions.reduce((acc, opt, index) => {
					acc[`${index}`] = {
						attribute: opt.attribute,
						operator: opt.operator,
						attribute_type: opt.attribute_type,
						value: opt.value,
					};
					return acc;
				}, {});
				setConditions(updatedCondition);
			}

            formStore.setValue('status', cartRuleShow?.status > 0 ? 1 : 0);
			formStore.setValue('coupon_type', cartRuleShow?.coupon_type > 0 ? 1 : 0);
			formStore.setValue('use_auto_generation', cartRuleShow?.use_auto_generation > 0 ? 1 : 0);
			formStore.setValue('sort_order', cartRuleShow?.sort_order > 0 ? 1 : 0);
			formStore.setValue('condition_type', cartRuleShow?.condition_type > 0 ? 1 : 0);
			formStore.setValue('apply_to_shipping', cartRuleShow?.apply_to_shipping > 0 ? 1 : 0);
			formStore.setValue('free_shipping', cartRuleShow?.free_shipping > 0 ? 1 : 0);
			formStore.setValue('end_other_rules', cartRuleShow?.end_other_rules > 0 ? 1 : 0);
		}
	}, [id, cartRuleShow]);

    const data = [
		{ name: 'apply_to_shipping', label: t('Is Required'), enable: true },
		{ name: 'free_shipping', label: t('Is Unique'), enable: true },
		{ name: 'end_other_rules', label: t('Validation'), enable: true },
	];

    useEffect(() => {
		formStore.setValue('apply_to_shipping', formStore.watch('apply_to_shipping') ? 1 : 0);
	}, [formStore.watch('apply_to_shipping')]);

	useEffect(() => {
		formStore.setValue('free_shipping', formStore.watch('free_shipping') ? 1 : 0);
	}, [formStore.watch('free_shipping')]);

	useEffect(() => {
		formStore.setValue('end_other_rules', formStore.watch('end_other_rules') ? 1 : 0);
	}, [formStore.watch('end_other_rules')]);



    return (
        <Form {...formStore}>
            <form onSubmit={onSubmit} className='flex-col-global'>
                <SubHeader title={t('add cart rule')}>
                    <SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate} />
                </SubHeader>
                <div className='custom_container custom-grid-parent'>
                    <div className='flex-col-global grid-left'>
                        {/*  */}
                    </div>
                    <div className='grid-right'>
                        {/*  */}
                        <QuickActions<CartRuleInterface>
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
    )
}

export default CartRuleForm
