import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const FavoriteAnimeEmpty = (): JSX.Element => {
	return (
		<Grid
			sx={{
				color: 'rgb(160,160, 160)',
				padding: { sm: '30px 50px', xs: '20px ' }
			}}
		>
			<Grid container>
				<Grid>
					<Typography sx={{ fontSize: { sm: '2em', xs: '1.2em' } }}>
						รายการอนิเมะที่ชื่นชอบนี้ว่างเปล่า :
					</Typography>
				</Grid>
				<Grid>
					<Typography
						sx={{
							fontSize: { sm: '2em', xs: '1.2em' },
							paddingLeft: '10px',
							fontWeight: 'bold'
						}}
					></Typography>
				</Grid>
			</Grid>
			<Grid sx={{ paddingLeft: { sm: '10px', xs: '5px' } }}>
				<Typography
					sx={{
						fontSize: { sm: '1.5em' },
						fontWeight: 'bold',
						paddingTop: { sm: '20px', xs: '10px' }
					}}
				>
					คำแนะนำ :
				</Typography>
				<Grid>
					<Typography
						sx={{ fontSize: { sm: '0.9em', xs: '0.65em' } }}
					>
						<ul>{`กรุณาเพิ่มรายการโดยการกด "เพิ่มรายการที่ชอบ" `}</ul>
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default FavoriteAnimeEmpty
