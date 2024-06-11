export default function LegalPageParentCard({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) {
	return (
		<div className='globalcards'>
			<p className='title'>{title}</p>
			{children}
		</div>
	);
}
