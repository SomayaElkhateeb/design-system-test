import ProgressCard from 'src/app/components/optimized/Cards/ProgressCard';
import data from '../../comp/data.json';
import SlideCard from 'src/app/components/page/Cards/SlideCard';
import { useTranslation } from 'react-i18next';
const AnalyticsReports = () => {
	const {t} = useTranslation()
	return <SlideCard items={data.reportsProgressData} title={t('Reports')} itemsPerSlide={4} SlideComponent={ProgressCard} />;
};

export default AnalyticsReports;
