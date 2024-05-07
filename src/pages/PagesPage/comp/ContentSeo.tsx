export default function ContentSeo({
	register,
	errors,
}: {
	register: (...args: any[]) => any;
	errors: string;
}) {
	return (
		<div className='flex flex-col gap-4'>
			<div>
				<label>Page Tilte</label>
				<br />
				<input placeholder='e.g., T-Shirt' {...register('pageTitle')} />
				<p className='text-red-600 text-sm'>{errors.pageTitle?.message || ''}</p>
			</div>
			<div>
				<label>Link</label>
				<br />
				<input placeholder='e.g., https://artisan.dookan.net/t-shirt' {...register('link')} />
				<p className='text-red-600 text-sm'>{errors.link?.message || ''}</p>
			</div>
			<div>
				<label>Meta keywords</label>
				<br />
				<input placeholder='Type and add' {...register('metaKey')} />
				<p className='text-red-600 text-sm'>{errors.metaKey?.message || ''}</p>
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
