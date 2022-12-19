import Grid from '@mui/material/Unstable_Grid2'
import FavoriteAnimeItem from './FavoriteAnimeItem'
import type { AnimeResponse } from '../../services/anime/animeResponse'

interface FavoriteAnimeListProps {
	data: AnimeResponse[]
}

const FavoriteAnimeList = ({ data }: FavoriteAnimeListProps): JSX.Element => (
	<Grid container spacing={1} sx={{ width: '100%', margin: '0' }}>
		{data.map((resp) => (
			<Grid key={resp.id} sx={{ width: '25%' }}>
				<FavoriteAnimeItem data={resp} />
			</Grid>
		))}
	</Grid>
)

export default FavoriteAnimeList
