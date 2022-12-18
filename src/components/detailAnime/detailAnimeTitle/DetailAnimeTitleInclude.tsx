import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import type { ApiResponse } from '../../../services/apiResponse'
import type { DetailAnimeResponse } from '../../../services/detailAnime/detailAnimeResponse'

interface DetailAnimeTitleIncludeProps {
	data: ApiResponse<DetailAnimeResponse>
}

const DetailAnimeTitleInclude = ({
	data
}: DetailAnimeTitleIncludeProps): JSX.Element => (
	<Grid container sx={{ paddingTop: '10px' }}>
		{data.included?.map((resp) => (
			<Grid key={resp.id}>
				<Typography
					sx={{
						borderLeft: '1px solid rgba(160,160, 160, 0.2)',
						padding: '0 15px',
						fontSize: '0.75em',
						'&:hover': {
							color: '#fd5529',
							cursor: 'pointer'
						}
					}}
				>
					{resp.attributes.title}
				</Typography>
			</Grid>
		))}
	</Grid>
)

export default DetailAnimeTitleInclude
