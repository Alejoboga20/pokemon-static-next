const toggleFavorite = (id: number): void => {
	console.log('toggleFavorite');

	let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

	if (favorites.includes(id)) {
		favorites = favorites.filter((pokeId) => pokeId !== id);
	} else {
		favorites.push(id);
	}

	localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isInFavorites = (id: number): boolean => {
	/* To only run in client side */
	if (typeof window === 'undefined') return false;

	const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

	return favorites.includes(id);
};

const pokemons = (): number[] => {
	return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default { toggleFavorite, isInFavorites, pokemons };
