import ProgressCard from 'src/app/components/optimized/Cards/ProgressCard';
import data from '../../comp/data.json';
import SlideCard from 'src/app/components/page/Cards/SlideCard';
const AnalyticsReports = () => {
	return <SlideCard items={data.reportsProgressData} title='Title' itemsPerSlide={4} SlideComponent={ProgressCard} />;
};

export default AnalyticsReports;
