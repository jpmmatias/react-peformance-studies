import { FormEvent, useState } from 'react';
import styles from '../styles/Home.module.css';
import SearchResults from './components/SearchResults';

type product = {
	id: number;
	price: number;
	title: string;
};

interface SearchResultsProps {
	results: product[];
}

export default function Home() {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState<product[]>([] as product[]);

	async function handleSearch(event: FormEvent) {
		event.preventDefault();

		if (!search.trim()) {
			return;
		}

		const response = await fetch(`http://localhost:3333/products?q=${search}`);
		const data = await response.json();
		setResults(data);
	}

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
			<SearchResults results={results} />
		</div>
	);
}
