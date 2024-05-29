import { useTranslation } from 'react-i18next';
import { Card, CardContent } from 'src/app/components/ui/card';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Textarea } from 'src/app/components/ui/textarea';
import TabsBuilder from 'src/app/components/builders/Tabs';

/**
 * @template TFormStore
 *
 * @type {import('src/app/components/builders/Tabs').TabsBuilderItem<import('./types.ts').Props<TFormStore>>[]}
 */
const tabsItems = [
	{
		title: 'Description',
		Elem: (props) => {
			const { t } = useTranslation();
			return (
				<TabbedFormField
					formStore={props.formStore}
					keys={[
						{ name: 'descriptionEn', label: 'En' },
						{ name: 'descriptionAr', label: 'عربي' },
					]}
					label={`${t('Product Name')} (${t('Required')})`}
					renderer={(field) => <Textarea {...field} required />}
				/>
			);
		},
	},
	{
		title: 'Specifications',
		Elem: (props) => {
			return <p>Not implemented yet!</p>;
		},
		isInProgress: true,
	},
];

/**
 * @template TFormStore
 *
 * @param {import('./types.ts').Props<TFormStore>} props
 */
export default function ProductFormDescriptionAndSpecificationsSection(props) {
	return (
		<Card>
			<CardContent>
				<TabsBuilder items={tabsItems} sharedProps={{ formStore: props.formStore }} />
			</CardContent>
		</Card>
	);
}
