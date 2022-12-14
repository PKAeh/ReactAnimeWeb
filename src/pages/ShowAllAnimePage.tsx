import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { BaseLoader } from '../components/BaseLoader'
import BasePagination from '../components/BasePagination'
import AnimeList from '../components/anime/AnimeList'
import ShowAllAnimeTitle from '../components/showAllAnime/ShowAllAnimeTitle'
import { useShowAllAnime } from '../hooks/useShowAllAnime'

const ShowAllAnimePage = (): JSX.Element => {
  const [page, setPage] = useState<number>(1)
  const { showAllAnimeLoading, showAllAnime, showAllAnimeError } =
    useShowAllAnime(page)
  const count = Math.ceil((showAllAnime?.meta.count ?? 0) / 40)
  console.log(count)

  const onChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    setPage(page)
  }

  if (showAllAnimeLoading) {
    return <BaseLoader style={{ marginTop: '100px' }} />
  }
  return (
    <Grid sx={{ padding: '10px', width: '100%' }}>
      <Grid sx={{ padding: '15px 8px' }}>
        <ShowAllAnimeTitle />
      </Grid>
      <Grid sx={{ width: '100%' }}>
        {showAllAnime && <AnimeList data={showAllAnime.data} />}
      </Grid>
      <Grid sx={{ padding: '15px 0' }}>
        <BasePagination page={page} count={count} onChange={onChange} />
      </Grid>
    </Grid>
  )
}

export default ShowAllAnimePage
