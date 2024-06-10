import { Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import { useTranslation } from 'react-i18next';

import Tabs from 'src/app/components/optimized/Tabs/Tabs';
import RateProgram from './RateProgram';
import useTaxPrograms from './useTaxPrograms';

interface TaxesAndRatesProps {
	integrated?: boolean;
	title: string;
}

export default function TaxesAndRates({ title, integrated = false }: TaxesAndRatesProps) {
	const classes = integrated ? '' : 'global-cards';
	const { t } = useTranslation();
	const { tabsData } = useTaxPrograms('');

	return (
		<div className={classes}>
			<h3 className='title'>{t(title as any)}</h3>
			
				<Tabs
					body={
						<>
							{tabsData.map((tab) => (
								<TabPanel key={tab.value} value={tab.value}>
									<RateProgram rates={tab.rates} program={tab.label} />
								</TabPanel>
							))}
						</>
					}
				>
					{tabsData.map((tab) => (
						<Tab key={tab.value} label={t(tab.label as any)} value={tab.value} />
					))}
				</Tabs>
			
		</div>
	);
}
