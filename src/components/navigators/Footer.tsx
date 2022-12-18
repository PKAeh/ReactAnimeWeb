import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'

const Footer = (): JSX.Element => {
	const goToTop = (): void => window.scrollTo(0, 0)

	return (
		<Container sx={{ padding: '0 !important' }}>
			<Grid
				container
				sx={{
					alignItems: 'center',
					padding: '15px 30px',
					color: 'white',
					backgroundColor: 'rgba(16, 17, 19,0.9)',
					cursor: 'pointer',
					borderTop: '1px solid rgba(160,160, 160, 0.2)'
				}}
			>
				<Grid xs={10}>
					<Typography
						sx={{ fontSize: '0.9em', color: 'rgb(160,160, 160)' }}
					>
						ดูการ์ตูนออนไลน์ ดูอนิเมะออนไลน์ ตอนใหม่ล่าสุด
					</Typography>
				</Grid>
				<Grid xs={2} sx={{ display: 'flex', justifyContent: 'end' }}>
					<Grid
						sx={{
							display: 'flex',
							backgroundColor: 'rgb(80, 80, 80)',
							width: '45px',
							height: '35px',
							borderRadius: '8px',
							alignItems: 'center',
							justifyContent: 'center'
						}}
						onClick={goToTop}
					>
						<KeyboardArrowUpIcon />
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Footer
