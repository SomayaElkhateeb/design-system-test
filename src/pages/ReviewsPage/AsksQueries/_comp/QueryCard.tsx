import { AskQuery, Product } from '../../_comp/data';
import QueryBody from './QueryBody';
import QueryHeader from './QueryHeader';

interface Props {
	product: Product;
	query: AskQuery;
}

const QueryCard: React.FC<Props> = ({ product, query }) => {
	return (
		<div>
			<QueryHeader {...product} {...query} />
			<QueryBody {...query} productId={product.id} />
		</div>
	);
};

export default QueryCard;
