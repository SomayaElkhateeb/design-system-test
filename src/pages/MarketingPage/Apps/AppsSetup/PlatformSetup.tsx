import { useSearchParams } from 'react-router-dom';
import useMarketingSetup from './_hook/useMarketingSetup';
import TikTokSales from './tiktok/TikTokSales';
import TikTokCatalog from './tiktok/TikTokCatalog';

interface PlatformSetupProps {
	platform: string;
}

const PlatformSetup: React.FC<PlatformSetupProps> = ({ platform }) => {
	const { title, renderSetupOrTabs } = useMarketingSetup(platform);
	const [searchParams] = useSearchParams();
	const featuresManage = searchParams.get('features_manage') === 'active';
	const catalogMarketing = searchParams.get('catalog_marketing') === 'active';

	return (
		<>
			{!featuresManage && !catalogMarketing && (
				<section>
					<div className='p-4 text-black bg-white'>
						<h3 className='text-xl font-medium'>{title}</h3>
					</div>
					<div className='bg-[#F9FAFC] p-4 flex flex-col'>{renderSetupOrTabs()}</div>
				</section>
			)}
			{featuresManage && (
				<section>
					{platform === 'tikTok' && <TikTokSales />}
					{/* {platform === 'snapchat' && <SnapchatSales />} */}
				</section>
			)}
			{catalogMarketing && (
				<section>
					{platform === 'tikTok' && <TikTokCatalog />}
					{/* {platform === 'snapchat' && <SnapchatCatalog />} */}
				</section>
			)}
		</>
	);
};

export default PlatformSetup;
