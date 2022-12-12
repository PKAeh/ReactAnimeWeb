import Grid from '@mui/material/Unstable_Grid2'
import { useParams } from 'react-router-dom'
import DetailAnimeHeader from '../components/detailAnime/DetailAnimeHeader'
import { useDetailAnime } from '../hooks/useDetailAnime'

const DetailAnimePage = (): JSX.Element => {
  const { id } = useParams()
  const { detailAnimeLoading, detailAnime, detailAnimeError } = useDetailAnime(
    id ?? ''
  )
  const resp = detailAnime?.data.data[0]

  return (
    <Grid>
      {resp && <DetailAnimeHeader data={resp} />}
      <Grid></Grid>
      <Grid></Grid>
      <Grid></Grid>
    </Grid>
  )
}
export default DetailAnimePage
