import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

interface usePagePram {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const usePage = (): usePagePram => {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const initPage = Number(searchParams.get('page') ?? 1)
  const [page, setPage] = useState<number>(initPage)

  useEffect(() => {
    const page = Number(searchParams.get('page') ?? 1)
    setPage(page)
  }, [location, searchParams])

  return {
    page,
    setPage
  }
}
