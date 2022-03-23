import ProductItem from './ProductItem';

type product = {
	id: number;
	price: number;
	title: string;
	priceFormatted: string;
};
interface SearchResultsProps {
	results: product[];
	totalPrice: number;
	onAddToWishList: (id: number) => void;
}
const SearchResults = ({
	results,
	onAddToWishList,
	totalPrice,
}: SearchResultsProps) => {
	return (
		<div>
			<h2>{totalPrice}</h2>
			<ul>
				{results.map((product) => (
					<ProductItem
						onAddToWishList={onAddToWishList}
						product={product}
						key={product.id}
					/>
				))}
			</ul>
		</div>
	);
};

export default SearchResults;

/** Quando usar useMemo
 * 1 - Calculos pesados[
 * 2 Igualdade referencial (quando a gente repassa aquela informação a um componente filho)
 */
