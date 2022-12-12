import axios from 'axios'
import type { ApiResponse } from '../apiResponse'
import type { DetailAnimeResponse } from './detailAnimeResponse'
import type { AxiosError, AxiosResponse } from 'axios'

export const getDetailAnime = async (
  id: string
): Promise<AxiosResponse<ApiResponse<DetailAnimeResponse>>> =>
  await axios.get<AxiosError, AxiosResponse<ApiResponse<DetailAnimeResponse>>>(
    `https://kitsu.io/api/edge/anime?fields[categories]=slug,title&filter[id]=${id}&include=categories,animeProductions.producer`
  )
