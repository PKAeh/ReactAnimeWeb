import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import HomePageTitle from '../components/homepage/HomePageTitle'

const HomePage = (): JSX.Element => (
  <Grid sx={{ padding: '10px' }}>
    <Grid>
      <HomePageTitle />
    </Grid>
    <Grid></Grid>
  </Grid>
)
export default HomePage
