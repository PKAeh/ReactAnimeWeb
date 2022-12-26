import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import type { DetailAnimeEpisodesResponse } from '../../../services/detailAnimeEpsiodes/detailAnimeEpisodesResponse'

interface DetailAnimeEpisodeItemProps {
	nameAnime: string
	imageCoverAnime: string
	episodeAnime: DetailAnimeEpisodesResponse
}

const DetailAnimeEpisodeItem = ({
	nameAnime,
	imageCoverAnime,
	episodeAnime
}: DetailAnimeEpisodeItemProps): JSX.Element => {
	const theme = useTheme()
	const imageAnimeEpisode =
		episodeAnime.attributes.thumbnail?.original ?? imageCoverAnime
	const episode = episodeAnime.attributes.number
	return (
		<Grid
			container
			sx={{
				alignItems: 'center',
				marginTop: '8px',
				paddingBottom: '6px',
				borderBottom: '1px solid rgba(160,160, 160, 0.2)'
			}}
		>
			<Grid
				sx={{
					width: '100px',
					height: '60px',
					backgroundImage: `url("${imageAnimeEpisode}")`,
					backgroundSize: 'cover'
				}}
			></Grid>
			<Grid>
				<Typography
					sx={{
						padding: '0 20px',
						fontWeight: 'bold',
						width: '50px',
						textAlign: 'center',
						color: 'rgb(190,190, 190)',
						cursor: 'default',
						fontSize: '0.85em'
					}}
				>
					0 - {episode}
				</Typography>
			</Grid>
			<Grid>
				<Typography
					sx={{
						color: 'white',
						fontSize: '0.9em',
						borderLeft: '1px solid rgba(160,160, 160, 0.2)',
						paddingLeft: '15px',
						'&:hover': {
							color: theme.palette.animeRed?.main,
							cursor: 'pointer'
						}
					}}
				>
					{nameAnime} ตอนที่ {episode}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default DetailAnimeEpisodeItem
