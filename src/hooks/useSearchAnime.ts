import { useQuery } from '@tanstack/react-query'
import { getSearchAnime } from '../services/anime/animeService'
import type { AnimeResponse } from '../services/anime/animeResponse'
import type { ApiResponse } from '../services/apiResponse'
import type { AxiosError, AxiosResponse } from 'axios'

interface SearchAnimePram {
  searchAnimeLoading: boolean
  searchAnime: ApiResponse<AnimeResponse> | undefined
  searchAnimeError: AxiosError<unknown, unknown> | null
}

export const useSearchAnime = (
  page: number,
  search: string
): SearchAnimePram => {
  const limit = 20

  const {
    isLoading: searchAnimeLoading,
    data: searchAnime,
    error: searchAnimeError
  } = useQuery<
    AxiosResponse<ApiResponse<AnimeResponse>, unknown>[],
    AxiosError<unknown, unknown>,
    ApiResponse<AnimeResponse>,
    string[]
  >({
    queryKey: [`SearchAnime-${page}-${search}`],
    queryFn: () => {
      const setPage = page * 2

      const offset = (setPage - 2) * 20
      const offset2 = (setPage - 1) * 20
      return Promise.all([
        getSearchAnime(offset, limit, search),
        getSearchAnime(offset2, limit, search)
      ])
    },
    select(
      data: AxiosResponse<ApiResponse<AnimeResponse>>[]
    ): ApiResponse<AnimeResponse> {
      return {
        ...data[0].data,
        data: [...data[0].data.data, ...data[1].data.data]
      }
    }
  })

  return {
    searchAnimeLoading,
    searchAnime,
    searchAnimeError
  }
}
