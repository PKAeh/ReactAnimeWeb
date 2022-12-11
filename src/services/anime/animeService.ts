import axios from 'axios'
import type { ApiResponse } from './../apiResponse'
import type { AnimeResponse } from './animeResponse'
import type { AxiosError, AxiosResponse } from 'axios'

export const getLastAnime = async (
  offset: number
): Promise<AxiosResponse<ApiResponse<AnimeResponse>>> =>
  await axios.get<AxiosError, AxiosResponse<ApiResponse<AnimeResponse>>>(
    `https://kitsu.io/api/edge/anime?sort=-endDate&page[limit]=20&page[offset]=${offset}&filter[status]=current,finished`
  )