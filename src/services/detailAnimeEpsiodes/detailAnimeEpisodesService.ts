import axios from 'axios'
import type { ApiResponse } from './../apiResponse'
import type { DetailAnimeEpisodesResponse } from './detailAnimeEpisodesResponse'
import type { AxiosError, AxiosResponse } from 'axios'

export const getDetailAnimeEpisodes = async (
	id: string,
	offset: number,
	limit: number
): Promise<AxiosResponse<ApiResponse<DetailAnimeEpisodesResponse>>> =>
	await axios.get<
		AxiosError,
		AxiosResponse<ApiResponse<DetailAnimeEpisodesResponse>>
	>(
		`https://kitsu.io/api/edge/episodes?filter[mediaType]=Anime&filter[media_id]=${id}&page[limit]=${limit}&page[offset]=${offset}&sort=number`
	)
