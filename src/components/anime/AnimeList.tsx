import Grid from '@mui/material/Unstable_Grid2'
import AnimeItem from './AnimeItem'
import type { AnimeResponse } from '../../services/anime/animeResponse'

interface AnimeListProps {
	data: AnimeResponse[]
}

const AnimeList = ({ data }: AnimeListProps): JSX.Element => (
	<Grid container spacing={1} sx={{ width: '100%', margin: '0' }}>
		{data.map((resp) => (
			<Grid key={resp.id} sx={{ width: '25%' }}>
				<AnimeItem data={resp} />
			</Grid>
		))}
	</Grid>
)

export default AnimeList
