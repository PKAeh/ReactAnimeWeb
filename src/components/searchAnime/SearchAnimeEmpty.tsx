import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

interface SearchAnimeNotEmptyProps {
	search: string
}

const SearchAnimeEmpty = ({
	search
}: SearchAnimeNotEmptyProps): JSX.Element => (
	<Grid
		sx={{
			color: 'rgb(160,160, 160)',
			padding: { sm: '30px 50px', xs: '20px ' }
		}}
	>
		<Grid container>
			<Grid>
				<Typography sx={{ fontSize: { sm: '2em', xs: '1.2em' } }}>
					ไม่พบสิ่งที่คุณกำลังค้นหา :
				</Typography>
			</Grid>
			<Grid>
				<Typography
					sx={{
						fontSize: { sm: '2em', xs: '1.2em' },
						paddingLeft: '10px',
						fontWeight: 'bold'
					}}
				>
					{search}
				</Typography>
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
					sx={{
						fontSize: { sm: '0.9em', xs: '0.65em' },
						textIndent: '4em',
						padding: { sm: '10px 0', xs: '5px' }
					}}
				>
					ตรวจสอบให้แน่ใจว่าสะกดถูกต้อง
				</Typography>
				<Typography
					sx={{
						fontSize: { sm: '0.9em', xs: '0.65em' },
						textIndent: '4em',
						padding: { sm: '0 0 10px 0', xs: '5px' }
					}}
				>
					ลองค้นหาเป็นคำๆเช่น เรื่อง Sword Art Online II
					ลองใส่แค่คำว่า Sword
				</Typography>
			</Grid>
		</Grid>
	</Grid>
)

export default SearchAnimeEmpty
