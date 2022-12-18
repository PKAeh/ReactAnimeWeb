import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'

interface DetailAnimeDescriptionProps {
	description: string
}
const DetailAnimeDescription = ({
	description
}: DetailAnimeDescriptionProps): JSX.Element => (
	<Grid
		sx={{
			margin: '15px 25px 0 25px',
			paddingBottom: '25px',
			borderBottom: '1px solid rgba(160,160, 160, 0.2)'
		}}
	>
		<Typography sx={{ color: 'white', fontSize: '1.5em' }}>
			เรื่องย่อ
		</Typography>
		<Typography
			sx={{
				wordBreak: 'break-word',
				paddingTop: '10px',
				color: 'rgb(190,190, 190)'
			}}
		>
			{description}
		</Typography>
	</Grid>
)

export default DetailAnimeDescription
