import { Grid } from '@nextui-org/react';
import React from 'react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

export const FavoritePokemons = ({ favoritePokemons }: FavoritePokemonsProps) => {
	return (
		<Grid.Container gap={2} direction='row' justify='flex-start'>
			{favoritePokemons.map((id) => (
				<FavoriteCardPokemon pokemonId={id} key={id} />
			))}
		</Grid.Container>
	);
};

interface FavoritePokemonsProps {
	favoritePokemons: number[];
}
