import { socialApps } from 'src/app/utils/constants';

import MostPopularList from './comp/MostPopularList';
import SocialAppsWrapper from './comp/SocialAppsWrapper';

const Apps = () => {






	return (
		<div className='flex flex-col gap-8 p-5'>
			<MostPopularList />

			<SocialAppsWrapper
				socialApps={socialApps}
				title='Recommended'
				linkTo='/'
			/>

			<SocialAppsWrapper
				socialApps={socialApps}
				title='Reach more customers'
				linkTo='/'
			/>
		</div>
	);
};

export default Apps;
