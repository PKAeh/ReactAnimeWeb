import { useQuery } from '@tanstack/react-query'
import { getLastAnime } from '../services/anime/animeService'
import type { ApiResponse } from '../services/apiResponse'
import type { AnimeResponse } from './../services/anime/animeResponse'
import type { AxiosError, AxiosResponse } from 'axios'

interface useLastAnimePram {
  lastAnimeLoading: boolean
  lastAnime: ApiResponse<AnimeResponse> | undefined
  lastAnimeError: AxiosError<unknown, unknown> | null
}

export const useLastAnime = (page: number): useLastAnimePram => {
  const setPage = page * 2

  const offset = (setPage - 2) * 20
  const offset2 = (setPage - 1) * 20

  const {
    isLoading: lastAnimeLoading,
    data: lastAnime,
    error: lastAnimeError
  } = useQuery<
    AxiosResponse<ApiResponse<AnimeResponse>, unknown>[],
    AxiosError<unknown, unknown>,
    ApiResponse<AnimeResponse>,
    string[]
  >({
    queryKey: [`animeLast-${page}`],
    queryFn: () => Promise.all([getLastAnime(offset), getLastAnime(offset2)]),
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
    lastAnimeLoading,
    lastAnime,
    lastAnimeError
  }
}
