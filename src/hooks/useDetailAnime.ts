import { useQuery } from '@tanstack/react-query'
import { getDetailAnime } from './../services/detailAnime/detailAnimeService'
import type { ApiResponse } from '../services/apiResponse'
import type { DetailAnimeResponse } from './../services/detailAnime/detailAnimeResponse'
import type { AxiosError, AxiosResponse } from 'axios'

export const useDetailAnime = (
	id: string
): {
	detailAnimeLoading: boolean
	detailAnime: AxiosResponse<ApiResponse<DetailAnimeResponse>> | undefined
	detailAnimeError: AxiosError<unknown, unknown> | null
} => {
	const {
		isLoading: detailAnimeLoading,
		data: detailAnime,
		error: detailAnimeError
	} = useQuery<
		AxiosResponse<ApiResponse<DetailAnimeResponse>>,
		AxiosError<unknown, unknown> | null
	>([`detailAnime-${id}`], () => getDetailAnime(id))

	return {
		detailAnimeLoading,
		detailAnime,
		detailAnimeError
	}
}
