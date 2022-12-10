import { useQuery } from '@tanstack/react-query'
import { getLastAnime } from '../services/anime/animeService'
import type { ApiResponse } from '../services/apiResponse'
import type { AnimeResponse } from './../services/anime/animeResponse'
import type { AxiosError, AxiosResponse } from 'axios'

export const useLastAnime = (
  page: number
): {
  lastAnimeLoading: boolean
  lastAnime: AxiosResponse<ApiResponse<AnimeResponse>> | undefined
  lastAnimeError: AxiosError<unknown, unknown> | null
} => {
  const offset = (page - 1) * 20
  const {
    isLoading: lastAnimeLoading,
    data: lastAnime,
    error: lastAnimeError
  } = useQuery<
    AxiosResponse<ApiResponse<AnimeResponse>>,
    AxiosError<unknown, unknown> | null
  >(['lastAnime'], () => getLastAnime(offset))

  return {
    lastAnimeLoading,
    lastAnime,
    lastAnimeError
  }
}
