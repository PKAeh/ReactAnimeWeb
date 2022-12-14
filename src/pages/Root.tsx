import { Container, Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import AnimeAppBar from '../components/navigators/AnimeAppBar'
import CategoryBar from '../components/navigators/CategoryBar'
import Footer from '../components/navigators/Footer'
import YearBar from '../components/navigators/YearBar'

const Root = (): JSX.Element => (
  <>
    <AnimeAppBar />
    <Container
      sx={{
        padding: '0 !important'
      }}
    >
      <Grid container sx={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <Grid xs={8.8}>
          <Outlet />
        </Grid>
        <Grid xs={3.2} sx={{ borderLeft: '1px solid rgba(160,160, 160, 0.2)' }}>
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
export default Root
