import { getImageUrl } from 'src/app/utils';
import { transactionFormat } from '../PaymentProviders/PaymentTable/utils';

export function TransactionsBadge({ item }) {
	return (
		<span className='flex items-center rounded bg-constrained w-fit'>
			<img src={getImageUrl(`companies/${item.method}.svg`)} alt='Transaction method' />
			<span className='paragraph px-2'>{transactionFormat(item.fee)}</span>
		</span>
	);
}

export function BankBadge({ item }) {
	return <span className='rounded bg-constrained w-fit paragraph py-1 px-2'>{item}</span>;
}