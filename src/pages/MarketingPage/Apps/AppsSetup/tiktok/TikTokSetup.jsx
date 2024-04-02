import { Button } from 'src/app/components/optimized';
import { useTikTokSetup } from './useTikTokSetup';
import SetpLogo from './SetpLogo';

const TikTokSetup = ({ platform, confirmTikTok }) => {
	const { mega_title, tikTok_settings } = useTikTokSetup(platform);
	const { settings_title, tikTok_intro, privacy_notice, agreement_terms } =
		tikTok_settings;

	return (
		<section className='w-full p-5'>
			<div className='w-2/5 m-auto'>
				<div className='bg-white rounded-lg overflow-hidden border mb-5'>
					<h2 className='font-semibold text-xl text-center p-5'>
						{mega_title}
					</h2>
					<div className='w-2/4 m-auto mb-5'>
						<SetpLogo iconPath='social/tiktok.svg' />
					</div>
				</div>

				<div className='bg-white rounded-lg overflow-hidden border mb-5'>
					<h2 className='font-semibold text-lg px-5 my-5'>{settings_title}</h2>
					{tikTok_intro.map((item) => (
						<div
							className='border-b flex justify-between items-center p-5'
							key={item.title}
						>
							<h3 className='text-lg'>{item.title}</h3>
							<p className='text-lg text-primary cursor-pointer'>
								{item.linkText}
							</p>
						</div>
					))}
				</div>

				<div className='p-3'>
					<p>
						{privacy_notice.text}{' '}
						<span className='text-primary cursor-pointer'>
							{privacy_notice.linkText}
						</span>
					</p>
				</div>

				<div className='flex space-x-3 mt-8 justify-end'>
					<Button text='Discard' variant='secondaryBtn' />
					<Button
						text='Add Sales Channel'
						onClick={() => confirmTikTok(true)}
					/>
				</div>

				<div className='p-3 m-auto text-center'>
					<p>
						{agreement_terms.text}{' '}
						<span className='text-primary cursor-pointer'>
							{agreement_terms.linkText}
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default TikTokSetup;
