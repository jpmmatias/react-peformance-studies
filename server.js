module.exports = () => {
	const data = {
		products: [],
	};

	for (let i = 0; i < 1000; i++) {
		data.products.push({
			id: i + 1,
			price: Math.floor(1000 * Math.random() * i + 1),
			title: `Camiseta ${i + 1}`,
		});
	}

	return data;
};
