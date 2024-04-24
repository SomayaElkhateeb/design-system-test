import { useTranslation } from 'react-i18next';
import { Card, CardContent } from 'src/app/components/ui/card';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Textarea } from 'src/app/components/ui/textarea';
import TabsBuilder from 'src/app/components/builders/Tabs';

/** @type {import('src/app/components/builders/Tabs').TabsBuilderItem<{ formStore: import("..").ProductFormStore; }>[]} */
const tabsItems = [
	{
		title: 'Description',
		Elem: (props) => {
			const { t } = useTranslation();
			return (
				<TabbedFormField
					formStore={props.formStore}
					keys={[
						{ name: 'generalInfo.descriptionEn', label: 'En' },
						{ name: 'generalInfo.descriptionAr', label: 'عربي' },
					]}
					label={`${t('Product name')} (${t('Required')})`}
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

/** @param {{ formStore: import("..").ProductFormStore; }} props */
export default function ProductFormDescriptionAndSpecificationsSection(props) {
	return (
		<Card>
			<CardContent>
				<TabsBuilder items={tabsItems} sharedProps={{ formStore: props.formStore }} />
			</CardContent>
		</Card>
	);
}
