import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SubHeader } from 'src/app/components/optimized';
import { SubHeaderDefaultBtns, SubHeaderMobileBtns } from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import useCustomHookTaxRate from '../_hook/HookTaxRate';
import { createTaxRate, getTaxRatesShow, updateTaxRate } from 'src/app/store/slices/settingsPage/tax/taxRates/taxRateAsyncThunks';
import { useForm } from 'react-hook-form';
import { Form } from 'src/app/components/ui/form';

const AddTaxRate = () => {

  //  hooks
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  // custom hook
  const { handelDefaultValue, taxRateSettingsSchema } = useCustomHookTaxRate();

  // redux
  const dispatch = useAppDispatch();
  const { isLoadingAddOrUpdate, taxRatesShow } = useAppSelector((state) => state.usersSettings);

  const handleSubmit = (values: any) => {
    console.log(values);
    let customValues = {
      identifier: values.identifier,
      is_zip: values.is_zip,
      zip_code: values.zip_code,
      zip_from: values.zip_from,
      zip_to: values.zip_to,
      country: values.country,
      tax_rate: values.tax_rate,
      // taxes: {
      //   general: {
      //     applied_to: values.applied_to,
      //     include_in_product_prices: values.include_in_product_prices,
      //     default_class: values.default_class,
      //     display_in_checkout: values.display_in_checkout,
      //   }
      // }
    }
    id
      ?
      dispatch(updateTaxRate({ data: customValues, id })).then((promiseResponse) => {
        if ((promiseResponse.payload.code = 200)) {
          navigate(-1);
        }
      })
      :
      dispatch(createTaxRate(values)).then((promiseResponse) => {
        if ((promiseResponse.payload.code = 200)) {
          navigate(-1);
        }
      });
  };

  const { formStore, onSubmit } = useForm({
    schema: taxRateSettingsSchema,
    handleSubmit: handleSubmit,
    defaultValues: handelDefaultValue(),
  });


  useMemo(() => {
    if (id) {
      taxRatesShow?.identifier && formStore.setValue('identifier', taxRatesShow?.identifier);
      taxRatesShow?.is_zip > 0
        ? formStore.setValue('is_zip', 1)
        : formStore.setValue('is_zip', 0);
      taxRatesShow?.zip_code && formStore.setValue('zip_code', taxRatesShow?.zip_code);
      taxRatesShow?.zip_from && formStore.setValue('zip_from', taxRatesShow?.zip_from);
      taxRatesShow?.zip_to && formStore.setValue('zip_to', taxRatesShow?.zip_to);
      taxRatesShow?.country && formStore.setValue('country', taxRatesShow?.country);
      taxRatesShow?.tax_rate && formStore.setValue('tax_rate', taxRatesShow?.tax_rate);

      // taxRatesShow?.taxes.general.applied_to && formStore.setValue('taxes.general.applied_to', taxRatesShow?.taxes.general.applied_to);

      // taxRatesShow?.taxes.general.include_in_product_prices > 0
      //   ? formStore.setValue('taxes.general.include_in_product_prices', 1)
      //   : formStore.setValue('taxes.general.include_in_product_prices', 0);

      // taxRatesShow?.taxes.general.default_class && formStore.setValue('taxes.general.default_class', taxRatesShow?.taxes.general.default_class);

      // taxRatesShow?.taxes.general.display_in_checkout && formStore.setValue('taxes.general.display_in_checkout', taxRatesShow?.taxes.general.display_in_checkout);


    }
  }, [id, taxRatesShow]);


  useMemo(() => {
    if (id) {
      dispatch(getTaxRatesShow(id));
    }
  }, [id]);

  useEffect(() => {
    formStore.setValue('is_zip', formStore.watch('is_zip') ? 1 : 0);
  }, [formStore.watch('is_zip')]);

  return (
    <Form {...formStore}>
      <form onSubmit={onSubmit} className='flex-col-global'>
        <SubHeader title={t('tax rates')}>
          <SubHeaderDefaultBtns onSubmit={onSubmit} isLoading={isLoadingAddOrUpdate} />
        </SubHeader>
        <div className='custom_container custom-grid-parent'>
          <div className=' flex-col-global grid-left'>


          </div>
          <div className='grid-right'>
            <div className='global-cards'>


            </div>
          </div>

        </div>

        <div className='flex-btn-end px-5'>
          <SubHeaderMobileBtns onSubmit={onSubmit} />
        </div>
      </form>
    </Form >
  )
}

export default AddTaxRate;
