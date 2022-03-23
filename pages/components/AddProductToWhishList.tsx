export type Props = {
	onAddToWishList: () => void;
	onRequestClose: () => void;
};

function AddProductToWhishList({ onAddToWishList, onRequestClose }: Props) {
	return (
		<span>
			Deseja adicionar aos favoritos?
			<button onClick={onAddToWishList}>Sim</button>
			<button onClick={onRequestClose}>Não</button>
		</span>
	);
}

export default AddProductToWhishList;
