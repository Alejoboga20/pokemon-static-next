import { GetStaticProps } from 'next';
import Image from 'next/image';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
	pokemons: SmallPokemon[];
}

const HomePage = ({ pokemons }: Props) => {
	return (
		<Layout title='Pokemon List'>
			<h1>Hello Next</h1>

			<ul>
				{pokemons.map(({ id, name, img }) => (
					<li key={id}>
						#{id} {name}
						<Image src={img} width={100} height={100} />
					</li>
				))}
			</ul>
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
