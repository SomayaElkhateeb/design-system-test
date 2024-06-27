import { useState } from 'react';

import { Button, SubHeader } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import EmailContent from './_comp/EmailContent';
import EmailOptions from './_comp/EmailOptions';

function EmailForm() {
	const { t } = useTranslation();
	const [_, setSearchParams] = useSearchParams();

	return (
		<>
			<SubHeader title={t('Email Form')}>
				<Button variant='primary' onClick={() => setSearchParams({ subscribe: 'active' })}>
					{t('submit emails')}
				</Button>
			</SubHeader>

			<section className='custom_container custom-grid-parent py-5'>
				<div className='grid-left'>
					<EmailContent />
				</div>
				<div className='grid-right'>
					<EmailOptions />
				</div>

				{/* <div>
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
					</div> */}
			</section>
		</>
	);
}

export default EmailForm;
