import Grid from '@mui/material/Unstable_Grid2'
import { useParams } from 'react-router-dom'
import { BaseLoader } from '../components/BaseLoader'
import DetailAnimeDescription from '../components/detailAnime/DetailAnimeDescription'
import DetailAnimeEpisode from '../components/detailAnime/detailAnimeEpisode/DetailAnimeEpisode'
import DetailAnimeHeader from '../components/detailAnime/detailAnimeHeader/DetailAnimeHeader'
import DetailAnimeTitle from '../components/detailAnime/detailAnimeTitle/DetailAnimeTitle'
import { useDetailAnime } from '../hooks/useDetailAnime'
import { useDetailAnimeEpisodes } from '../hooks/useDetailAnimeEpisodes'

const DetailAnimePage = (): JSX.Element => {
  const { id } = useParams()
  const { detailAnimeLoading, detailAnime, detailAnimeError } = useDetailAnime(
    id ?? ''
  )
  const resp = detailAnime?.data.data[0]
  const description = resp?.attributes.description ?? ''

  const {
    detailAnimeEpisodesLoading,
    detailAnimeEpisodes,
    detailAnimeEpisodesError
  } = useDetailAnimeEpisodes(1, id ?? '')

  const episodeAnime = detailAnimeEpisodes?.data.data

  if (detailAnimeLoading || detailAnimeEpisodesLoading) {
    return <BaseLoader style={{ paddingTop: '100px' }} />
  }

  return (
    <Grid>
      {resp && <DetailAnimeHeader data={resp} />}
      <Grid sx={{ borderBottom: '3px solid rgba(160,160, 160, 0.2)' }}>
        {detailAnime && <DetailAnimeTitle data={detailAnime?.data} />}
      </Grid>
      <Grid>
        <DetailAnimeDescription description={description} />
      </Grid>
      <Grid>
        {resp && episodeAnime && (
          <DetailAnimeEpisode detailAnime={resp} episodeAnime={episodeAnime} />
        )}
      </Grid>
      <Grid></Grid>
    </Grid>
  )
}
export default DetailAnimePage
