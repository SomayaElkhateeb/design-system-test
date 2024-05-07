export default function LegalPageParentCard({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) {
	return (
		<div className='rounded  border  w-ful flex flex-col gap-[1rem] p-[1rem] bg-white'>
			<p className='font-semibold text-[.9rem] text-title'>{title}</p>
			{children}
		</div>
	);
}
