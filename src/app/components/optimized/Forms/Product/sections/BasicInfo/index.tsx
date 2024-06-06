import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Input } from 'src/app/components/ui/input';
import ProductFormCategoryField from '../../fields/Category';
import { Props } from './types';
import ProductFormBrandField from '../../fields/Brand';

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormBasicInfoSection<TFormStore>(props: Props<TFormStore>) {
	const { t } = useTranslation();

	return (
		<Card id={props.id}>
			<CardHeader>
				<CardTitle>{t('Basic info')}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					<TabbedFormField
						formStore={props.formStore}
						keys={[
							{ name: 'nameEn', label: 'En' },
							{ name: 'nameAr', label: 'عربي' },
						]}
						label={`${t('Product Name')} (${t('Required')})`}
						renderer={(field) => <Input {...field} required />}
					/>
					<FormField
						formStore={props.formStore}
						name='sku'
						label={t('SKU')}
						render={(field) => <Input {...field} />}
					/>

					<ProductFormCategoryField formStore={props.formStore} />

					<ProductFormBrandField formStore={props.formStore} />
				</div>
			</CardContent>
		</Card>
	);
}
