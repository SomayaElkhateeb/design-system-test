import { Button, SubHeader } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import Business from './_comp/Business';
import Location from './_comp/Location';
import { useState } from 'react';

export default function TikTokCatalog() {
	const { t } = useTranslation();
	const [isCatalogLocationChecked, setIsCatalogLocationChecked] = useState(false);
	const [isBusinessCenterChecked, setBusinessCenterChecked] = useState(false);
	return (
		<>
			<SubHeader title={t('Setup Marketing Catalog')} />
			<section className='p-5 w-[90%] lg:w-[60%] mx-auto flex flex-col gap-4'>
				<h2 className='title text-lg'>{t('Set Up Business Marketing Catalog')} </h2>
				<Business setBusinessCenterChecked={setBusinessCenterChecked} />
				<Location setIsCatalogLocationChecked={setIsCatalogLocationChecked} />

				{isBusinessCenterChecked && isCatalogLocationChecked && (
					<div className='flex justify-end'>
						<Button>{t('Finish setup')}</Button>
					</div>
				)}
			</section>
		</>
	);
}
