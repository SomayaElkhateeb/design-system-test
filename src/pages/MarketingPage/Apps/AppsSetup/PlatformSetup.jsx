import { VerticalTabs } from 'src/app/components/optimized';
import { getFacebookSetup } from './facebook/getFacebookSetup';
import { getGoogleSetup } from './google/getGoogleSetup';
import TikTokSetup from './tiktok/TikTokSetup';
import { getTikTokSetup } from './tiktok/comp/getTikTokSetup';
import { useSearchParams } from 'react-router-dom';

const PlatformSetup = ({ platform }) => {
	const [searchParams] = useSearchParams();
	const hasConfirmed = searchParams.get('add_channel') === 'true';

	let title, tabs;

	switch (platform) {
		case 'facebook':
			({ facebook_title: title, facebook_tabs: tabs } = getFacebookSetup(platform));
			break;
		case 'google':
			({ google_title: title, google_tabs: tabs } = getGoogleSetup(platform));
			break;
		case 'tikTok':
			({ tikTok_title: title, tikTok_tabs: tabs } = getTikTokSetup(platform));
			break;
		default:
			return <section>All</section>;
	}

	return (
		<section>
			<div className='p-4 text-black bg-white'>
				<h3 className='text-xl font-medium'>{title}</h3>
			</div>
			<div className='bg-[#F9FAFC] p-4 flex flex-col'>
				{platform === 'tikTok' && !hasConfirmed ? <TikTokSetup platform={platform} /> : <VerticalTabs tabs={tabs} />}
			</div>
		</section>
	);
};

export default PlatformSetup;
