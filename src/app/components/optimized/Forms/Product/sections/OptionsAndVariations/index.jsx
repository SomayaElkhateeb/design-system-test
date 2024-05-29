import { useTranslation } from 'react-i18next';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'src/app/components/ui/card';
import Button from '../../../../Buttons/Button';
import { FaCirclePlus } from 'react-icons/fa6';

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormOptionsAndVariationsSection(props) {
	const { t } = useTranslation();

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t('Options & Variations')}</CardTitle>
				<CardDescription className='text-gray-400'>
					{t('Allow your customers to select from options such as Size and Color on your website.')}
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				{/* // ??? */}
				{/* // TODO: To be implemented  */}
				<Button
					variant='secondary'
					textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap bg-transparent border-title px-4 py-3 rounded-lg border'
					className='px-0 border-0'
				>
					<FaCirclePlus className='size-5' />
					{t('Add Option')}
				</Button>
			</CardContent>
		</Card>
	);
}
