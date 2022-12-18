import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

interface SearchAnimeNotEmptyProps {
	search: string
}

const SearchAnimeNotEmpty = ({
	search
}: SearchAnimeNotEmptyProps): JSX.Element => (
	<Grid sx={{ color: 'rgb(160,160, 160)', padding: '30px 50px' }}>
		<Grid container>
			<Grid>
				<Typography sx={{ fontSize: '2em' }}>
					ไม่พบสิ่งที่คุณกำลังค้นหา :
				</Typography>
			</Grid>
			<Grid>
				<Typography
					sx={{
						fontSize: '2em',
						paddingLeft: '10px',
						fontWeight: 'bold'
					}}
				>
					{search}
				</Typography>
			</Grid>
		</Grid>
		<Grid sx={{ paddingLeft: '10px' }}>
			<Typography
				sx={{
					fontSize: '1.5em',
					fontWeight: 'bold',
					paddingTop: '20px'
				}}
			>
				คำแนะนำ :
			</Typography>
			<Grid>
				<Typography sx={{ fontSize: '0.9em' }}>
					<ul>ตรวจสอบให้แน่ใจว่าสะกดถูกต้อง</ul>
					<ul>
						ลองค้นหาเป็นคำๆเช่น เรื่อง Sword Art Online II
						ลองใส่แค่คำว่า Sword
					</ul>
				</Typography>
			</Grid>
		</Grid>
	</Grid>
)

export default SearchAnimeNotEmpty
