import { useTranslation } from 'react-i18next';

export default function useAddOrder() {
	const { t } = useTranslation();
	const customerOptions = [
		{ value: 'fashion', label: t('Fashion') },
		{ value: 'electronics', label: t('Electronics') },
		{ value: 'groceries', label: t('Groceries') },
	];
	return {customerOptions};
}
