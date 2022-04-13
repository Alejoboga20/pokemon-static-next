import { useRouter } from 'next/router';
import { Grid, Card } from '@nextui-org/react';

export const FavoriteCardPokemon = ({ pokemonId }: FavoriteCardPokemonProps) => {
	const router = useRouter();

	const onFavoriteClick = () => router.push(`/pokemon/${pokemonId}`);

	return (
		<Grid key={pokemonId} xs={6} sm={3} md={2} xl={1}>
			<Card hoverable clickable css={{ padding: 10 }} onClick={onFavoriteClick}>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
					width='100%'
					height={150}
				/>
			</Card>
		</Grid>
	);
};

interface FavoriteCardPokemonProps {
	pokemonId: number;
}
