import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Input } from 'src/app/components/ui/input';
import ProductFormCategoryField from '../fields/Category';

/** @param {{ formStore: import("..").ProductFormStore; }} props */
export default function ProductFormBasicInfoSection(props) {
	const { t } = useTranslation();
	console.log(
		"`${t('Product name')} (${t('Required')})`",
		`${t('Product name')} (${t('Required')})`,
	);
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
					<ProductFormCategoryField formStore={props.formStore} />
					{/* Brand field will be here */}
				</div>
			</CardContent>
		</Card>
	);
}
