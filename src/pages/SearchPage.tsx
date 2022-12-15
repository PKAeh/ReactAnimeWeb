import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchPage = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')
  console.log(search)

  return <div>SearchPage</div>
}
export default SearchPage
