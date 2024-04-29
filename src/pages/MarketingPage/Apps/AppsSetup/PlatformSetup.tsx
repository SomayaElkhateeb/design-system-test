import { VerticalTabs } from 'src/app/components/optimized';
import { getFacebookSetup } from './facebook/getFacebookSetup';
import { getGoogleSetup } from './google/getGoogleSetup';
import TikTokSetup from './tiktok/TikTokSetup';
import { getTikTokSetup } from './tiktok/_comp/getTikTokSetup';
import { useSearchParams } from 'react-router-dom';
import SnapchatSetup from './snapchat/SnapchatSetup';
import { getSnapchatSetup } from './snapchat/_comp/getSnapchatSetup';
import MailchimpSetup from './mailchimp/MailchimpSetup';
import { getMailchimpSetup } from './mailchimp/_comp/getMailchimpSetup';
import SendgridSetup from './sendgrid/SendgridSetup';
import { getSendgridSetup } from './sendgrid/_comp/getSendgridSetup';

interface PlatformSetupProps {
	platform: string;
}

const PlatformSetup: React.FC<PlatformSetupProps> = ({ platform }) => {
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
		case 'snapchat':
			({ snapchat_title: title, snapchat_tabs: tabs } = getSnapchatSetup(platform));
			break;
		case 'mailchimp':
			({ mailchimp_title: title, mailchimp_tabs: tabs } = getMailchimpSetup(platform));
			break;
		case 'sendGrid':
			({ sendgrid_title: title, sendgrid_tabs: tabs } = getSendgridSetup(platform));
			break;
		default:
			return <section>All</section>;
	}
console.log('title', title);

	const renderSetupOrTabs = () => {
		if (!hasConfirmed) {
			switch (platform) {
				case 'tikTok':
					return <TikTokSetup platform={platform} />;
				case 'snapchat':
					return <SnapchatSetup platform={platform} />;
				case 'mailchimp':
					return <MailchimpSetup platform={platform} />;
				case 'sendGrid':
					return <SendgridSetup platform={platform} />;
				default:
					return <VerticalTabs tabs={tabs} />;
			}
		} else {
			return <VerticalTabs tabs={tabs} />;
		}
	};

	return (
		<section>
			<div className='p-4 text-black bg-white'>
				<h3 className='text-xl font-medium'>{title}</h3>
			</div>
			<div className='bg-[#F9FAFC] p-4 flex flex-col'>{renderSetupOrTabs()}</div>
		</section>
	);
};

export default PlatformSetup;
