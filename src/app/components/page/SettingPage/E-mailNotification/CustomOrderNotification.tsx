import { useTranslation } from "react-i18next";

export default function CustomerOrderNotifcation() {
    //  hooks
    const {t}=useTranslation()
	return (
		<div className='global-cards'>
			<div className='flex-col-top-section-pages  gap-0'>
				<h2 className='title'>{t('Customer order notifications')}</h2>
                <p className="subtitle">{t("These email notifications are sent to customers to confirm their orders and keep them informed about the order progress")}</p>
			</div>
		</div>
	);
}
