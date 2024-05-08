import InputTags from 'src/app/components/optimized/InputsFields/InputTags';

export default function ContentSeo({
	register,
	errors,
}: {
	register: (...args: any[]) => any;
	errors: string;
}) {
	const selectItems = [{ title: 'Dress' }, { title: 'Fashion' }];
	return (
		<div className='flex flex-col gap-4 w-[30rem]'>
			<div>
				<label>Page Tilte</label>
				<br />
				<input {...register('pageTitle')} />
				<p className='text-red-600 text-sm'>{errors.pageTitle?.message || ''}</p>
			</div>
			<div>
				<label>Link</label>
				<br />
				<input {...register('link')} />
				<p className='text-red-600 text-sm'>{errors.link?.message || ''}</p>
			</div>
			<div>
				<label>Meta keywords</label>
				{/* <input placeholder='Type and add' {...register('metaKey')} /> */}
				<InputTags selectItems={selectItems} />
			</div>
			<div>
				<label>Meta description tag</label>
				<br />
				<textarea placeholder='Short description' {...register('metaDescription')} />
				<p className='text-red-600 text-sm'>{errors.metaDescription?.message || ''}</p>
			</div>
		</div>
	);
}
