import FavoriteIcon from '@mui/icons-material/Favorite'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SearchInput from './SearchInput'

const AnimeAppBar = (): JSX.Element => (
  <AppBar position="sticky">
    <Container maxWidth="lg">
      <Toolbar disableGutters sx={{ alignContent: 'stretch' }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 4,
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
            fontSize: '1.8rem'
          }}
        >
          ANIMEJIMI
        </Typography>

        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/react-store/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            color: 'inherit',
            textDecoration: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            '&:hover': {
              color: '#fd5529'
            }
          }}
        >
          อนิเมะที่ชื่นชอบ{' '}
          <FavoriteIcon sx={{ padding: '3px 0 0 1px', fontSize: '1.1em' }} />
        </Typography>

        <Box sx={{ flexGrow: 1 }}></Box>

        <Box>
          <SearchInput />
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
)

export default AnimeAppBar
