import { memo } from 'react';

type product = {
	id: number;
	price: number;
	title: string;
};

const ProductItemComponent = (product: product) => {
	return (
		<li>
			{product.title} - <strong>{product.price}</strong>
		</li>
	);
};

const ProductItem = memo(ProductItemComponent, (prevProduct, nextProduct) => {
	return (
		prevProduct.id === nextProduct.id &&
		prevProduct.price === nextProduct.price &&
		prevProduct.title === nextProduct.title
	);
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
