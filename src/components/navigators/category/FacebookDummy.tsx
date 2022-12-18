import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import bgFacebook from '../../../assets/images/bgFacebook.jpeg'
import imageFacebook from '../../../assets/images/imageProflieFacebook.jpg'

const FacebookDummy = (): JSX.Element => (
	<Grid
		sx={{
			position: 'relative',
			backgroundImage: `url("${bgFacebook}")`,
			backgroundSize: 'cover',
			height: '150px',
			margin: '20px',
			'&::after': {
				position: 'absolute',
				content: '""',
				display: 'block',
				background:
					'linear-gradient(180deg, rgba(0,0,0,0.55) 5%, rgba(0,0,0,0.1) 61%)',
				width: '100%',
				height: '100%',
				top: '0',
				zIndex: '1'
			}
		}}
	>
		<Grid
			container
			sx={{
				position: 'absolute',
				padding: '10px',
				width: '100%',
				height: '100%',
				flexDirection: 'column',
				justifyContent: 'space-between',
				zIndex: '2'
			}}
		>
			<Grid container>
				<Grid
					sx={{
						backgroundImage: `url("${imageFacebook}")`,
						backgroundSize: 'cover',
						width: '50px',
						height: '50px',
						border: '1px solid white',
						'&:hover': {
							cursor: 'pointer'
						}
					}}
				></Grid>
				<Grid sx={{ paddingLeft: '10px', color: 'white' }}>
					<Typography
						sx={{
							fontSize: '1.2em',
							'&:hover': {
								cursor: 'pointer',
								textDecoration: 'underline'
							}
						}}
					>
						AnimeJimi
					</Typography>
					<Typography sx={{ fontSize: '0.75em' }}>
						2,155,120 ผู้ติดตาม
					</Typography>
				</Grid>
			</Grid>
			<Grid container sx={{ justifyContent: 'space-between' }}>
				<Grid
					container
					sx={{
						backgroundColor: 'white',
						padding: '0 5px',
						alignItems: 'center',
						height: '28px',
						'&:hover': {
							cursor: 'pointer'
						}
					}}
				>
					<FacebookIcon sx={{ fontSize: '20px' }} />
					<Typography
						sx={{
							fontSize: '0.8em',
							fontWeight: 'bold',
							paddingLeft: '3px'
						}}
					>
						ติดตามเพจ
					</Typography>
				</Grid>
				<Grid>
					<Grid
						container
						sx={{
							backgroundColor: 'white',
							padding: '0 5px',
							alignItems: 'center',
							height: '28px',
							'&:hover': {
								cursor: 'pointer'
							}
						}}
					>
						<YouTubeIcon sx={{ fontSize: '20px' }} />
						<Typography
							sx={{
								fontSize: '0.8em',
								fontWeight: 'bold',
								paddingLeft: '3px'
							}}
						>
							ชมวีดีโอ
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	</Grid>
)

export default FacebookDummy
