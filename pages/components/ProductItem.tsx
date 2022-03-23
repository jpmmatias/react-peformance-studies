import { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import { Props } from './AddProductToWhishList';
// import AddProductToWhishList from './AddProductToWhishList';

const AddProductToWhishList = dynamic<Props>(
	() => {
		return import('./AddProductToWhishList');
	},
	{
		loading: () => <span> carregando</span>,
	}
);

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
	const [isAddingToWishList, setisAddingToWishList] = useState(false);
	return (
		<li>
			{product.title} - <strong>{product.priceFormatted}</strong>
			<button
				onClick={() => setisAddingToWishList(true)}
				role='button'
				type='button'>
				Adicionar Produto a Wishlist
			</button>
			{isAddingToWishList && (
				<AddProductToWhishList
					onRequestClose={() => {
						setisAddingToWishList(false);
					}}
					onAddToWishList={() => onAddToWishList(product.id)}
				/>
			)}
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
