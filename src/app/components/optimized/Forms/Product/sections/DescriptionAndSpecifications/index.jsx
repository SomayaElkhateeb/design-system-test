import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { Textarea } from 'src/app/components/ui/textarea';
import TabsBuilder from 'src/app/components/builders/Tabs';
import { productSpecificationsRawSchema } from './utils';
import { useForm } from 'src/app/utils/hooks/form';
import { useFieldArray } from 'react-hook-form';
import { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import Button from '../../../../Buttons/Button';
import { Accordion } from 'src/app/components/ui/accordion';
import CustomAccordionItem from 'src/app/components/ui/accordion/custom-item';
import { TrashIcon } from 'lucide-react';
import { Input } from 'src/app/components/ui/input';

/**
 * @param {{
 * 	handleSubmit: (values: import('src/app/utils/hooks/form').InferredZodSchema<typeof productSpecificationsRawSchema>) => void;
 * }} props
 */
function AddSpecificationManager(props) {
	const { t } = useTranslation();
	const [isAdding, setIsAdding] = useState(false);
	const { formStore, onSubmit } = useForm({
		schema: productSpecificationsRawSchema.specification,
		handleSubmit: props.handleSubmit,
		defaultValues: {
			specification: {
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
				{t('Add Specification')}
			</Button>
		);
	}

	return (
		<div onSubmit={onSubmit} className='flex flex-col gap-4'>
			<Card>
				<CardHeader>
					<CardTitle>{t('Add Specification')}</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<div className='flex flex-col gap-4 md:w-1/2'>
						<TabbedFormField
							formStore={formStore}
							container={{ className: 'flex-grow' }}
							keys={[
								{ name: `specification.specNameEn`, label: 'En' },
								{ name: `specification.specNameAr`, label: 'عربي' },
							]}
							label={t('Specification')}
							renderer={(field) => <Input {...field} />}
						/>
						<TabbedFormField
							formStore={formStore}
							container={{ className: 'flex-grow' }}
							keys={[
								{ name: `specification.specValueEn`, label: 'En' },
								{ name: `specification.specValueAr`, label: 'عربي' },
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
function SpecificationsList(props) {
	const { t } = useTranslation();
	const { fields, remove } = useFieldArray({
		control: props.formStore.control,
		name: 'specifications',
	});

	return (
		<Accordion type='multiple' defaultValue={[fields[0]?.tempId]} className='flex flex-col gap-4'>
			{fields.map((item, index) => (
				<CustomAccordionItem
					start={{ trigger: item.specNameEn }}
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
								{ name: `specifications.${index}.specNameEn`, label: 'En' },
								{ name: `specifications.${index}.specNameAr`, label: 'عربي' },
							]}
							label={t('Specification')}
							renderer={(field) => <Input {...field} />}
						/>
						<TabbedFormField
							formStore={props.formStore}
							container={{ className: 'flex-grow' }}
							keys={[
								{ name: `specifications.${index}.specValueEn`, label: 'En' },
								{ name: `specifications.${index}.specValueAr`, label: 'عربي' },
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
			return (
				<div className='flex flex-col gap-4'>
					<SpecificationsList formStore={props.formStore} />
					<AddSpecificationManager
						handleSubmit={(values) => {
							props.formStore.setValue('specifications', [
								...props.formStore.getValues('specifications'),
								values.specification,
							]);
						}}
					/>
				</div>
			);
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
