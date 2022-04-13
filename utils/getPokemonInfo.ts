import { pokeApi } from '../api';
import { PokemonDetails } from '../interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
	const { data } = await pokeApi.get<PokemonDetails>(`/pokemon/${nameOrId}`);

	return {
		id: data.id,
		name: data.id,
		sprites: data.sprites,
	};
};
