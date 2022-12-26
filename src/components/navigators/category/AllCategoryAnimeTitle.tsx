import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'

interface AllCategoryAnimeTitleProps {
	category: string
}

const AllCategoryAnimeTitle = ({
	category
}: AllCategoryAnimeTitleProps): JSX.Element => {
	const theme = useTheme()
	const redAnime = theme.palette.animeRed?.main
	return (
		<Grid
			container
			sx={{ justifyContent: 'space-between', alignItems: 'center' }}
		>
			<Grid container>
				<Typography
					sx={{
						fontSize: '1.2em',
						fontWeight: '600',
						borderLeft: `3.5px solid ${redAnime}`,
						paddingLeft: '13px',
						lineHeight: '21px',
						color: 'white'
					}}
				>
					อนิเมะ {category}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default AllCategoryAnimeTitle
