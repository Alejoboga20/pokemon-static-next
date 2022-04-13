import { useState } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { PokemonDetails } from '../../interfaces/pokemon';
import { Layout } from '../../components/layouts';
import { getPokemonInfo, localFavorites } from '../../utils';
import confetti from 'canvas-confetti';

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }: PokemonPageProps) => {
	const [isInFavorites, setIsInFavorites] = useState(localFavorites.isInFavorites(pokemon.id));

	const onToggleFavorite = () => {
		localFavorites.toggleFavorite(pokemon.id);
		setIsInFavorites(!isInFavorites);

		if (!isInFavorites) {
			confetti({
				zIndex: 999,
				particleCount: 100,
				spread: 160,
				angle: -100,
				origin: {
					x: 1,
					y: 0,
				},
			});
		}
	};

	return (
		<Layout title={pokemon.name}>
			<Grid.Container css={{ marginTop: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card hoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image
								src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
								alt={pokemon.name}
								width='100%'
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
							<Text h1 transform='capitalize'>
								{pokemon.name}
							</Text>
							<Button color='gradient' ghost={!isInFavorites} onClick={onToggleFavorite}>
								{isInFavorites ? 'Remove from Favs' : 'Save in Favs'}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites: </Text>
							<Container direction='row' display='flex' gap={0}>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

interface PokemonPageProps {
	pokemon: PokemonDetails;
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

	return {
		props: { pokemon: await getPokemonInfo(id) },
	};
};

export default PokemonPage;
