import React from 'react';
import { Layout } from '../../components/layouts';
import { SmallPokemon } from '../../interfaces';

const PokemonPage = () => {
	return (
		<Layout>
			<h1>Hello</h1>
		</Layout>
	);
};

interface PokemonPageProps {
	pokemon: SmallPokemon;
}

export default PokemonPage;
