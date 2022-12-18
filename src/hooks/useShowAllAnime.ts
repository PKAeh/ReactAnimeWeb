import { useQuery } from '@tanstack/react-query'
import { getShowAllAnime } from '../services/anime/animeService'
import type { AnimeResponse } from '../services/anime/animeResponse'
import type { ApiResponse } from '../services/apiResponse'
import type { AxiosError, AxiosResponse } from 'axios'

interface ShowAllAnimePram {
	showAllAnimeLoading: boolean
	showAllAnime: ApiResponse<AnimeResponse> | undefined
	showAllAnimeError: AxiosError<unknown, unknown> | null
}

export const useShowAllAnime = (page: number): ShowAllAnimePram => {
	const limit = 20

	const {
		isLoading: showAllAnimeLoading,
		data: showAllAnime,
		error: showAllAnimeError
	} = useQuery<
		AxiosResponse<ApiResponse<AnimeResponse>, unknown>[],
		AxiosError<unknown, unknown>,
		ApiResponse<AnimeResponse>,
		string[]
	>({
		queryKey: [`ShowAllAnime-${page}`],
		queryFn: () => {
			const setPage = page * 2

			const offset = (setPage - 2) * 20
			const offset2 = (setPage - 1) * 20
			return Promise.all([
				getShowAllAnime(offset, limit),
				getShowAllAnime(offset2, limit)
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
		showAllAnimeLoading,
		showAllAnime,
		showAllAnimeError
	}
}
