import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { BaseLoader } from '../components/BaseLoader'
import { useSearchAnime } from '../hooks/useSearchAnime'

const SearchPage = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''
  const { searchAnimeLoading, searchAnime, searchAnimeError } = useSearchAnime(
    1,
    search
  )

  if (searchAnimeLoading) {
    return <BaseLoader style={{ marginTop: '100px' }} />
  }

  return <div>SearchPage</div>
}
export default SearchPage
