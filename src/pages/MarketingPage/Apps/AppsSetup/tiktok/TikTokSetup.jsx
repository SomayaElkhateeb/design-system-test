import { Button } from 'src/app/components/optimized';
import { useTikTokSetup } from './comp/useTikTokSetup';
import SetpLogo from '../comp/SetupLogo';
import { useNavigate, useSearchParams } from 'react-router-dom';

const TikTokSetup = ({ platform }) => {
	const [_, setSearchParams] = useSearchParams();

	const navigate = useNavigate();

	const { mega_title, tikTok_settings } = useTikTokSetup(platform);
	const { settings_title, tikTok_intro, privacy_notice, agreement_terms } =
		tikTok_settings;

	return (
		<section className='w-full p-5'>
			<div className='w-2/5 m-auto'>
				<div className='mb-5 overflow-hidden bg-white border rounded-lg'>
					<h2 className='p-5 text-xl font-semibold text-center'>
						{mega_title}
					</h2>
					<div className='w-2/4 m-auto mb-5'>
						<SetpLogo iconPath='social/tiktok.svg' />
					</div>
				</div>

				<div className='mb-5 overflow-hidden bg-white border rounded-lg'>
					<h2 className='px-5 my-5 text-lg font-semibold'>{settings_title}</h2>
					{tikTok_intro.map((item) => (
						<div
							className='flex items-center justify-between p-5 border-b'
							key={item.title}
						>
							<h3 className='text-lg'>{item.title}</h3>
							<p className='text-lg cursor-pointer text-primary'>
								{item.linkText}
							</p>
						</div>
					))}
				</div>

				<div className='p-3'>
					<p>
						{privacy_notice.text}{' '}
						<span className='cursor-pointer text-primary'>
							{privacy_notice.linkText}
						</span>
					</p>
				</div>

				<div className='flex justify-end mt-8 space-x-3'>
					<Button
						variant='secondaryBtn'
						onClick={() => navigate('/apps/tiktok')}
					>
						Discard
					</Button>
					<Button onClick={() => setSearchParams({ add_channel: 'true' })}>
						Add Sales Channel
					</Button>
				</div>

				<div className='p-3 m-auto text-center'>
					<p>
						{agreement_terms.text}{' '}
						<span className='cursor-pointer text-primary'>
							{agreement_terms.linkText}
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default TikTokSetup;
