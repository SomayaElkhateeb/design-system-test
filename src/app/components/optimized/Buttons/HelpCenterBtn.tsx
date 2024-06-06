import { FaqIcon } from 'src/app/utils/icons';
import HelpCenterCard from '../Cards/HelpCenterCard';
import PopoverComponenet from '../../page/Customers/Popover';

/**
 * HelpCenterBtn component represents a button that, when clicked, displays a FAQ icon
 * and opens the help center card when clicked.
 */
const HelpCenterBtn = () => {
	return (
		<PopoverComponenet
			button={
				<>
					<span className='roundedParentIcon'>
						<FaqIcon />
					</span>
				</>
			}
		>
			<HelpCenterCard />
		</PopoverComponenet>
	);
};

export default HelpCenterBtn;
