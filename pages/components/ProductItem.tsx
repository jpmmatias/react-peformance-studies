type product = {
	id: number;
	price: number;
	title: string;
};

const ProductItem = (product: product) => {
	return (
		<li>
			{product.title} - <strong>{product.price}</strong>
		</li>
	);
};

export default ProductItem;
