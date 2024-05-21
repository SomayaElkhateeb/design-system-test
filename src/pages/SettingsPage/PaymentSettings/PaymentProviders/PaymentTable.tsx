import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getImageUrl } from 'src/app/utils';
import { NextIcon } from 'src/app/utils/icons';
import { paymentProvidersData } from '../../data';
import { Button } from 'src/app/components/optimized';
import GlobalDialog from 'src/app/components/Dialogs/GlobalDialog';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';

const style = {
	width: { md: '40rem', xs: '22rem' },
};
const feeFormat = (fee: string | number): string => {
	return fee ? `SAR ${fee}` : 'free';
};

const remainingCount = (
	items: string[],
	limit: number,
	handlePopups: () => void,
): JSX.Element | null => {
	return items.length > limit ? (
		<Button variant='link' onClick={handlePopups}>
			{items.length - limit}+ more
		</Button>
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

const methodsTransactions = (paymentMethodsTransactions) => {
	const [isOpen, setIsOpen] = useState(false);
	const handlePopups = () => {
		setIsOpen(!isOpen);
	};
	const limit = 4;
	return (
		<div className='grid place-items-start gap-1 max-w-72'>
			<div className='flex flex-wrap gap-2'>
				{paymentMethodsTransactions.slice(0, limit).map((item, index) => (
					<span key={index} className='flex items-center rounded bg-constrained w-fit'>
						<img src={getImageUrl(`companies/${item.method}.svg`)} alt='Transaction method' />
						<span className='paragraph px-2'>{transactionFormat(item.fee)}</span>
					</span>
				))}
			</div>
			{remainingCount(paymentMethodsTransactions, limit, handlePopups)}
			<GlobalDialog openDialog={isOpen} handleClose={handlePopups} style={style}>
				{paymentMethodsTransactions.map((item, index) => (
					<span key={index} className='flex items-center rounded bg-constrained w-fit'>
						<img src={getImageUrl(`companies/${item.method}.svg`)} alt='Transaction method' />
						<span className='paragraph px-2'>{transactionFormat(item.fee)}</span>
					</span>
				))}
			</GlobalDialog>
		</div>
	);
};

const banks = (banks: string[]) => {
	const [isOpen, setIsOpen] = useState(false);
	const handlePopups = () => {
		setIsOpen(!isOpen);
	};
	const limit = 6;
	return (
		<div className='grid place-items-start gap-1 max-w-72'>
			<div className='flex flex-wrap gap-2'>
				{/* {banksDisplay} */}
				{banks.slice(0, limit).map((item) => (
					<span key={item} className='rounded bg-constrained w-fit paragraph py-1 px-2'>
						{item}
					</span>
				))}
			</div>
			{remainingCount(banks, limit, handlePopups)}
			<GlobalDialog openDialog={isOpen} handleClose={handlePopups} style={style}>
				{banks.map((item) => (
					<span key={item} className='rounded bg-constrained w-fit paragraph py-1 px-2'>
						{item}
					</span>
				))}
			</GlobalDialog>
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
							<GlobalTableCell>{methodsTransactions(e.paymentMethodsTransactions)}</GlobalTableCell>,
							<GlobalTableCell>{banks(e.banks)}</GlobalTableCell>,
						],
					};
				})}
			/>
		</div>
	);
}
