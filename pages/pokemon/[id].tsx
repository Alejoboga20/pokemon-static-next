import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { PokemonDetails, SmallPokemon } from '../../interfaces/pokemon';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }: PokemonPageProps) => {
	return (
		<Layout>
			<h1>{pokemon.name}</h1>
		</Layout>
	);
};

interface PokemonPageProps {
	pokemon: SmallPokemon;
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const pokemonList = [...Array(151)].map((value, index) => `${index + 1}`);

	return {
		paths: pokemonList.map((id) => ({
			params: { id },
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const { data } = await pokeApi.get<PokemonDetails>(`/pokemon/${id}`);

	return {
		props: {
			pokemon: data,
		},
	};
};

export default PokemonPage;
