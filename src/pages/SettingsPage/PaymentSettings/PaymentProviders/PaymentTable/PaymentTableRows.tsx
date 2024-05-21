import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import FeeDisplay from './FeeDisplay';
import RenderBanks from './RenderBanks';
import { getImageUrl } from 'src/app/utils';
import { NextIcon } from 'src/app/utils/icons';
import CreditTransactions from './CreditTransactions';
import { Button } from 'src/app/components/optimized';
import RenderMethodsTransactions from './RenderMethodsTransactions';
import { GlobalTableCell } from 'src/app/components/page/Customers/TableLayoutGlobal/base.table';

interface CreateTableRowsProps {
	data: any[];
}

export default function PaymentTableRows({ data }: CreateTableRowsProps) {
	const { t } = useTranslation();

	return data.map((e) => ({
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
				<FeeDisplay planOne={e.monthlyFees.planOne} planTwo={e.monthlyFees.planTwo} />
			</GlobalTableCell>,
			<GlobalTableCell>
				<FeeDisplay planOne={e.setupFees.planOne} planTwo={e.setupFees.planTwo} />
			</GlobalTableCell>,
			<GlobalTableCell>
				<CreditTransactions
					paymentCards={e.creditTransactions.paymentCards}
					local={e.creditTransactions.local}
					global={e.creditTransactions.global}
				/>
			</GlobalTableCell>,
			<GlobalTableCell>
				<RenderMethodsTransactions methodsTransactions={e.methodsTransactions} provider={e.provider.name}/>
			</GlobalTableCell>,
			<GlobalTableCell>
				<RenderBanks banks={e.banks} provider={e.provider.name}/>
			</GlobalTableCell>,
		],
	}));
}
