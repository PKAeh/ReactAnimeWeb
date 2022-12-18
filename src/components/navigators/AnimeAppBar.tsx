import FavoriteIcon from '@mui/icons-material/Favorite'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useParams } from 'react-router-dom'
import BaseLink from '../BaseLink'
import SearchInput from './SearchInput'

const AnimeAppBar = (): JSX.Element => {
	const { favorite: animeFavorite } = useParams()
	const favorite = 'อนิเมะชื่นชอบ'
	return (
		<AppBar position="sticky">
			<Container maxWidth="lg" sx={{ padding: '0 0 0 20px !important' }}>
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
							ANIMEJIMI
						</Typography>
					</BaseLink>

					<BaseLink to={`/favorite/${favorite}`}>
						<Typography
							variant="h6"
							noWrap
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								color:
									animeFavorite === 'อนิเมะชื่นชอบ'
										? '#fd5529'
										: 'white',
								fontSize: '1rem',
								cursor: 'pointer',
								'&:hover': {
									color: '#fd5529'
								}
							}}
						>
							อนิเมะที่ชื่นชอบ{' '}
							<FavoriteIcon
								sx={{
									padding: '3px 0 0 1px',
									fontSize: '1.1em'
								}}
							/>
						</Typography>
					</BaseLink>

					<Box sx={{ flexGrow: 1 }}></Box>

					<Box>
						<SearchInput />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default AnimeAppBar
