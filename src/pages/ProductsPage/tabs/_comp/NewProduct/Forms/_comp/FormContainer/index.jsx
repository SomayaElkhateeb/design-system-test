import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from 'src/app/components/optimized/Buttons/Button';
import { Form } from 'src/app/components/ui/form';
import { ScrollArea, ScrollBar } from 'src/app/components/ui/scroll-area';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

/**
 * @template TFormStore
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormContainer(props) {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const productType = useWatch({
		control: props.formStore.control,
		name: 'productType',
	});

	// State to hold the current page title
	const [title, setTitle] = useState('');

	// Effect to update the title based on pathname changes
	const { pathname } = useLocation();
	useEffect(() => {
		const pathSegments = pathname.split('/');
		const lastSegment = pathSegments[pathSegments.length - 1];
		setTitle(lastSegment);
	}, [pathname]);

	// Scroll to the element with ID from hash on initial load
	useEffect(() => {
		const urlFragmentIdentifier = window.location.hash;
		if (urlFragmentIdentifier) {
			const elem = document.getElementById(urlFragmentIdentifier.slice(1));
			if (elem) {
				elem.scrollIntoView({ behavior: 'smooth' });
			}
		}
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
							{title !== 'configurable' && title !== 'simple' ? `Add ${title}` : 'Add Product'}
						</h1>

						<div className='flex flex-wrap gap-4'>
							<Button className='bg-gray/5 text-black' variant='default'>
								{t('Discard')}
							</Button>
							<Button type='submit'>{t('Save Changes')}</Button>
						</div>
					</div>

					<ScrollArea className='w-full max-h-[95dvh] pb-2'>
						<div className='flex gap-4 capitalize text-lg font-medium'>
							{props.sections.map(
								({ id, title }) =>
									title && (
										<Link
											key={id}
											to={`/products/new/${productType}#${id}`}
											className='text-gray whitespace-nowrap'
											onClick={() => {
												const elem = document.getElementById(id);
												if (elem) {
													elem.scrollIntoView({ behavior: 'smooth' });
												}
											}}
										>
											{title}
										</Link>
									),
							)}
						</div>
						<ScrollBar orientation='horizontal' />
					</ScrollArea>
				</header>
				{props.children}
			</form>
		</Form>
	);
}
