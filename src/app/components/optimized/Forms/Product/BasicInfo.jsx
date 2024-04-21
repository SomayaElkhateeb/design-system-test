import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Input } from 'src/app/components/ui/input';
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
	SelectItem,
} from 'src/app/components/ui/select';
import Button from '../../UiKits/Button';
import { FaCirclePlus } from 'react-icons/fa6';

{
	/* <FormField
formStore={formStore}
name='link'
label={`${t('Link')} (${t('Slug')})`}
render={(field) => <Input {...field} />}
description='www.dookan.net/'
/> */
}

/** @param {{ formStore: import(".").ProductFormStore; }} props */
export default function ProductFormBasicInfo(props) {
	const { t } = useTranslation();

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t('Basic Info')}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					<TabbedFormField
						formStore={props.formStore}
						keys={[
							{ name: 'generalInfo.nameEn', label: 'En' },
							{ name: 'generalInfo.nameAr', label: 'عربي' },
						]}
						label={`${t('Product name')} (${t('Required')})`}
						renderer={(field) => <Input {...field} required />}
					/>
					<FormField
						formStore={props.formStore}
						name='generalInfo.sku'
						label={t('Sku')}
						render={(field) => <Input {...field} />}
					/>
					{/* Category field will be here */}
					<FormField
						formStore={props.formStore}
						name='generalInfo.category'
						label={t('Category')}
						render={(field) => (
							<div className='flex'>
								<Select
									onValueChange={field.onChange}
									value={field.value?.id}
									required={field.required}
									name={field.name}
								>
									<SelectTrigger
										className='border-e-0 rounded-e-none rtl:border-e rtl:rounded-e rtl:border-s-0 rtl:rounded-s-none'
										onBlur={field.onBlur}
										disabled={field.disabled}
										id={field.id}
									>
										<SelectValue placeholder='Theme' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='light'>Light</SelectItem>
										<SelectItem value='dark'>Dark</SelectItem>
										<SelectItem value='system'>System</SelectItem>
									</SelectContent>
								</Select>
								<Button
									variant='secondary'
									textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
									className='border-input border-s-0 rounded-s-none'
								>
									<FaCirclePlus className='size-5' />
									{t('Add New')}
								</Button>
							</div>
						)}
					/>
					{/* Brand field will be here */}
				</div>
			</CardContent>
		</Card>
	);
}
