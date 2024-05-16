import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { getImageUrl } from 'src/app/utils';
import { paymentProvidersData } from '../../data';
import { NextIcon } from 'src/app/utils/icons';
import { Button } from 'src/app/components/optimized';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';

const feeFormat = (fee: string | number): string => {
	return fee ? `SAR ${fee}` : 'free';
};

const remainingCount = (items: string[], limit: number): JSX.Element | null => {
	return items.length > limit ? (
		<span className='paragraph text-primary'>{items.length - limit}+ more</span>
	) : null;
};
interface Fee {
	flatFee: string | number;
	percentageFee: string | number;
}
const transactionFormat = (fee: Fee) => {
	const { flatFee, percentageFee } = fee;
	if (flatFee && percentageFee) {
		return `${percentageFee}% + SAR ${flatFee}`;
	} else if (flatFee && !percentageFee) {
		return `SAR ${flatFee}`;
	} else if (!flatFee && percentageFee) {
		return `${percentageFee}%`;
	} else {
		return 'Free';
	}
};

const methodsTransactions = (methodsTransactions) => {
	const limit = 4;
	return (
		<div className='grid place-items-start gap-1 max-w-72'>
			<div className='flex flex-wrap gap-2'>
				{methodsTransactions.slice(0, limit).map((item, index) => (
					<span key={index} className='flex items-center rounded bg-constrained w-fit'>
						<img src={getImageUrl(`companies/${item.method}.svg`)} alt='Transaction method' />
						<span className='paragraph px-2'>{transactionFormat(item.fee)}</span>
					</span>
				))}
			</div>
			{remainingCount(methodsTransactions, limit)}
		</div>
	);
};

const banks = (banks: string[]) => {
	const limit = 6;
	const banksDisplay = banks.slice(0, limit).map((item, index) => (
		<span className='rounded bg-constrained w-fit paragraph py-1 px-2' key={index}>
			{item}
		</span>
	));

	return (
		<div className='grid place-items-start gap-1 max-w-72'>
			<div className='flex flex-wrap gap-2'>{banksDisplay}</div>
			{remainingCount(banks, limit)}
		</div>
	);
};

export default function PaymentTable() {
	const language = UseLanguage();
	const { t } = useTranslation();

	const paymentTableHeaders = [
		{ title: t('Provider') },
		{ title: t('Monthly fees ') },
		{ title: t('setup fees') },
		{ title: t('Credit transactions') },
		{ title: t('Methods transactions') },
		{ title: t('Banks') },
	];

	return (
		<div className='print-only'>
			<BaseTable
				language={language}
				color='#55607A'
				headers={paymentTableHeaders.map((h) => h)}
				rows={paymentProvidersData?.map((e) => {
					return {
						item: e,
						elements: [
							<GlobalTableCell>
								<div className='space-y-1'>
									<img src={getImageUrl(`paymentProviders/${e.provider.name}.svg`)} alt='' />
									<Link to={e.provider.url}>
										<Button variant='link' RightIcon={NextIcon} text={t('Setup')} />
									</Link>
								</div>
							</GlobalTableCell>,
							<GlobalTableCell>
								<span className='paragraph capitalize'>
									{feeFormat(e.monthlyFees.planOne)}
									{e.monthlyFees.planTwo && <span> - {feeFormat(e.monthlyFees.planTwo)}</span>}
								</span>
							</GlobalTableCell>,
							<GlobalTableCell>
								<span className='paragraph capitalize'>
									{feeFormat(e.setupFees.planOne)}
									{e.setupFees.planTwo && <span> - {feeFormat(e.setupFees.planTwo)}</span>}
								</span>
							</GlobalTableCell>,
							<GlobalTableCell>
								<div className='grid gap-2'>
									<div className='flex gap-1'>
										{e.creditTransactions.paymentCards.map((item, index) => (
											<img
												key={index}
												src={getImageUrl(`companies/${item}.svg`)}
												alt='paymentCard'
											/>
										))}
									</div>
									<p className='paragraph text-subtitle'>
										Local:&nbsp;
										<span className='paragraph'>
											{transactionFormat(e.creditTransactions.local)}
										</span>
									</p>
									<p className='paragraph text-subtitle'>
										Global:&nbsp;
										<span className='paragraph'>
											{transactionFormat(e.creditTransactions.global)}
										</span>
									</p>
								</div>
							</GlobalTableCell>,
							<GlobalTableCell>{methodsTransactions(e.methodsTransactions)}</GlobalTableCell>,
							<GlobalTableCell>{banks(e.banks)}</GlobalTableCell>,
						],
					};
				})}
			/>
		</div>
	);
}
