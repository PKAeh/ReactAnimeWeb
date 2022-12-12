import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { AnimeResponse } from '../../services/anime/animeResponse'

interface AnimeItemProps {
  data: AnimeResponse
}

const AnimeItem = ({ data }: AnimeItemProps): JSX.Element => {
  const [hoverPlayAnimeItem, setHoverPlayAnimeItem] = useState<boolean>(false)
  const [favoriteText, setFavoriteText] = useState<string>('เพิ่มรายการที่ชอบ')
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(false)
  const [bgfavorite, setBgFavorite] = useState<string>('rgb(0,0,0)')
  const navigate = useNavigate()

  const onMouseEnter = (): void => {
    setHoverPlayAnimeItem(true)
  }

  const onMouseLeave = (): void => {
    setHoverPlayAnimeItem(false)
  }

  const clickLike = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    if (favoriteStatus) {
      setFavoriteText('เพิ่มรายการที่ชอบ')
      setFavoriteStatus(false)
      setBgFavorite('rgb(0,0,0)')
    }
    if (!favoriteStatus) {
      setFavoriteText('ชื่นชอบ')
      setFavoriteStatus(true)
      setBgFavorite('rgb(245,14,14)')
    }
    console.log('ความชอบ')
  }

  const clickToPage = (): void => {
    navigate(`/anime/${data.id}`)
    console.log('หน้าอนิเมะ')
  }
  return (
    <Grid
      sx={{
        position: 'relative',
        height: '300px',
        padding: '0',
        borderRadius: '3px',
        backgroundImage: `url("${data.attributes.posterImage.medium}")`,
        backgroundSize: 'cover',
        '&:hover': {
          cursor: 'pointer',
          '&::after': {
            position: 'absolute',
            content: '""',
            display: 'block',
            bgcolor: 'rgba(0,0,0,0.7)',
            width: '100%',
            height: '100%',
            top: '0',
            zIndex: '1'
          }
        }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={clickToPage}
    >
      <Grid
        sx={{
          padding: '0',
          position: 'absolute',
          right: '5px',
          top: '5px',
          zIndex: '2'
        }}
      >
        <Typography
          sx={{
            bgcolor: bgfavorite,
            color: 'white',
            fontSize: '0.7em',
            padding: '1px 3px',
            borderRadius: '3px'
          }}
          onClick={clickLike}
        >
          {favoriteText}
        </Typography>
      </Grid>
      <Grid
        sx={{
          padding: '0',
          position: 'absolute',
          right: '5px',
          top: '28px',
          zIndex: '2'
        }}
      >
        <Typography
          sx={{
            bgcolor: 'rgb(0,0,0)',
            color: 'white',
            fontSize: '0.7em',
            padding: '1px 3px',
            borderRadius: '3px'
          }}
        >
          {' '}
          ตอนที่ {data.attributes.episodeCount}
        </Typography>
      </Grid>
      <Grid
        sx={{
          position: 'absolute',
          zIndex: '2',
          padding: '0',
          top: '120px',
          left: '80px'
        }}
      >
        {hoverPlayAnimeItem && (
          <ArrowForwardIosIcon
            sx={{
              fontSize: '50px',
              color: 'white'
            }}
          />
        )}
      </Grid>

      <Grid
        sx={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          padding: '0',
          zIndex: '2'
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            padding: '10px',
            bgcolor: 'rgba(0,0,0,0.5)',
            fontWeight: 'bold',
            color: 'white',
            fontSize: '0.8em'
          }}
        >
          {data.attributes.canonicalTitle}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AnimeItem
