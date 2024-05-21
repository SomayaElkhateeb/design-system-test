import { getImageUrl } from 'src/app/utils';
import { Button } from 'src/app/components/optimized';
import { transactionFormat } from './utils';
import usePopupDisplay from './usePopupDisplay';
import { useTranslation } from 'react-i18next';

interface Fee {
	flatFee: string | number;
	percentageFee: string | number;
}
interface MethodsTransaction {
	method: string;
	fee: Fee;
}
interface RenderMethodsTransactionsProps {
	methodsTransactions: MethodsTransaction[];
	provider: string;
}

export default function RenderMethodsTransactions({
	methodsTransactions,
	provider,
}: RenderMethodsTransactionsProps) {
	const { t } = useTranslation();
	const { displayedItems, overflowCount, handlePopups, renderPopup } = usePopupDisplay({
		items: methodsTransactions,
		title: t('Methods transactions'),
		limit: 4,
		provider: provider,
		renderItem: (item, index) => <TransactionsBadge item={item} key={index} />,
	});

	return (
		<div className='grid place-items-start gap-1 max-w-72'>
			<div className='flex flex-wrap gap-2'>
				{displayedItems.map((item, index) => (
					<TransactionsBadge item={item} key={index} />
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

const TransactionsBadge = ({ item }: MethodsTransaction) => {
	return (
		<span className='flex items-center rounded bg-constrained w-fit'>
			<img src={getImageUrl(`companies/${item.method}.svg`)} alt='Transaction method' />
			<span className='paragraph px-2'>{transactionFormat(item.fee)}</span>
		</span>
	);
};
