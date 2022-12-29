import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import DetailAnimeTitleHeader from './DetailAnimeTitleHeader'
import type { DetailAnimeResponse } from '../../../services/detailAnime/detailAnimeResponse'

interface DetailAnimeHeaderProps {
	data: DetailAnimeResponse
}

const DetailAnimeHeader = ({ data }: DetailAnimeHeaderProps): JSX.Element => {
	const titleAnime = data.attributes.canonicalTitle
	const episodeCount = data.attributes.episodeCount
	return (
		<Grid
			sx={{
				bgcolor: 'black'
			}}
		>
			<Grid
				container
				sx={{
					padding: { sm: '15px 0 15px 25px', xs: '15px' },
					color: 'rgb(190,190, 190)',
					alignItems: 'center'
				}}
			>
				<DetailAnimeTitleHeader name={'Home'} pathPage={'/'} />
				<Typography
					sx={{
						padding: '0 15px',
						fontSize: '0.8em',
						fontWeight: 'bold'
					}}
				>{`>`}</Typography>
				<DetailAnimeTitleHeader name={'Anime'} pathPage={'/anime'} />
				<Typography
					sx={{
						padding: '0 15px',
						fontSize: '0.8em',
						fontWeight: 'bold'
					}}
				>{`>`}</Typography>
				<DetailAnimeTitleHeader
					name={`${titleAnime} ตอนที่ 1-${episodeCount}`}
					pathPage={`/anime/${data.id}`}
				/>
			</Grid>
		</Grid>
	)
}

export default DetailAnimeHeader
