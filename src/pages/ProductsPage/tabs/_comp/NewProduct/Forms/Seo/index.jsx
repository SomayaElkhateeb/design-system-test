import { useTranslation } from 'react-i18next';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { Textarea } from 'src/app/components/ui/textarea';
import MetaKeywordsFormField from './_comp/MetaKeywordsFormField';
import SearchResultsPreview from './_comp/SearchResultsPreview';



/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function SeoFormFaqsSection(props) {
	const { t } = useTranslation();

	return (
		<Card id={props.id}>
			<CardHeader>
				<CardTitle>{t('SEO (Search engine listing preview)')}</CardTitle>
				<CardDescription className='text-gray-400'>
					{t('Answer questions people frequently ask about your product')}
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<SearchResultsPreview formStore={props.formStore} />
				<FormField
					formStore={props.formStore}
					name='pageTitle'
					label={t('Page Title')}
					render={(field) => <Input {...field} placeholder={t('e.g., T-Shirt')} />}
				/>
				{/* <FormField
						formStore={props.formStore}
						name='link'
						label={t('Link')}
						render={(field) => <Input {...field} placeholder={t('e.g., https://artisan.dookan.net/t-shirt')} type='url' />}
					/> */}
				<MetaKeywordsFormField formStore={props.formStore} />
				<FormField
					formStore={props.formStore}
					name='metaDescription'
					label={t('Meta Description')}
					render={(field) => <Textarea {...field} placeholder={t('Short description')} />}
				/>
			</CardContent>
		</Card>
	);
}
