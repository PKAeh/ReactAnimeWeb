import Grid from '@mui/material/Unstable_Grid2'
import { BaseLoader } from '../components/BaseLoader'
import AnimeList from '../components/anime/AnimeList'
import HomePageTitle from '../components/homepage/HomePageTitle'
import { useLastAnime } from '../hooks/useLastAnime'

const HomePage = (): JSX.Element => {
  const { lastAnimeLoading, lastAnime, lastAnimeError } = useLastAnime(1)

  if (lastAnimeLoading) {
    return <BaseLoader style={{ marginTop: '100px' }} />
  }
  return (
    <Grid sx={{ padding: '10px', width: '100%' }}>
      <Grid sx={{ padding: '15px 8px' }}>
        <HomePageTitle />
      </Grid>
      <Grid sx={{ width: '100%' }}>
        {lastAnime && <AnimeList data={lastAnime.data} />}
      </Grid>
    </Grid>
  )
}
export default HomePage
