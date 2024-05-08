import { CheckIcon } from 'src/app/utils/icons';

export default function Badge({ status }: { status: string }) {
	const installStyle = 'text-pri-hover bg-light-3 ';
	const freeStyle = 'bg-sec-light text-sec-hover';
	const mainClass = `flex justify-center items-center w-fit py-[3px] px-[13px] paragraph rounded-full capitalize ${handelStatusClass()}`;

	//  handel style of div related to status case
	function handelStatusClass() {
		let style = '';
		switch (status) {
			case 'installed':
				{
					style = installStyle;
				}
				break;
			case 'free': {
				style = freeStyle;
			}
		}
		return style;
	}

	return (
		<div className={mainClass}>
			{status === 'installed' && <CheckIcon className='fill-pri-hover' />}
			<p>{status}</p>
		</div>
	);
}
