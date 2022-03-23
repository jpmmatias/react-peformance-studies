import { FormEvent, useCallback, useState } from 'react';
import styles from '../styles/Home.module.css';
import SearchResults from './components/SearchResults';

type product = {
	id: number;
	price: number;
	priceFormatted: string;
	title: string;
};

interface SearchResultsProps {
	totalPrice: number;
	data: product[];
}

export default function Home() {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState<SearchResultsProps>({
		data: [],
		totalPrice: 0,
	} as SearchResultsProps);

	async function handleSearch(event: FormEvent) {
		event.preventDefault();

		if (!search.trim()) {
			return;
		}

		const response = await fetch(`http://localhost:3333/products?q=${search}`);
		const data = await response.json();

		const formatter = new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});

		const products = data.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			priceFormatted: formatter.format(product.price),
		}));

		const totalPrice = data.reduce((total, product) => {
			return total + product.price;
		}, 0);

		setResults({ totalPrice, data: products });
	}

	const addToWhishListh = useCallback(async (id: number) => {
		console.log(id);
	}, []);

	return (
		<div className={styles.container}>
			<h1>Search</h1>
			<form onSubmit={handleSearch}>
				<input
					type='text'
					value={search}
					onChange={({ target: { value } }) => {
						setSearch(value);
					}}
				/>
				<button type='submit'>Buscar</button>
			</form>
			<SearchResults
				onAddToWishList={addToWhishListh}
				results={results.data}
				totalPrice={results.totalPrice}
			/>
		</div>
	);
}
