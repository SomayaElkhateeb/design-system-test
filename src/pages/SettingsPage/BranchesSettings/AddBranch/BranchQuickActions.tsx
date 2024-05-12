import  {  useState } from 'react';
import { CheckBox } from 'src/app/components/optimized';

interface LocationOptions {
	isMainLocation: boolean;
	showOnFooter: boolean;
	availableForPickup: boolean;
}

export default function BranchQuickActions() {
	const [options, setOptions] = useState<LocationOptions>({
		isMainLocation: false,
		showOnFooter: false,
		availableForPickup: false,
	});

  const handleChange = (name: keyof LocationOptions) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: !prevOptions[name],
    }));
  };
	return (
		<div className='grid gap-5 col-span-3 p-4 bg-white rounded-lg border border-borders-lines'>
			<h2 className='title text-lg mb-2'>Quick Actions</h2>
			<CheckBox
				checked={options.isMainLocation}
				handleOnChange={() => handleChange('isMainLocation')}
				label='Assign as main location'
			/>
			<CheckBox
				checked={options.showOnFooter}
				handleOnChange={() => handleChange('showOnFooter')}
				label='Show on footer'
			/>
			<CheckBox
				checked={options.availableForPickup}
				handleOnChange={() => handleChange('availableForPickup')}
				label='Available for pickup'
			/>
		</div>
	);
}
