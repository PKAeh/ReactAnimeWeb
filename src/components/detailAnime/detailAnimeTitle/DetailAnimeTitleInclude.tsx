import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import { createSearchParams, useNavigate } from 'react-router-dom'
import type { ApiResponse } from '../../../services/apiResponse'
import type { DetailAnimeResponse } from '../../../services/detailAnime/detailAnimeResponse'

interface DetailAnimeTitleIncludeProps {
	data: ApiResponse<DetailAnimeResponse>
}

const DetailAnimeTitleInclude = ({
	data
}: DetailAnimeTitleIncludeProps): JSX.Element => {
	const theme = useTheme()
	const navigate = useNavigate()

	const onClick = (slug: string, name: string) => (): void => {
		navigate({
			pathname: '/category',
			search: createSearchParams({ slug, name }).toString()
		})
		window.scroll(0, 0)
	}
	return (
		<Grid container sx={{ paddingTop: '10px' }}>
			{data.included?.map((resp) => (
				<Grid key={resp.id} sx={{ margin: '2px' }}>
					<Typography
						sx={{
							borderLeft: '1px solid rgba(160,160, 160, 0.2)',
							padding: '0 15px',
							fontSize: '0.75em',
							'&:hover': {
								color: theme.palette.animeRed?.main,
								cursor: 'pointer'
							}
						}}
						onClick={onClick(
							resp.attributes.slug,
							resp.attributes.title
						)}
					>
						{resp.attributes.title}
					</Typography>
				</Grid>
			))}
		</Grid>
	)
}

export default DetailAnimeTitleInclude
