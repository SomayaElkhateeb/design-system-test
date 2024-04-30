import { getImageUrl } from 'src/app/utils';
import LegalPagesCard from './LegalPagesCard';

export default function LegalPagesSection() {
	const data = [
		{
			title: 'Return policy',
			img: getImageUrl('pagesPage/returnPolicy.svg'),
		},
		{
			title: 'Privacy policy',
			img: getImageUrl('pagesPage/privacypolicy.svg'),
		},
		{
			title: 'Terms of service',
			img: getImageUrl('pagesPage/terms.svg'),
		},
		{
			title: 'Shipping policy',
			img: getImageUrl('pagesPage/shipping.svg'),
		},
	];
	return (
		<div className='rounded  border  w-ful flex flex-col gap-[1rem] p-[1rem]'>
			<p className='font-semibold text-[.9rem] text-title'>Legal pages</p>
			<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4'>
				{data?.map((el, i) => (
					<LegalPagesCard key={i} header={el.title} img={el.img} />
				))}
			</div>
		</div>
	);
}
