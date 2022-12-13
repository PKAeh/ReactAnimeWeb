import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import DetailAnimeTitleCategory from './DetailAnimeTitleCategory'
import DetailAnimeTitleInclude from './DetailAnimeTitleInclude'
import DetailAnimeTitleRating from './DetailAnimeTitleRating'
import type { ApiResponse } from '../../../services/apiResponse'
import type { DetailAnimeResponse } from '../../../services/detailAnime/detailAnimeResponse'

interface DetailAnimeTitleProps {
  data: ApiResponse<DetailAnimeResponse>
}

const DetailAnimeTitle = ({ data }: DetailAnimeTitleProps): JSX.Element => {
  const titleAnime = data.data[0].attributes.canonicalTitle
  const episodeCount = data.data[0].attributes.episodeCount
  const imageAnime = data.data[0].attributes.posterImage.original
  const rating = Math.floor(Number(data.data[0].attributes.averageRating)) / 10

  return (
    <Grid container sx={{ color: 'white', padding: '20px 25px 25px 25px' }}>
      <Grid>
        <Grid
          sx={{
            width: '180px',
            height: '250px',
            backgroundImage: `url("${imageAnime}")`,
            backgroundSize: 'cover'
          }}
        ></Grid>
      </Grid>
      <Grid xs sx={{ paddingLeft: '20px' }}>
        <Grid
          sx={{
            paddingBottom: '10px',
            borderBottom: '1px solid rgba(160,160, 160, 0.2)'
          }}
        >
          <Typography sx={{ fontSize: '1.8em', wordBreak: 'break-all' }}>
            {titleAnime} ตอนที่ {episodeCount && `1-${episodeCount}`}
          </Typography>
        </Grid>
        <DetailAnimeTitleRating rating={rating} />
        <DetailAnimeTitleCategory titleAnime={titleAnime} name="ชื่อเรื่อง" />
        <DetailAnimeTitleCategory titleAnime={''} name="หมวดหมู่" />
        <Grid container sx={{ alignItems: 'center' }}>
          <DetailAnimeTitleCategory titleAnime={''} name="ประเภท" />
          <DetailAnimeTitleInclude data={data} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DetailAnimeTitle
