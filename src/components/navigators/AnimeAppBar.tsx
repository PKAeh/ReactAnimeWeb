import CloseIcon from '@mui/icons-material/Close'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SearchIcon from '@mui/icons-material/Search'
import { Fade } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grow from '@mui/material/Grow'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useIsDesktop } from '../../hooks/useIsDesktop'
import { getFavoriteCount } from '../../store/slicer'
import BaseLink from '../BaseLink'
import SearchInput from './SearchInput'

let triggerTimeout: NodeJS.Timeout
let showCountTimeout: NodeJS.Timeout
const AnimeAppBar = (): JSX.Element => {
	const theme = useTheme()
	const redAnime = theme.palette.animeRed?.main
	const { favorite: animeFavorite } = useParams()
	const countFavorite = useSelector(getFavoriteCount)
	const { isDesktop } = useIsDesktop()
	const [trigger, setTrigger] = useState<boolean>(true)
	const [showCount, setShowCount] = useState<boolean>(false)
	const [showMobileSearch, setShowMobileSearch] = useState<boolean>(false)

	const onClickMobileSearch = (): void => {
		setShowMobileSearch(!showMobileSearch)
	}

	useEffect(() => {
		setTrigger(false)
		setShowCount(false)

		if (triggerTimeout) {
			clearTimeout(triggerTimeout)
		}
		if (showCountTimeout) {
			clearTimeout(showCountTimeout)
		}
		triggerTimeout = setTimeout(() => {
			setTrigger(true)
		}, 400)

		showCountTimeout = setTimeout(() => {
			if (countFavorite > 0) {
				setShowCount(true)
			}
		}, 400)
	}, [countFavorite])

	return (
		<AppBar position="sticky">
			<Container
				maxWidth="lg"
				sx={{
					padding: {
						md: '0 0 0 20px !important',
						xs: '0 0 0 15px !important'
					}
				}}
			>
				<Toolbar disableGutters sx={{ alignContent: 'stretch' }}>
					<BaseLink to="/">
						<Typography
							variant="h6"
							noWrap
							sx={{
								mr: 4,
								fontFamily: 'monospace',
								fontWeight: 700,
								color: 'white',
								fontSize: '1.8rem'
							}}
						>
							ANIMERIMU
						</Typography>
					</BaseLink>

					<BaseLink to={`/favorite`}>
						<Grid
							container
							sx={{
								mr: 2,
								fontFamily: 'monospace',
								color:
									animeFavorite === 'อนิเมะชื่นชอบ'
										? redAnime
										: 'white',
								fontSize: '1rem',
								cursor: 'pointer',
								'&:hover': {
									color: redAnime
								}
							}}
						>
							<Grid>
								<Typography
									variant="h6"
									noWrap
									sx={{ fontSize: '1rem' }}
								>
									{isDesktop ? 'อนิเมะที่ชื่นชอบ' : 'Anime'}
								</Typography>
							</Grid>
							<Grid>
								<Grow in={trigger} timeout={1000}>
									<FavoriteIcon
										sx={{
											padding: '4px 0 0 1px',
											fontSize: '1.1em'
										}}
									></FavoriteIcon>
								</Grow>
							</Grid>
							<Grid>
								<Fade in={showCount} timeout={300} appear>
									<Typography
										sx={{
											padding: '3px 0 0 3px',
											fontWeight: 'bold',
											fontSize: '0.8em',
											color: redAnime
										}}
									>
										{showCount &&
											countFavorite > 0 &&
											countFavorite}
									</Typography>
								</Fade>
							</Grid>
						</Grid>
					</BaseLink>

					<Box
						sx={{
							flexGrow: 1
						}}
					></Box>

					<Box
						sx={{
							display: { md: 'none' },
							padding: '10px 15px 10px 10px'
						}}
						onClick={onClickMobileSearch}
					>
						{showMobileSearch ? (
							<CloseIcon sx={{ color: redAnime }} />
						) : (
							<SearchIcon />
						)}
					</Box>

					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						<SearchInput />
					</Box>
				</Toolbar>
				{showMobileSearch && <SearchInput />}
			</Container>
		</AppBar>
	)
}

export default AnimeAppBar
