import { ViewIcon } from 'src/app/utils/icons';
import ManageAccountCard from '../Cards/ManageAccountCard';
import PopoverComponenet from '../../page/Customers/Popover';

/**
 * ViewBtn component represents a button that, when clicked, displays a view icon
 * and opens the manage account card when clicked.
 */
const ViewBtn = () => {
	return (
		<PopoverComponenet
			button={
				<>
					<p className='roundedParentIcon'>
						<ViewIcon />
					</p>
				</>
			}
		>
			<ManageAccountCard />
		</PopoverComponenet>
	);
};

export default ViewBtn;
