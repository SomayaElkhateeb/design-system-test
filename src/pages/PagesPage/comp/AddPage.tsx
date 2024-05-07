import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import AccordionCard from 'src/app/components/optimized/UiKits/AccordionCard';
import ContentSeo from './ContentSeo';

const pageSchema = z.object({
	pageTitle: z.string().min(3, { message: 'Page title is required' }),
	link: z.string().refine((value) => /^https?:\/\/(www\.)?link\.net\/[a-zA-Z0-9._]+$/.test(value), {
		message: 'Invalid URL',
	}),
	metaKey: z.string().min(7, { message: 'Add at least one' }), // ??
	metaDescription: z.string().min(7, { message: 'Meta description is required' }),
});

type TFormInputs = z.infer<typeof pageSchema>;

export default function AddPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TFormInputs>({
		mode: 'onBlur',
		resolver: zodResolver(pageSchema),
	});
	const submitForm: SubmitHandler<TFormInputs> = (data) => console.log(data);

	const handleSaveChangesClick = () => {
		handleSubmit(submitForm)();
	};
	return (
		<div className='p-4 w-3/4 gap-7 flex flex-col'>
			<AccordionCard
				content={<ContentSeo register={register} errors={errors} />}
				title='SEO (Search engine listing preview)'
			/>
		</div>
	);
}
