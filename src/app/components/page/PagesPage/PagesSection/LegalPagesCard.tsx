export default function LegalPagesCard({ img, header }: { header: string; img: string }) {
	return (
		<div className='rounded  border  w-ful flex  items-center gap-[.7rem] p-[1rem]'>
			<img src={img} loading='lazy' alt='img'  className="w-[2rem] h-[2rem]"/>
			<p className='font-semibold text-[.9rem] text-title'>{header}</p>
		</div>
	);
}
