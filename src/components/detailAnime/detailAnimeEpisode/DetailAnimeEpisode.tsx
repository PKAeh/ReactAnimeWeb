import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import DetailAnimeEpisodeItem from './DetailAnimeEpisodeItem'
import type { DetailAnimeResponse } from '../../../services/detailAnime/detailAnimeResponse'
import type { DetailAnimeEpisodesResponse } from '../../../services/detailAnimeEpsiodes/detailAnimeEpisodesResponse'

interface DetailAnimeEpisodeProps {
  detailAnime: DetailAnimeResponse
  episodeAnime: DetailAnimeEpisodesResponse[]
}

const DetailAnimeEpisode = ({
  detailAnime,
  episodeAnime
}: DetailAnimeEpisodeProps): JSX.Element => {
  const nameAnime = detailAnime.attributes.canonicalTitle
  const imageCoverAnime = detailAnime.attributes.posterImage.original
  return (
    <Grid sx={{ padding: '20px 25px 25px 25px' }}>
      <Grid container sx={{ alignItems: 'center' }}>
        <Grid
          sx={{
            bgcolor: 'rgb(180,10,10)',
            padding: '11px',
            color: 'white',
            width: '100px'
          }}
        >
          <Typography sx={{ textAlign: 'center', fontSize: '1.4em' }}>
            ภาค
          </Typography>
        </Grid>
        <Grid
          xs
          sx={{
            bgcolor: 'rgba(180,10,10,0.7)',
            padding: '16px',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          <Typography>{nameAnime}</Typography>
        </Grid>
      </Grid>
      <Grid>
        {episodeAnime.map((resp) => (
          <Grid key={resp.id}>
            <DetailAnimeEpisodeItem
              episodeAnime={resp}
              nameAnime={nameAnime}
              imageCoverAnime={imageCoverAnime}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default DetailAnimeEpisode
