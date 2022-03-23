import { List, ListRowRenderer, AutoSizer } from 'react-virtualized';
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
	const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
		return (
			<div key={key} style={style}>
				<ProductItem
					onAddToWishList={onAddToWishList}
					product={results[index]}
				/>
			</div>
		);
	};

	return (
		<div style={{ width: '90vw', height: '90vh' }}>
			<h2>{totalPrice}</h2>
			<AutoSizer>
				{({ height, width }) => (
					<List
						height={height}
						rowHeight={30}
						width={width}
						overscanRowCount={5}
						rowCount={results.length}
						rowRenderer={rowRenderer}
					/>
				)}
			</AutoSizer>
		</div>
	);
};

export default SearchResults;

/** Quando usar useMemo
 * 1 - Calculos pesados[
 * 2 Igualdade referencial (quando a gente repassa aquela informação a um componente filho)
 */
