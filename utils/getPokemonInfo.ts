import { pokeApi } from '../api';
import { PokemonDetails } from '../interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
	try {
		const { data } = await pokeApi.get<PokemonDetails>(`/pokemon/${nameOrId}`);

		return {
			id: data.id,
			name: data.name,
			sprites: data.sprites,
		};
	} catch (error) {
		return null;
	}
};
