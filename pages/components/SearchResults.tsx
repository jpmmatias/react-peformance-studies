import ProductItem from './ProductItem';

type product = {
	id: number;
	price: number;
	title: string;
};
interface SearchResultsProps {
	results: product[];
}
const SearchResults = ({ results }: SearchResultsProps) => {
	return (
		<ul>
			{results.map((product) => (
				<ProductItem {...product} key={product.id} />
			))}
		</ul>
	);
};

export default SearchResults;
