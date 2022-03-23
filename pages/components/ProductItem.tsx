import { memo } from 'react';

type product = {
	id: number;
	price: number;
	title: string;
	priceFormatted: string;
};

interface props {
	product: product;
	onAddToWishList: (id: number) => void;
}

const ProductItemComponent = ({ product, onAddToWishList }: props) => {
	return (
		<li>
			{product.title} - <strong>{product.priceFormatted}</strong>
			<button
				onClick={() => onAddToWishList(product.id)}
				role='button'
				type='button'>
				Add Whitelist
			</button>
		</li>
	);
};

const ProductItem = memo(ProductItemComponent, (prev, next) => {
	return Object.is(prev.product, next.product);
});

export default ProductItem;

// O que o react faz:
// 1 - Cria uma nova versão do componenete
// 2 - Compara com a versão anterior
// 3 - Se houverem alterações, vai atualizar o que alterou

// Quando usar Memo
// 1 - Componentes funcionais puros -> Quando componente com os mesmos inputs, volta com o mesmo resultado
// 2 -  Renderizam demais
// 3 - Compnentes grandes
