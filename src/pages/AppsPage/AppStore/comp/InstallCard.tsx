import { Link } from "react-router-dom";
import { Button } from "src/app/components/optimized";
import { getImageUrl } from "src/app/utils";
import { EditIcon } from "src/app/utils/icons";

interface AppData {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	status: string;
	url: string;
}

export default function InstallCard({ name, imageUrl, url }: AppData) {
	return (
		<div className='flex gap-3 p-3 bg-white border rounded-lg border-borders-lines'>
			<div className='grid place-items-center size-[40px] rounded-lg border border-light-2 overflow-hidden'>
				<img src={getImageUrl(imageUrl)} className='object-cover w-5/6' />
			</div>
			<div className=''>
				<h2 className='mb-2 title'>{name}</h2>
				<Link to={url}>
					<Button text={'Open Setup'} variant='link' LeftIcon={EditIcon} />
				</Link>
			</div>
		</div>
	);
}
