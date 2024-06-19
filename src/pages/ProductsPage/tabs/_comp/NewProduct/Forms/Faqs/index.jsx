import { useTranslation } from 'react-i18next';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'src/app/components/ui/card';
import { Button } from 'src/app/components/optimized';
import { FaCirclePlus } from 'react-icons/fa6';
import { faqRawSchema } from './utils';
import { useState } from 'react';
import { useForm } from 'src/app/utils/hooks/form';
import { Input } from 'src/app/components/ui/input';
import Textarea from 'src/app/components/optimized/InputsFields/Textarea';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Accordion } from 'src/app/components/ui/accordion';
import CustomAccordionItem from 'src/app/components/ui/accordion/custom-item';
import { useFieldArray } from 'react-hook-form';
import { TrashIcon } from 'lucide-react';

/**
 * @param {{
 * 	handleSubmit: (values: import('src/app/utils/hooks/form').InferredZodSchema<typeof faqRawSchema>) => void;
 * }} props
 */
function AddQAManager(props) {
	const { t } = useTranslation();
	const [isAdding, setIsAdding] = useState(false);
	const { formStore, onSubmit } = useForm({
		schema: faqRawSchema,
		handleSubmit: props.handleSubmit,
		defaultValues: {
			faq: {
				tempId: Date.now().toString() + Math.random().toString(),
			},
		},
	});

	if (!isAdding) {
		return (
			<Button
				variant='secondary'
				textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap bg-transparent border-title px-4 py-3 rounded-lg border'
				className='px-0 border-0'
				onClick={() => setIsAdding(true)}
			>
				<FaCirclePlus className='size-5' />
				{t('Add Question')}
			</Button>
		);
	}

	return (
		<div onSubmit={onSubmit} className='flex flex-col gap-4'>
			<Card>
				<CardHeader>
					<CardTitle>{t('Add Question')}</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<div className='flex flex-col gap-4 md:w-1/2'>
						<TabbedFormField
							formStore={formStore}
							container={{ className: 'flex-grow' }}
							keys={[
								{ name: `faq.questionEn`, label: 'En' },
								{ name: `faq.questionAr`, label: 'عربي' },
							]}
							label={t('Question')}
							renderer={(field) => <Input {...field} />}
						/>
						<TabbedFormField
							formStore={formStore}
							container={{ className: 'flex-grow' }}
							keys={[
								{ name: `faq.answerEn`, label: 'En' },
								{ name: `faq.answerAr`, label: 'عربي' },
							]}
							label={t('Answer')}
							renderer={(field) => <Textarea {...field} />}
						/>
					</div>
					<div className='flex gap-4'>
						<Button
							type='button'
							variant='primary'
							onClick={() => {
								// if (!formStore.formState.isValid) {
								// 	return;
								// }

								const values = formStore.getValues();
								props.handleSubmit(values);
								formStore.reset();
							}}
						>
							{t('Save & add another')}
						</Button>
						<Button
							type='button'
							variant='secondary'
							onClick={() => {
								// if (!formStore.formState.isValid) {
								// 	return;
								// }

								const values = formStore.getValues();
								props.handleSubmit(values);
								formStore.reset();
								setIsAdding(false);
							}}
						>
							{t('Save')}
						</Button>
						<Button
							variant='text'
							onClick={() => {
								setIsAdding(false);
								formStore.reset();
							}}
						>
							{t('Discard')}
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
function QasList(props) {
	const { t } = useTranslation();
	const { fields, remove } = useFieldArray({
		control: props.formStore.control,
		name: 'faqs',
	});

	return (
		<Accordion type='multiple' defaultValue={[fields[0]?.tempId]} className='flex flex-col gap-4'>
			{fields.map((item, index) => (
				<CustomAccordionItem
					start={{ trigger: item.questionEn }}
					end={{
						before: (
							<button
								type='button'
								onClick={() => {
									remove(index);
								}}
							>
								<TrashIcon />
							</button>
						),
					}}
					key={item.tempId}
					value={item.tempId}
				>
					<div className='flex flex-col gap-4 md:w-1/2'>
						<TabbedFormField
							formStore={props.formStore}
							container={{ className: 'flex-grow' }}
							keys={[
								{ name: `faqs.${index}.questionEn`, label: 'En' },
								{ name: `faqs.${index}.questionAr`, label: 'عربي' },
							]}
							label={t('Question')}
							renderer={(field) => <Input {...field} />}
						/>
						<TabbedFormField
							formStore={props.formStore}
							container={{ className: 'flex-grow' }}
							keys={[
								{ name: `faqs.${index}.answerEn`, label: 'En' },
								{ name: `faqs.${index}.answerAr`, label: 'عربي' },
							]}
							label={t('Answer')}
							renderer={(field) => <Textarea {...field} />}
						/>
					</div>
				</CustomAccordionItem>
			))}
		</Accordion>
	);
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormFaqsSection(props) {
	const { t } = useTranslation();

	return (
		<Card id={props.id}>
			<CardHeader>
				<CardTitle>{t('FAQs')}</CardTitle>
				<CardDescription className='text-gray-400'>
					{t('Answer questions people frequently ask about your product')}
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<QasList formStore={props.formStore} />
				<AddQAManager
					handleSubmit={(values) => {
						props.formStore.setValue('faqs', [...props.formStore.getValues('faqs'), values.faq]);
					}}
				/>
			</CardContent>
		</Card>
	);
}
