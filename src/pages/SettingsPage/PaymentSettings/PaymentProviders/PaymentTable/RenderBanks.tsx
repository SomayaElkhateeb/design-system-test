import usePopupDisplay from './usePopupDisplay';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

interface RenderBanksProps {
	banks: string[];
	provider: string;
}

export default function RenderBank({ banks, provider }: RenderBanksProps) {
	const { t } = useTranslation();
	const { displayedItems, overflowCount, handlePopups, renderPopup } = usePopupDisplay({
		limit: 6,
		title: t('Banks'),
		items: banks,
		provider: provider,
		renderItem: (item, index) => <BankBadge bank={item} key={index} />,
	});

	return (
		<div className='grid place-items-start gap-1 max-w-72'>
			<div className='flex flex-wrap gap-2'>
				{displayedItems.map((item, index) => (
					<BankBadge bank={item} key={index} />
				))}
			</div>
			{overflowCount > 0 && (
				<Button variant='link' onClick={handlePopups}>
					{overflowCount}+ more
				</Button>
			)}
			{renderPopup}
		</div>
	);
}

const BankBadge = ({ bank }) => {
	return <span className='rounded bg-constrained w-fit paragraph py-1 px-2'>{bank}</span>;
};
