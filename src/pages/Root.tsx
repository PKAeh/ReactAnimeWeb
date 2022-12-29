import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AnimeAppBar from '../components/navigators/AnimeAppBar'
import CategoryBar from '../components/navigators/CategoryBar'
import Footer from '../components/navigators/Footer'
import YearBar from '../components/navigators/YearBar'

const borderColor = 'rgba(160,160, 160, 0.2)'

const Root = (): JSX.Element => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return (
		<>
			<AnimeAppBar />
			<Container
				sx={{
					padding: '0 !important'
				}}
				maxWidth={'lg'}
			>
				<Grid
					container
					sx={{
						backgroundColor: 'rgba(0,0,0,0.85)',
						borderTop: `1px solid ${borderColor}`
					}}
				>
					<Grid md={8.8} xs>
						<Outlet />
					</Grid>
					<Grid
						md={3.2}
						sx={{ borderLeft: { md: `1px solid ${borderColor}` } }}
					>
						<Grid>
							<CategoryBar />
						</Grid>
						<Grid>
							<YearBar />
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	)
}
export default Root
