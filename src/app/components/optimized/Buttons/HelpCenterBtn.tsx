import { FaqIcon } from 'src/app/utils/icons';
import HelpCenterCard from '../Cards/HelpCenterCard';
import PopoverComponenet from '../../page/Customers/Popover';
import { useState } from 'react';

/**
 * HelpCenterBtn component represents a button that, when clicked, displays a FAQ icon
 * and opens the help center card when clicked.
 */
const HelpCenterBtn = () => {
	const [show, setShow] = useState(false);

	return (
		<PopoverComponenet
			close={() => setShow(show)}
			button={
				<>
					<span className='roundedParentIcon'>
						<FaqIcon />
					</span>
				</>
			}
		>
			<HelpCenterCard onClose={() => setShow(true)} />
		</PopoverComponenet>
	);
};

export default HelpCenterBtn;
