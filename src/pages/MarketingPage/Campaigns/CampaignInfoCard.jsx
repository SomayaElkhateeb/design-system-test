

const CampaignInfoCard = ({ logoSrc, platformName, data }) => {
	return (
		<div className='p-3 rounded-lg flex items-center bg-white mb-3 border border-borders-lines'>
			<div className='flex items-center mr-4'>
				<img src={logoSrc} alt='Platform Logo' className='h-8 w-8' />
				<span className='ml-2 text-gray-600'>{platformName}</span>
			</div>
			<div className='flex justify-around flex-grow'>
				{data.map((item, index) => (
					<div key={index}>
						<div className='paragraph'>{item.label}</div>
						<div className='paragraph text-title'>{item.value}</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default CampaignInfoCard;
CampaignInfoCard.defaultProps = {
	logoSrc: '/logo.png',
	platformName: 'Facebook',
	data: [
		{ label: 'Created at', value: '24 Nov 2020' },
		{ label: 'Ends at', value: '24 Nov 2021' },
		{ label: 'Daily Budget', value: 'SAR 100.00' },
		{ label: 'Ad Impressions', value: 'SAR 2000.00' },
	],
};
