import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCirclePlus } from 'react-icons/fa6';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
import { useForm } from 'src/app/utils/hooks/form';
import {
	optionNameCollection,
	optionTypeCollection,
	optionTypeMap,
	productOptionRawSchema
} from '../utils';
import OptionValuesManager from './OptionValuesManager';

/**
 * @param {{
* 	handleSubmit: (values: import('../types').ProductOptionValues) => void;
*  getOptionValuesNames: () => string[];
* }} props
*/
export default function AddOptionManager(props) {
   const { t } = useTranslation();
   const [isAdding, setIsAdding] = useState(false);
   const { formStore } = useForm({
	   schema: productOptionRawSchema,
	   defaultValues: {
		   option: {
			   tempId: Date.now().toString() + Math.random().toString(),
			   type: optionTypeMap.text,
			   values: [],
		   },
	   },
	   handleSubmit: props.handleSubmit,
   });

   const getOptionValuesNames = props.getOptionValuesNames;

   const filteredOptionNameCollection = useMemo(() => {
	   const values = getOptionValuesNames();
	   if (!values || values.length === 0) {
		   return optionNameCollection;
	   }

	   const valuesMap = values.reduce((acc, val) => {
		   acc[val] = true;
		   return acc;
	   }, /** @type {Record<string, boolean>} */ ({}));

	   return optionNameCollection.filter((item) => {
		   return !valuesMap[item];
	   });
   }, [getOptionValuesNames]);

   if (!isAdding) {
	   return (
		   <Button
			   variant='secondary'
			   textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap bg-transparent border-title px-4 py-3 rounded-lg border'
			   className='px-0 border-0 rounded-none'
			   onClick={() => setIsAdding(true)}
		   >
			   <FaCirclePlus className='size-5' />
			   {t('Add Option')}
		   </Button>
	   );
   }

   return (
	   <div className='flex flex-col gap-6'>
		   <div className='grid grid-cols-2 gap-4'>
			   <div className='flex flex-col gap-y-3'>
				   <FormField
					   formStore={formStore}
					   name='option.name'
					   label={t('Name')}
					   render={(field) => (
						   <Select
							   onValueChange={field.onChange}
							   value={field.value}
							   required={field.required}
							   name={field.name}
						   >
							   <SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
								   <SelectValue placeholder={t('Select Size, Color or add new')} />
							   </SelectTrigger>
							   <SelectContent>
								   {filteredOptionNameCollection.map((item) => {
									   return (
										   <SelectItem key={item} value={item}>
											   {t(item)}
										   </SelectItem>
									   );
								   })}
							   </SelectContent>
						   </Select>
					   )}
				   />
				   <OptionValuesManager formStore={formStore} />
			   </div>
			   <div className='flex flex-col gap-y-3'>
				   <FormField
					   formStore={formStore}
					   name='option.type'
					   label={t('Type')}
					   render={(field) => (
						   <Select
							   onValueChange={field.onChange}
							   value={field.value}
							   required={field.required}
							   name={field.name}
						   >
							   <SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
								   <SelectValue />
							   </SelectTrigger>
							   <SelectContent>
								   {optionTypeCollection.map((item) => (
									   <SelectItem key={item} value={item}>
										   {t(item)}
									   </SelectItem>
								   ))}
							   </SelectContent>
						   </Select>
					   )}
				   />
			   </div>
		   </div>
		   <div className='flex gap-4'>
			   <Button
				   variant='primary'
				   onClick={async () => {
					   const isValid = await formStore.trigger();

					   if (!isValid) {
						   return;
					   }

					   const values = formStore.getValues();
					   props.handleSubmit(values);
					   formStore.reset();
					   setIsAdding(false);
				   }}
			   >
				   {t('Add')}
			   </Button>
			   <Button
				   variant='secondary'
				   onClick={() => {
					   setIsAdding(false);
					   formStore.reset();
				   }}
			   >
				   {t('Discard')}
			   </Button>
		   </div>
	   </div>
   );
}