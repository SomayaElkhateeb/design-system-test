import { useTranslation } from 'react-i18next';
import { Button, ClientBox, HeaderSettings } from 'src/app/components/optimized';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';
import { IoMdAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function Users() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	return (
		<div className='flex-col-top-section-pages'>
			<HeaderSettings title={t('users & Permissions')} />
			<div className='flex-col-top-section-pages container mx-auto'>
				{/*  owner section */}
				<OwnerAndStaff
					title={t('Owner')}
					describtion={t('Add users and define what can they see or do in your store.')}
				>
					<div className='flex justify-between items-center '>
						<ClientBox
							title='Mohamed Samy'
							details='Active 3 days ago'
							avatar={<Avatar variant='user' firstName='samy' />}
						/>
						<Button variant='tertiary' onClick={() => navigate('transferOwnership')}>
							{t('Transfer Ownership')}
						</Button>
					</div>
				</OwnerAndStaff>

				{/*  staff  section*/}
				<OwnerAndStaff
					title={t('Staff')}
					describtion={t('Add users and define what can they see or do in your store.')}
				>
					<div className='flex-col-top-section-pages '>
						<div className='flex justify-between items-center '>
							<ClientBox
								title='Ahmed Seilamn'
								details='Marketeer'
								avatar={<Avatar variant='user' firstName='Ahmed' />}
							/>
							<div className='flex items-center gap-2'>
								<p>{t('Active 3 days ago')}</p>
								<Button variant='secondary'>{t('manage')}</Button> {/* link */}
							</div>
						</div>
						<hr />
						<div>
							<Button
								variant='primary'
								LeftIcon={IoMdAddCircle}
								onClick={() => navigate('addStuff')}
							>
								{t('add staff')}
							</Button>
						</div>
					</div>
				</OwnerAndStaff>
			</div>
		</div>
	);
}

function OwnerAndStaff({
	title,
	describtion,
	children,
}: {
	title: string;
	describtion: string;
	children: React.ReactNode;
}) {
	return (
		<div className='cardDetails-sharedClass p-5  flex-col-top-section-pages gap-2'>
			<div className='flex-col-top-section-pages gap-0'>
				<h2 className='title'>{title}</h2>
				<p className='text-subtitle text-sm py-3'>{describtion}</p>
			</div>

			{children}
		</div>
	);
}
