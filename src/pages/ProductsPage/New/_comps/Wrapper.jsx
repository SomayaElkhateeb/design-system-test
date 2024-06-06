import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../../app/components/optimized/Buttons/Button';
import { Form } from '../../../../app/components/ui/form';

/**
 * @param {{
 *  sections: { id: string, title: string }[]
 *  children: React.ReactNode
 *  formStore: import("react-hook-form").UseFormReturn<any>
 *  onSubmit: (data: any) => void
 * }} props
 */
export default function NewProductWrapper(props) {
	const navigate = useNavigate();
	return (
		<Form {...props.formStore}>
			<form className='flex flex-col relative' onSubmit={props.onSubmit}>
				<header className='flex flex-col gap-3 bg-white sticky top-20 left-0 capitalize pt-4 pb-2 text-lg font-medium px-4 z-10 -translate-y-4'>
					<div className='flex justify-between gap-4 items-center'>
						<h1>
							<button
								className='text-black whitespace-nowrap'
								onClick={() => {
									navigate(-1);
								}}
							>
								{'<'}
							</button>{' '}
							Add product
						</h1>

						<div className='flex flex-wrap gap-4'>
							<Button className='bg-gray/5 text-black' variant='default'>
								Discard
							</Button>
							<Button type='submit'>Save Changes</Button>
						</div>
					</div>

					<div className='flex gap-4 capitalize text-lg font-medium overflow-x-auto overflow-y-hidden'>
						{props.sections.map(({ id, title }) => (
							<Link
								key={id}
								to={`/products/new/configurable#${id}`}
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
						))}
					</div>
				</header>
				{props.children}
			</form>
		</Form>
	);
}
