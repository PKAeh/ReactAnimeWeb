import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'

interface DetailAnimeTitleCategoryProps {
	titleAnime: string
	name: string
}
const DetailAnimeTitleCategory = ({
	titleAnime,
	name
}: DetailAnimeTitleCategoryProps): JSX.Element => {
	const theme = useTheme()
	return (
		<Grid container sx={{ alignItems: 'center', paddingTop: '10px' }}>
			<Typography
				sx={{
					width: '58px',
					fontSize: '0.8em',
					'&:hover': {
						color: theme.palette.animeRed?.main,
						cursor: 'pointer'
					}
				}}
			>
				{name}
			</Typography>
			{titleAnime && (
				<Typography
					sx={{
						borderLeft: '1px solid rgba(160,160, 160, 0.2)',
						padding: '0 10px',
						fontSize: '0.75em',
						'&:hover': {
							color: theme.palette.animeRed?.main,
							cursor: 'pointer'
						}
					}}
				>
					{titleAnime}
				</Typography>
			)}
		</Grid>
	)
}

export default DetailAnimeTitleCategory
