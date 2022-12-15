import Grid from '@mui/material/Unstable_Grid2'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BaseLoader } from '../components/BaseLoader'
import BasePagination from '../components/BasePagination'
import AnimeList from '../components/anime/AnimeList'
import SearchAnimeNotEmpty from '../components/searchAnime/SearchAnimeNotEmpty'
import SearchAnimeTitle from '../components/searchAnime/SearchAnimeTitle'
import { useSearchAnime } from '../hooks/useSearchAnime'

const SearchPage = (): JSX.Element => {
  const [page, setPage] = useState<number>(1)
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''
  const { searchAnimeLoading, searchAnime, searchAnimeError } = useSearchAnime(
    page,
    search
  )
  const count = Math.ceil((searchAnime?.meta.count ?? 0) / 40)
  const onChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    setPage(page)
  }

  const isSearchAnimeNotNullNotEmpty =
    searchAnime !== undefined && searchAnime.data.length > 0

  if (searchAnimeLoading) {
    return <BaseLoader style={{ marginTop: '100px' }} />
  }

  return (
    <Grid sx={{ padding: '10px', width: '100%' }}>
      <Grid sx={{ padding: '15px 8px' }}>
        <SearchAnimeTitle search={search} />
      </Grid>
      {isSearchAnimeNotNullNotEmpty ? (
        <>
          <Grid sx={{ width: '100%' }}>
            <AnimeList data={searchAnime.data} />
          </Grid>
          <Grid sx={{ padding: '15px 0' }}>
            <BasePagination page={page} count={count} onChange={onChange} />
          </Grid>
        </>
      ) : (
        <SearchAnimeNotEmpty search={search} />
      )}
    </Grid>
  )
}
export default SearchPage
