import FavoriteIcon from '@mui/icons-material/Favorite'
import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import InputBase from '@mui/material/InputBase'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled, alpha } from '@mui/material/styles'
// import { useHistory, useLocation } from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingLeft: '10px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '1',
  cursor: 'pointer',
  '&:hover': {
    color: '#fd5529'
  }
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '37ch',
      '&:focus': {
        width: '37ch'
      }
    }
  }
}))
const AnimeAppBar = (): JSX.Element => (
  <AppBar position="sticky">
    <Container maxWidth="lg">
      <Toolbar disableGutters sx={{ alignContent: 'stretch' }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/react-store/"
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
          อนิเมะที่ชื่นชอบ <FavoriteIcon sx={{ paddingLeft: '5px' }} />
        </Typography>

        <Box sx={{ flexGrow: 1 }}></Box>

        <Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              // defaultValue={keyword}
              // onKeyDown={onKeyDown}
              placeholder="ค้นหาอนิเมะ…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
)

export default AnimeAppBar
