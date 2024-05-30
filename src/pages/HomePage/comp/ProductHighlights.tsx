import { useTranslation } from 'react-i18next';
import { MobileProductViews } from 'src/app/components/optimized';
import SlideCardTabs from 'src/app/components/page/Cards/SlideCardTabs';

interface ProductProps {
	data: {
		topSellingProducts: Product[];
		topSearchProducts: Product[];
		topReviewsProducts: Product[];
	};
}

interface Product {
	name: string;
	imageUrl: string;
	category: string;
	quantity: number;
	price: number;
}

export default function ProductHighlights({ data }: ProductProps) {
	const { t } = useTranslation();

	const renderProducts = (products: Product[]) => (
		<div className='grid gap-2'>
			{products.slice(0, 3).map((product) => (
				<MobileProductViews key={product.name} {...product} />
			))}
		</div>
	);

	const slides = [
		{ title: t('Top selling'), content: renderProducts(data.topSellingProducts) },
		{ title: t('Top search'), content: renderProducts(data.topSearchProducts) },
		{ title: t('Top reviews'), content: renderProducts(data.topReviewsProducts) },
	];

	return <SlideCardTabs slides={slides} title={t('Products')} />;
}
