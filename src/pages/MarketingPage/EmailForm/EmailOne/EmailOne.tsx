import { useState } from 'react';

import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import EmailContent from './_comp/EmailContent';
import EmailOptions from './_comp/EmailOptions';

function EmailOne() {
	const { t } = useTranslation();
	const [_, setSearchParams] = useSearchParams();

	const [emailContent, setEmailContent] = useState({
		to: '',
		subject: 'Subject',
		from: '',
		body: 'We have a surprise!',
		link: '',
	});

	const [emailOptions, setEmailOptions] = useState({
		fontSize: 16,
		textColor: '#000000',
		bgColor: '#ffffff',
		alignment: 'center',
		isBold: false,
		isItalic: false,
	});

	return (
		<section>
			{/* <SubHeader title={t('Email form')}>
				<Button variant='primary' onClick={() => setSearchParams({ subscribe: 'active' })}>
					Submit emails
				</Button>
			</SubHeader> */}

			<div className='min-h-screen bg-gray-100 p-6 flex justify-between'>
				<div className='w-1/2 bg-white p-6 rounded-lg shadow-md'>
					<EmailContent emailContent={emailContent} setEmailContent={setEmailContent} />
					<div>
						<div
							style={{
								fontSize: `${emailOptions.fontSize}px`,
								color: emailOptions.textColor,
								fontStyle: emailOptions.isItalic ? 'italic' : '',
								fontWeight: emailOptions.isBold ? 'bold' : '',
								backgroundColor: emailOptions.bgColor,
								padding: '10px',
								borderRadius: '5px',
							}}
							className={`text-${emailOptions.alignment} min-h-screen border`}
						>
							{emailContent.body}
							<p className='text-[1.3rem]'>{emailContent.subject}</p>
						</div>
					</div>
				</div>

				<EmailOptions emailOptions={emailOptions} setEmailOptions={setEmailOptions} />
			</div>
		</section>
	);
}

export default EmailOne;
