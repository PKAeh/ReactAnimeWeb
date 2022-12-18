import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import BaseLink from '../BaseLink'

const HomePageTitle = (): JSX.Element => (
	<Grid
		container
		sx={{ justifyContent: 'space-between', alignItems: 'center' }}
	>
		<Grid container>
			<Typography
				sx={{
					fontSize: '1.2em',
					fontWeight: '600',
					borderLeft: '3.5px solid #fd5529 ',
					paddingLeft: '13px',
					lineHeight: '21px',
					color: 'white'
				}}
			>
				อนิเมะอัพเดทล่าสุด
			</Typography>
		</Grid>
		<Grid>
			<BaseLink to={'/anime'}>
				<Typography
					sx={{
						backgroundColor: '#fd2226',
						fontSize: '0.6em',
						padding: '2px 8px',
						color: 'white',
						borderRadius: '3px',
						'&:hover': {
							cursor: 'pointer'
						}
					}}
				>
					ดูอนิเมะทั้งหมด
				</Typography>
			</BaseLink>
		</Grid>
	</Grid>
)

export default HomePageTitle
