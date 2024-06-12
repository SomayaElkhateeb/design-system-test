import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../../../app/components/optimized/Buttons/Button';
import { Form } from '../../../../../app/components/ui/form';
import { ScrollArea, ScrollBar } from 'src/app/components/ui/scroll-area';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormContainer(props) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const productType = useWatch({
		control: props.formStore.control,
		name: 'productType',
	});

	useEffect(() => {
		const urlFragmentIdentifier = window.location.hash;

		if (!urlFragmentIdentifier) {
			return;
		}

		const elem = document.getElementById(urlFragmentIdentifier.slice(1));

		if (!elem) {
			return;
		}

		elem.scrollIntoView({ behavior: 'smooth' });
	}, []);

	return (
		<Form {...props.formStore}>
			<form className='flex flex-col relative' onSubmit={props.onSubmit}>
				<header className='flex flex-col gap-3 bg-white sticky top-20 left-0 capitalize pt-4 pb-2 text-lg font-medium px-4 z-10 -translate-y-4'>
					<div className='flex justify-between gap-4 items-center'>
						<h1>
							<button className='text-black whitespace-nowrap' onClick={() => navigate(-1)}>
								{'<'}
							</button>{' '}
							{t('Add product')}
						</h1>

						<div className='flex flex-wrap gap-4'>
							<Button className='bg-gray/5 text-black' variant='default'>
								{t('Discard')}
							</Button>
							<Button type='submit'>{t('Save Changes')}</Button>
						</div>
					</div>

					<ScrollArea className='w-full max-h-[90dvh] pb-2'>
						<div className='flex gap-4 capitalize text-lg font-medium'>
							{props.sections.map(({ id, title }) => (
								<Link
									key={id}
									to={`/products/new/${productType}#${id}`}
									className='text-gray whitespace-nowrap'
									onClick={() => {
										const elem = document.getElementById(id);

										if (!elem) {
											return;
										}

										elem.scrollIntoView({ behavior: 'smooth' });
									}}
								>
									{title}
								</Link>
							))}
						</div>
						<ScrollBar orientation='horizontal' />
					</ScrollArea>
				</header>
				{props.children}
			</form>
		</Form>
	);
}
