import { Grid } from '@nextui-org/react';
import { GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
	pokemons: SmallPokemon[];
}

const HomePage = ({ pokemons }: Props) => {
	return (
		<Layout title='Pokemon List'>
			<Grid.Container gap={2} justify='flex-start'>
				{pokemons.map((pokemon) => (
					<PokemonCard pokemon={pokemon} key={pokemon.id} />
				))}
			</Grid.Container>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

	const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
		...pokemon,
		id: (index + 1).toString(),
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			index + 1
		}.svg`,
	}));

	return {
		props: { pokemons },
	};
};

export default HomePage;
